/* empty css                               */
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_BsEV8pba.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../chunks/MainLayouts_DcVQ13my.mjs';
import { $ as $$Slider } from '../chunks/Slider_BcoE4qzN.mjs';
export { renderers } from '../renderers.mjs';

const $$Eventos = createComponent(async ($$result, $$props, $$slots) => {
  function getDayName(dateString) {
    var days = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "Sabado"];
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
  const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=hHcnyJayuOYh79PsG8tByQAD4Us0TKWT&size=10");
  const data = await response.json();
  const events = data._embedded?.events.map((event) => ({
    name: event.name,
    image: event.images[0]?.url,
    dates: event.dates?.start?.localDate,
    dayName: event.dates?.start?.localDate ? getDayName(event.dates.start.localDate) : null,
    monthName: event.dates?.start?.localDate ? getMonthDay(event.dates.start.localDate) : null,
    hour: event.dates?.start?.localTime ? getFormatTimeTo12Hour(event.dates.start.localTime) : null
  })) || [];
  console.log(events);
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Eventos - UManizales Totem" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-1"> <div class="w-full relative bg-white"> <div class="w-full absolute top-0 h-72 bg-cover bg-center p-4" style="background: url('/img/titulo_pagina.png');"> <div class="grid grid-cols-2 gap-2"> <h2 class="text-7xl text-slider-nav font-bold m-6 ml-32 text-left">Eventos</h2> <a href="../../" class="text-right text-botones hover:text-botones-hover mr-12 m-5 text-8xl"><img class="ml-80 mt-2" src="https://umanizales.edu.co/sites/default/files/2024-08/image.png" width="100" height="100"></a> </div> <hr class="bg-botones h-3 w-1/2 -ml-4"> </div> <!-- Lista de eventos --> <div class="flex items-center justify-center h-full"> <div class="grid grid-cols-1 w-10/12 mt-32"> <!-- <p class="text-4xl bg-gray-100 p-5" style="z-index: 1;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>            --> <div class="mt-10"> <div class="flex max-h-[800px] w-full flex-col overflow-y-scroll"> ${events.map((event) => renderTemplate`<button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5"> <div class="flex h-24 w-1/6 items-end text-black group-hover:bg-green-200"> <p class="tag w-full text-center text-1xl font-medium text-gray-700 group-hover:text-green-900"> <label class="text-slider-nav" style="text-transform: capitalize;">${event.dayName}</label><br><label style="color: #802f00;">${event.monthName}</label> <br><label class="text-botones">${event.hour}</label> </p> </div> <div class="flex w-full flex-col items-start justify-between"> <a${addAttribute(`/eventos/${event.name.replace(/\s+/g, "-").toLowerCase()}`, "href")}> <p class="text-left text-4xl text-slider-nav font-semibold">${event.name}</p> </a> </div> </button>
                                <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">`)} <br> </div> </div> </div> </div> </div> </div>  ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos.astro";
const $$url = "/eventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Eventos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
