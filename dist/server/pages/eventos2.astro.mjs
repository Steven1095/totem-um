/* empty css                                      */
import { c as createComponent, r as renderTemplate, e as renderHead } from '../chunks/astro/server_7KwYiMtk.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Eventos2 = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://autoevaluacion.umanizales.edu.co/events.json");
  const events = await res.json();
  console.log(events);
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Buscador de Eventos</title>${renderHead()}</head> <body class="bg-gray-100 p-6"> <!-- Pasamos los eventos directamente en el x-data --> <div x-data="searchComponent({ events: <?= JSON.stringify(events) ?> })" class="container mx-auto"> <!-- Input de búsqueda --> <div class="mb-4"> <input type="text" x-model="query" placeholder="Buscar eventos..." class="w-full p-2 border rounded-md"> </div> <!-- Mostrar resultados filtrados --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <template x-for="event in filteredEvents" :key="event.id"> <div class="p-4 bg-white shadow-md rounded-md"> <h2 class="text-xl font-bold" x-text="event.name"></h2> <!-- Aseguramos que se usa 'name' --> <p x-text="event.dates.localDate"></p> </div> </template> </div> <!-- Mensaje si no hay resultados --> <div x-show="filteredEvents.length === 0"> <p>No se encontraron eventos</p> </div> </div>  </body> </html>`;
}, "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/eventos2.astro", void 0);

const $$file = "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/eventos2.astro";
const $$url = "/totem-um/dist/eventos2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Eventos2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
