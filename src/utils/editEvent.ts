export async function editEvent(eventData: {
    id: string;
    name: string;
    description: string;
    moderator: string;
    place: string;
    mode: string;
    date: string;
    image: File | null;
  }) {
    try {
      const response = await fetch("https://api-dev.umanizales.edu.co/api/v1/module/totem-um/event", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
  
      if (!response.ok) {
        console.error("Error al actualizar el evento:", response.status, response.statusText);
        throw new Error("Error al actualizar el evento");
      }
  
      console.log("Evento actualizado correctamente");
    } catch (error) {
      console.error("Error en la solicitud PATCH:", error);
      throw error;
    }
  }
  