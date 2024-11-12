// Detalles de cada evento

interface Event {
  name: string;
  image: string;
  description: string;
  place: string;
  mode: string;
  moderator: string;
  date: string;
  url: string;
  dayName: string | null;
  monthName: string | null;
  hour: string | null;
}

const url_image_api = import.meta.env.API_EVENTS_IMG;

async function fetchEventByName(name: string) {
  // Fetch de los eventos desde la API
  const response = await fetch(import.meta.env.PUBLIC_API_EVENTS);
  const events = await response.json();

  // Encontrar el evento por nombre
  const event = events.find((e: any) => e.name.replace(/\s+/g, '-').toLowerCase() === name);

  if (!event) {
    throw new Error('Evento no encontrado');
  }

  // Procesar la fecha del evento
  const eventDate = new Date(event.date);
  const dayNumber = eventDate.getDate();
  const dayName = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(eventDate);
  const monthName = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(eventDate);
  const year = eventDate.getFullYear();
  const fullHour = new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit',
    minute: '2-digit',                    
    hour12: true,
  }).format(eventDate);

  return {
    ...event,
    dayNumber,
    dayName,
    monthName,
    year,
    fullHour,
    url_image_api,
  };
}

export type { Event };
export { fetchEventByName };