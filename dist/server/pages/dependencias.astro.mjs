/* empty css                                      */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_7KwYiMtk.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../chunks/MainLayouts_xRpi3O1K.mjs';
import { $ as $$Slider } from '../chunks/Slider_P5nrNp0i.mjs';
import { $ as $$Buscador } from '../chunks/Buscador_OjcwqTDs.mjs';
export { renderers } from '../renderers.mjs';

const $$Dependencias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Dependencias - UManizales Totem" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-1"> <div class="w-full relative bg-white"> <div class="w-full absolute top-0 h-72 bg-cover bg-center p-4" style="background: url('./img/titulo_pagina.png');"> <div class="grid grid-cols-2 gap-2"> <h2 class="text-7xl text-slider-nav font-bold m-6 ml-32 text-left">Dependencias</h2> <a href="./" class="text-right text-botones hover:text-botones-hover mr-12 m-5 text-8xl"><img class="ml-80 mt-2" src="https://umanizales.edu.co/sites/default/files/2024-08/image.png" width="100" height="100"></a> </div> <hr class="bg-botones h-3 w-2/3 -ml-4"> </div> <!-- Lista de depedencias --> <div class="flex items-center justify-center h-full"> <div class="grid grid-cols-1 w-10/12 mt-32"> <div class="mt-10"> ${renderComponent($$result2, "Buscador", $$Buscador, {})} </div> </div> </div> </div> </div>  ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/dependencias.astro", void 0);

const $$file = "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/dependencias.astro";
const $$url = "/totem-um/dist/dependencias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dependencias,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
