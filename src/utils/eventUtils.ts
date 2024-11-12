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
    
    function getDayName(dateString: string) {
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const d = new Date(dateString);
      return days[d.getDay()];
    }
  
    function getNumberDay(dateString: string) {
      const date = new Date(dateString);
      return `${date.getDate()}`;
    }
  
    function getMonthName(dateString: string) {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        console.error("Fecha inválida:", dateString);
        return "Fecha inválida";
      }
      return date.toLocaleDateString('es-ES', { month: 'long' });
    }
  
    function getFormatTimeTo12Hour(timeString: string) {
      const [hours, minutes] = timeString.split(':').map(Number);
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hour12 = hours % 12 || 12;
      return `${hour12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    }
  
    const events: Event[] = data.map((event: any) => ({
      id: event.id,
      name: event.name,
      description: event.description,
      image: event.image,
      date: event.date,
      dayName: event.date ? getDayName(event.date) : null,
      monthName: event.date ? getMonthName(event.date) : null,
      dayNumber: event.date ? getNumberDay(event.date) : null,
      hour: event.date ? getFormatTimeTo12Hour(event.date) : null,
    }));
  
    return events;
  }
  
  export { fetchEvents };
  export type { Event };