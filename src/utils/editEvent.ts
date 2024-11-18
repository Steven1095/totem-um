export async function editEvent(eventData: {
    id: string;
    name: string;
    description: string;
    moderator: string;
    place: string;
    mode: string;
    date: string;
    file: File | null;
  }) {
    
    console.log("datos recibidos",eventData);
    try {
      const response = await fetch("https://api-dev.umanizales.edu.co/api/v1/module/totem-um/event", {
        method: "PATCH", 
        body: JSON.stringify(eventData),
      });
  
      if (!response.ok) {
        console.error("Error al actualizar el evento:", response.status, response.statusText);
        throw new Error("Error al actualizar el evento");
      }
      
      const editConfirmationMessage = document.getElementById("editConfirmationMessage");
      if (editConfirmationMessage) {
        editConfirmationMessage.classList.remove("hidden", "opacity-0");
        editConfirmationMessage.classList.add("opacity-100");
        setTimeout(() => {
          editConfirmationMessage.classList.add("opacity-0");
          setTimeout(() => {
            editConfirmationMessage.classList.add("hidden");
            window.location.reload();
          }, 500);
        }, 3000);
      } else {
        console.error("El elemento de confirmación no existe en el DOM.");
      }

      console.log("Evento actualizado correctamente");
    } catch (error) {
      console.error("Error en la solicitud PATCH:", error);
      throw error;
    }
  }
  