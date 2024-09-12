/* empty css                               */
import { c as createComponent, r as renderTemplate, d as renderHead, a as addAttribute } from '../chunks/astro/server_BsEV8pba.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Api = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=hHcnyJayuOYh79PsG8tByQAD4Us0TKWT");
  const data = await response.json();
  const events = data._embedded?.events.map((event) => ({
    name: event.name,
    image: event.images[0]?.url,
    dates: event.dates?.start?.localDate
  })) || [];
  console.log(events);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Ticketmaster Events</title>${renderHead()}</head> <body class="p-4 bg-gray-100"> <h1 class="text-2xl font-bold mb-4">Eventos de Ticketmaster</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${events.map((event) => renderTemplate`<div class="bg-white shadow-lg rounded-lg overflow-hidden"> <img${addAttribute(event.image, "src")}${addAttribute(event.name, "alt")} class="w-full h-48 object-cover"> <div class="p-4"> <h2 class="text-xl font-bold mb-2">${event.name}</h2> <p class="text-gray-700">${event.dates ? `Fecha: ${event.dates}` : "Fecha no disponible"}</p> </div> </div>`)} </div> </body></html>`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/api.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/api.astro";
const $$url = "/api";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Api,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
