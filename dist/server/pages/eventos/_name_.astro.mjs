/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_7KwYiMtk.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../../chunks/MainLayouts_xRpi3O1K.mjs';
import { $ as $$Slider } from '../../chunks/Slider_P5nrNp0i.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  const { name } = Astro2.params;
  const url_image_api = {"ASSETS_PREFIX": undefined, "BASE_URL": "/totem-um/dist/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true}.API_EVENTS_IMG;
  const response = await fetch({"ASSETS_PREFIX": undefined, "BASE_URL": "/totem-um/dist/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true}.PUBLIC_API_EVENTS);
  const events = await response.json();
  const event = events.find((e) => e.name.replace(/\s+/g, "-").toLowerCase() === name);
  if (!event) {
    throw new Error("Evento no encontrado");
  }
  const eventDate = new Date(event.date);
  const dayNumber = eventDate.getDate();
  const dayName = new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(eventDate);
  const monthName = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(eventDate);
  const year = eventDate.getFullYear();
  const fullHour = new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
    // Formato de 12 horas con AM/PM
  }).format(eventDate);
  const utcDate = new Date(event.date);
  const colombiaTime = utcDate.toLocaleString("es-ES", {
    timeZone: "America/Bogota",
    // Zona horaria de Colombia
    hour12: false
    // Opcional: usa formato de 24 horas
  });
  console.log(colombiaTime);
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": event.name }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-1"> <div class="w-full relative bg-white"> <div class="w-full absolute top-0 h-72 bg-cover bg-center p-4" style="background: url('../../img/titulo_pagina.png');"> <div class="flex"> <!-- Columna de 80% --> <div class="w-4/5"> <h2 class="text-6xl text-slider-nav font-bold m-6 ml-32 text-left">${event.name}</h2> </div> <!-- Columna de 20% --> <div class="w-1/5"> <a href="/eventos" class="text-right text-botones hover:text-botones-hover mr-12 m-5"><img class="ml-12 mt-2" src="https://umanizales.edu.co/sites/default/files/2024-08/image.png" width="100" height="100"></a> </div> </div> <hr class="bg-botones h-3 w-1/2 -ml-4"> </div> <div class="w-full flex items-center justify-center h-4/5 mt-40"> <div class="grid grid-cols-6 gap-4"> <div class="col-start-2 col-span-4"> <img width="750px" height="400px"${addAttribute(`${url_image_api}${event.image}`, "src")}${addAttribute(event.name, "alt")}> </div> <div class="col-start-2 col-span-4"> <p class="text-black text-2xl font-normal">${unescapeHTML(event.description)}</p> </div> <div class="col-start-2 col-end-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Lugar del evento:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center align-middle"> <i class="fas fa-building mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${event.place}</p> </div> </div> </div> <div class="col-end-8 col-span-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Fecha y hora del evento:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center align-middle"> <i class="fas fa-calendar-days mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-medium"><span class="capitalize">${dayName}</span>, ${dayNumber} de ${monthName} de ${year}</p> <p class="text-black text-2xl font-normal">${fullHour}</p> </div> </div> </div> <div class="col-start-2 col-end-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Modalidad:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center"> <i class="fas fa-location-dot mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${event.mode}</p> </div> </div> </div> <div class="col-end-8 col-span-4 mt-4"> ${event.moderator && renderTemplate`<p class="tag w-full text-left text-3xl font-medium text-slider-nav">Moderador:</p>
            <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center align-middle"> <i class="fas fa-user mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${event.moderator}</p> </div> </div>`} </div> </div> </div> </div> </div>  ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/eventos/[name].astro", void 0);
const $$file = "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/eventos/[name].astro";
const $$url = "/totem-um/dist/eventos/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$name,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
