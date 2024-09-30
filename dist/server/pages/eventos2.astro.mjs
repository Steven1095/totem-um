/* empty css                                      */
import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Eventos2 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <MainLayouts title="Eventos - UManizales Totem"> --><!-- Columna de eventos --><!-- <div class="relative bg-white"> --><!-- Título y cabecera --><!-- <div class="w-full h-72 bg-cover bg-center p-4" style="background: url('/img/titulo_pagina.png');">
            <div class="grid grid-cols-2 gap-2">
                <h2 class="text-7xl text-slider-nav font-bold m-6 ml-32 text-left">Eventos</h2>
                <a href="../../" class="text-right text-botones hover:text-botones-hover mr-12 m-5 text-8xl">
                    <img class="ml-80 mt-2" src="/img/titulo_pagina.png" width="100" height="100" />
                </a>
            </div>
            <hr class="bg-botones h-3 w-1/2 -ml-4">
        </div> --><!-- Lista de eventos --><!-- <div class="w-full mb-40">
            <div class="grid grid-cols-1 w-10/12 mx-auto"> 
                <div class="mt-10">
                    <div class="flex max-h-[800px] w-full flex-col overflow-y-scroll">
                        {events.map((event: Event) => (
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-end text-black group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-1xl font-medium text-gray-700 group-hover:text-green-900">
                                        <label class="text-slider-nav" style="text-transform: capitalize;">{event.dayName}</label><br>
                                        <label style="color: #802f00;">{event.monthName}</label><br>
                                        <label class="text-botones">{event.hour}</label>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <a href={\`/eventos/\${event.name.replace(/\\s+/g, '-').toLowerCase()}\`}>
                                        <p class="text-left text-4xl text-slider-nav font-semibold">{event.name}</p>
                                    </a>
                                </div>
                            </button>
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                        ))}
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Slider />
</MainLayouts> -->`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos2.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos2.astro";
const $$url = "/totem-um/dist/eventos2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Eventos2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
