/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Buscador2 = createComponent(async ($$result, $$props, $$slots) => {
  function getDayName(dateString) {
    var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    return dayName;
  }
  function getMonthDay(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const monthName = date.toLocaleDateString("es-ES", { month: "long" });
    const dayNumber = date.getDate();
    return `${dayNumber} de ${monthName}`;
  }
  function getFormatTimeTo12Hour(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  }
  const response = await fetch("https://autoevaluacion.umanizales.edu.co/events.json");
  const data = await response.json();
  console.log(data);
  const events = data.map((event) => ({
    name: event.name,
    image: event.imagen,
    dates: event.dates?.start?.localDate,
    dayName: event.dates?.start?.localDate ? getDayName(event.dates.start.localDate) : null,
    monthName: event.dates?.start?.localDate ? getMonthDay(event.dates.start.localDate) : null,
    hour: event.dates?.start?.localTime ? getFormatTimeTo12Hour(event.dates.start.localTime) : null
  })) || [];
  console.log(events);
  return renderTemplate`<!-- Lista de eventos -->${maybeRenderHead()}<div class="flex items-center justify-center h-full"> <div class="grid grid-cols-1 w-10/12 mt-32"> <div class="mt-10"> <div class="flex max-h-[1000px] w-full flex-col overflow-y-scroll"> ${events.map((event) => renderTemplate`<button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5"> <div class="flex h-24 w-1/6 items-end text-black group-hover:bg-green-200"> <p class="tag w-full text-center text-1xl font-medium text-gray-700 group-hover:text-green-900"> <label class="text-slider-nav" style="text-transform: capitalize;">${event.dayName}</label><br><label style="color: #802f00;">${event.monthName}</label> <br><label class="text-botones">${event.hour}</label> </p> </div> <div class="flex w-full flex-col items-start justify-between"> <a${addAttribute(`/events/${event.name.replace(/\s+/g, "-").toLowerCase()}`, "href")}> <p class="text-left text-4xl text-slider-nav font-semibold">${event.name}</p> </a> </div> </button>
                  <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">`)} <br> </div> </div> </div> </div>`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Buscador2.astro", void 0);
const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Buscador2.astro";
const $$url = "/totem-um/dist/components/Buscador2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Buscador2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Buscador2 as $, _page as _ };
