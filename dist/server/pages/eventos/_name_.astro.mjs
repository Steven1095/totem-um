/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_CqfnIhi3.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../../chunks/MainLayouts_C3H5KGio.mjs';
import { $ as $$Slider } from '../../chunks/Slider_CT3zWBXH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  const { name } = Astro2.params;
  const response = await fetch("https://autoevaluacion.umanizales.edu.co/events.json");
  const events = await response.json();
  const event = events.find((e) => e.name.replace(/\s+/g, "-").toLowerCase() === name);
  if (!event) {
    throw new Error("Evento no encontrado");
  }
  function getDayName(dateString) {
    var days = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "Sabado"];
    var d = new Date(dateString);
    var dayName2 = days[d.getDay()];
    return dayName2;
  }
  function getMonthDay(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const monthName2 = date.toLocaleDateString("es-ES", { month: "long" });
    const dayNumber = date.getDate();
    return `${dayNumber} de ${monthName2}`;
  }
  function getFormatTimeTo12Hour(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  }
  const dayName = event.dates?.start?.localDate ? getDayName(event.dates.start.localDate) : null;
  const monthName = event.dates?.start?.localDate ? getMonthDay(event.dates.start.localDate) : null;
  const hour = event.dates?.start?.localTime ? getFormatTimeTo12Hour(event.dates.start.localTime) : null;
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": event.name }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-1"> <div class="w-full relative bg-white"> <div class="w-full absolute top-0 h-72 bg-cover bg-center p-4" style="background: url('../../img/titulo_pagina.png');"> <div class="flex"> <!-- Columna de 80% --> <div class="w-4/5"> <h2 class="text-7xl text-slider-nav font-bold m-6 ml-32 text-left">${event.name}</h2> </div> <!-- Columna de 20% --> <div class="w-1/5"> <a href="/eventos" class="text-right text-botones hover:text-botones-hover mr-12 m-5"><img class="ml-12 mt-2" src="https://umanizales.edu.co/sites/default/files/2024-08/image.png" width="100" height="100"></a> </div> </div> <hr class="bg-botones h-3 w-1/2 -ml-4"> </div> <div class="w-full flex items-center justify-center h-4/5 mt-40"> <div class="grid grid-cols-6 gap-4"> <div class="col-start-2 col-span-4"> <img width="750px" height="400px"${addAttribute(event.imagen, "src")}${addAttribute(event.name, "alt")}> </div> <div class="col-start-2 col-span-4"> <p class="text-black text-2xl font-normal">${event.descripcion}</p> </div> <div class="col-start-2 col-end-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Lugar del evento:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center align-middle"> <i class="fas fa-building mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${event.lugar}</p> </div> </div> </div> <div class="col-end-8 col-span-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Fecha y hora del evento:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center align-middle"> <i class="fas fa-calendar-days mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-medium">${dayName} ${monthName}</p> <p class="text-black text-2xl font-normal">${hour}</p> </div> </div> </div> <div class="col-start-2 col-end-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Modalidad:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center"> <i class="fas fa-location-dot mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${event.modalidad}</p> </div> </div> </div> <div class="col-start-2 col-end-4 mt-4"> ${event.moderador && renderTemplate`<p class="tag w-full text-left text-3xl font-medium text-slider-nav">Moderador:</p>
            <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center"> <i class="fas fa-user mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${event.moderador}</p> </div> </div>`} </div> </div> </div> </div> </div>  ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos/[name].astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos/[name].astro";
const $$url = "/totem-um/dist/eventos/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$name,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
