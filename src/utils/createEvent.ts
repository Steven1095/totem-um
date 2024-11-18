// Crear evento

export async function createEvent(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement | null;
    if (form) {
      const formData = new FormData(form);
      const dateValue = formData.get("date");
  
      // Crear la fecha en UTC basada en el valor del formulario
      const fechaActual = new Date(dateValue as string);
  
      // Ajustar la fecha a GMT-5
      fechaActual.setUTCHours(fechaActual.getUTCHours() - 5);
      const año = fechaActual.getUTCFullYear();
      const mes = String(fechaActual.getUTCMonth() + 1).padStart(2, "0");
      const dia = String(fechaActual.getUTCDate()).padStart(2, "0");
      const horas = String(fechaActual.getUTCHours()).padStart(2, "0");
      const minutos = String(fechaActual.getUTCMinutes()).padStart(2, "0");
      const segundos = String(fechaActual.getUTCSeconds()).padStart(2, "0");
      const form_date = `${año}-${mes}-${dia}T${horas}:${minutos}:${segundos}-05:00`;
      formData.set("date", form_date);    
      
      // Imprimir los datos que se van a enviar a la API
      const formDataObject: { [key: string]: any } = {};
      formData.forEach((value, key) => {
          formDataObject[key] = value;
      });
      console.log("Datos a enviar a la API:", formDataObject);
      
      try {
        const response = await fetch(import.meta.env.PUBLIC_API_EVENTS, {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          form.reset();
          const confirmationMessage = document.getElementById("confirmationMessage");
          if (confirmationMessage) {
            confirmationMessage.classList.remove("hidden", "opacity-0");
            confirmationMessage.classList.add("opacity-100");
            setTimeout(() => {
              confirmationMessage.classList.add("opacity-0");
              setTimeout(() => {
                confirmationMessage.classList.add("hidden");
                window.location.reload();
              }, 500);
            }, 3000);
          } else {
            console.error("El elemento de confirmación no existe en el DOM.");
          }
        } else {
          const errorData = await response.json();
          console.error("Error en el envío de datos", response.status, errorData);
        }
      } catch (error) {
        console.error("Error al enviar datos:", error);
      }
    } else {
      console.error("El formulario no se encontró en el evento.");
    }
  }  