/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CqfnIhi3.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../../chunks/MainLayouts_C3H5KGio.mjs';
import { $ as $$Formulario } from '../../chunks/Formulario_Cw_GwkE2.mjs';
import { $ as $$ListaEventos } from '../../chunks/ListaEventos_DypoM413.mjs';
export { renderers } from '../../renderers.mjs';

const $$AdminEventos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Administraci\xF3n de eventos - Totem UM" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full absolute top-0 h-72 bg-no-repeat bg-cover bg-center p-4" style="background-image: url('/img/titulo_pagina.png');"> <div class="container mx-auto"> <h2 style="font-size: clamp(2rem, 2vw + 1.5rem, 4rem);" class="text-slider-nav font-semibold m-6 text-left">Creación de eventos</h2> </div> <hr class="bg-botones h-2 md:h-2 lg:h-1  w-1/2 -ml-4"> <div class="container mx-auto px-4 sm:px-8 lg:px-20 xl:px-30 mt-8"> ${renderComponent($$result2, "Formulario", $$Formulario, {})} ${renderComponent($$result2, "ListaEventos", $$ListaEventos, {})} </div> </div> ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/AdminEventos.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/AdminEventos.astro";
const $$url = "/totem-um/dist/admin/AdminEventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AdminEventos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
