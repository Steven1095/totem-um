// deleteEvent.js
export function initDeleteEvent() {
  const forms = document.querySelectorAll(".eliminarEventoForm");

  forms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const eventId = form.getAttribute("data-event-id");

      try {
        const response = await fetch(`https://api-dev.umanizales.edu.co/api/v1/module/totem-um/event/${eventId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const confirmationMessage2 = document.getElementById("confirmationMessage2");
          if (confirmationMessage2) {
            confirmationMessage2.classList.remove("hidden", "opacity-0");
            confirmationMessage2.classList.add("opacity-100");

            setTimeout(() => {
              confirmationMessage2.classList.add("opacity-0");
              setTimeout(() => {
                confirmationMessage2.classList.add("hidden");
                window.location.reload();
              }, 500);
            }, 3000);
          } else {
            console.error("El elemento de confirmación no existe en el DOM.");
          }
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error al eliminar el evento:", error);
        alert("Hubo un error al intentar eliminar el evento");
      }
    });
  });
}
