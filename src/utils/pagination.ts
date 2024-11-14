export function initializePagination(eventsPerPage: number) {
  document.addEventListener("DOMContentLoaded", () => {
    const eventItems = document.querySelectorAll(".event-item");
    const totalPages = Math.ceil(eventItems.length / eventsPerPage);
    const paginationContainer = document.getElementById("pagination") as HTMLElement;

    let currentPage = 1;

    function renderPagination() {
      paginationContainer.innerHTML = "";

      // Botón de "Anterior"
      const prevButton = document.createElement("button");
      prevButton.innerHTML = "⟨";
      prevButton.className = `flex items-center justify-center text-lg font-black ${
        currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-botones cursor-pointer"
      }`;
      prevButton.disabled = currentPage === 1;

      prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          displayEvents();
          renderPagination();
        }
      });
      paginationContainer.appendChild(prevButton);

      // Botones de números de página
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i.toString();
        pageButton.className = `px-3 py-1 rounded-full ${
          i === currentPage ? "bg-botones text-slider-nav font-semibold" : "text-slider-nav font-semibold" 
        } cursor-pointer`;
        pageButton.addEventListener("click", () => {
          currentPage = i;
          displayEvents();
          renderPagination();
        });
        paginationContainer.appendChild(pageButton);
      }

      // Botón de "Siguiente"
      const nextButton = document.createElement("button");
      nextButton.textContent = "⟩";
      nextButton.className = `flex items-center justify-center text-lg font-black ${
        currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-botones cursor-pointer"
      }`;
      nextButton.disabled = currentPage === totalPages;
      nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          displayEvents();
          renderPagination();
        }
      });
      paginationContainer.appendChild(nextButton);
    }

    function displayEvents() {
      const start = (currentPage - 1) * eventsPerPage;
      const end = start + eventsPerPage;

      eventItems.forEach((item, index) => {
        const eventItem = item as HTMLElement;
        eventItem.style.display = index >= start && index < end ? "flex" : "none";
      });
    }

    renderPagination();
    displayEvents();
  });
}
  