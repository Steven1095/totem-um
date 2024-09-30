/* empty css                                         */
import { c as createComponent, r as renderTemplate, b as createAstro } from '../../chunks/astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  return renderTemplate`<!-- <MainLayouts title={event.name}> --><!-- Columna de eventos --><!-- <div class="flex flex-1">
    <div class="w-full relative bg-white">
      <div class="w-full absolute top-0 h-72 bg-cover bg-center p-4" style="background: url('../../img/titulo_pagina.png');">  
        <div class="flex"> --><!-- Columna de 80% --><!-- <div class="w-4/5">
            <h2 class="text-7xl text-slider-nav font-bold m-6 ml-32 text-left">{event.name}</h2>
          </div>         --><!-- Columna de 20% --><!-- <div class="w-1/5">
            <a href="/eventos" class="text-right text-botones hover:text-botones-hover mr-12 m-5 text-8xl"><img class="ml-12 mt-2" src="https://umanizales.edu.co/sites/default/files/2024-08/image.png" width="100" height="100" /></a>
          </div>
        </div>   
          <hr class="bg-botones h-3 w-1/2 -ml-4">
      </div>
      <div class="w-full flex items-center justify-center h-4/5 mt-12">    
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-2 col-span-4 mt-36">
            <img src={event.images[0]?.url} alt={event.name} />
          </div>
          <div class="col-start-2 col-end-4 mt-4">
            <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Lugar del evento:</p>
          </div>
          <div class="col-end-8 col-span-4 mt-4">
            <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Fecha y hora del evento:</p>
            <p class="text-black text-2xl font-medium">{dayName} {monthName}</p>
            <p class="text-black text-2xl font-light">{hour}</p>
          </div>
          <div class="col-start-2 col-end-4 mt-4">
            <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Modalidad:</p>
            <label class="text-slider-nav" style="text-transform: capitalize;">{dayName}</label>
          </div>
          <div class="col-end-8 col-span-4 mt-4">
            <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Moderador:</p>
          </div>
        </div>
      </div>
    </div>
  </div> --><!-- Slider --><!-- <Slider />
</MainLayouts> -->`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos2/[name].astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos2/[name].astro";
const $$url = "/totem-um/dist/eventos2/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$name,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
