/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_7KwYiMtk.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ListaEventos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ListaEventos;
  const response = await fetch({"ASSETS_PREFIX": undefined, "BASE_URL": "/totem-um/dist/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true}.PUBLIC_API_EVENTS);
  const data = await response.json();
  function getDayName(dateString) {
    var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    return dayName;
  }
  function getNumberDay(dateString) {
    const date = new Date(dateString);
    const dayNumber = date.getDate();
    return `${dayNumber}`;
  }
  function getMonthName(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Fecha inválida:", dateString);
      return "Fecha inválida";
    }
    const monthName = date.toLocaleDateString("es-ES", { month: "long" });
    return monthName;
  }
  function getFormatTimeTo12Hour(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  }
  const events = data.map((event) => ({
    id: event.id,
    name: event.name,
    description: event.description,
    image: event.imagen,
    date: event.date,
    dayName: event.date ? getDayName(event.date) : null,
    monthName: event.date ? getMonthName(event.date) : null,
    dayNumber: event.date ? getNumberDay(event.date) : null,
    hour: event.date ? getFormatTimeTo12Hour(event.date) : null
  })) || [];
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="space-y-4 pt-20 pb-20"> ${events.map((event) => renderTemplate`<li class="p-4 bg-white shadow rounded-lg flex items-center justify-between"> <div> <h3 class="text-slider-nav font-semibold text-lg">${event.name}</h3> <p class="text-gray-500 w-28 truncate">${event.description}</p> <time class="text-sm text-gray-400"> ${event.dayName} ${event.dayNumber} de ${event.monthName} a las ${event.hour} </time> </div> <a class="text-blue-500 hover:text-blue-700"${addAttribute(`/admin/evento/edit/${event.id}`, "href")}>Editar</a> <form method="delete" id="eliminarEvento"> <input class="hidden" type="text" name="id" id="id"${addAttribute(event.id, "value")}> <button type="submit" class="text-red-500 hover:text-red-700">Eliminar</button> </form> </li>`)} </ul> <!-- Mensaje de confirmación flotante --> <div id="confirmationMessage2" class="fixed top-4 right-4 hidden transition-opacity duration-500 ease-in-out"> <div id="toast-danger" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert"> <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"></path> </svg> <span class="sr-only">Error icon</span> </div> <div class="ms-3 text-sm font-normal">¡El evento ha sido eliminado!</div> <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close"> <span class="sr-only">Close</span> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> </button> </div> </div> `;
}, "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/admin/ListaEventos.astro", void 0);
const $$file = "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/admin/ListaEventos.astro";
const $$url = "/totem-um/dist/admin/ListaEventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ListaEventos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ListaEventos as $, _page as _ };
