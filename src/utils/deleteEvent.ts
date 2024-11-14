// Definimos la función deleteEvent con tipado para el parámetro 'id'
export async function deleteEvent(id: string): Promise<void> {
  try {
    const response = await fetch(`https://api-dev.umanizales.edu.co/api/v1/module/totem-um/event/${id}`, {
      method: 'DELETE',
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
      console.error('Error al eliminar el evento');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}