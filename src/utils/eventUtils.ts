// Listado de eventos

interface Event {
    id: string;
    name: string;
    image: string;
    description: string;
    date: string;
    dayName: string | null;
    dayNumber: string | null;
    monthName: string | null;
    hour: string | null;
  }
  
  async function fetchEvents() {
    const response = await fetch(import.meta.env.PUBLIC_API_EVENTS);
    const data = await response.json();
    
    const events = data.map((event: any) => {
    const eventDate = new Date(event.date);
  
      return {
          id: event.id,
          name: event.name,
          description: event.description,
          image: event.image,
          date: event.date,
          dayName: event.date 
              ? new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(eventDate) 
              : null,
          monthName: event.date 
              ? new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(eventDate) 
              : null,
          dayNumber: event.date 
              ? eventDate.getDate() 
              : null,
          hour: event.date 
              ? new Intl.DateTimeFormat('es-ES', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
              }).format(eventDate)
              : null,
      };
  }) || [];
  
    return events;
  }
  
  export { fetchEvents };
  export type { Event };