/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_CqfnIhi3.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../../chunks/MainLayouts_C-YSvhFR.mjs';
import { $ as $$Formulario } from '../../chunks/Formulario_CdxQmako.mjs';
import { $ as $$ListaEventos } from '../../chunks/ListaEventos_Cs6VQArB.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$AdminEventos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminEventos;
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Administraci\xF3n de eventos - Totem UM" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container mx-auto py-8"> <h1 class="text-2xl font-bold mb-8">CRUD en Astro con TailwindCSS</h1> ${renderComponent($$result2, "Formulario", $$Formulario, {})} ${renderComponent($$result2, "ListaEventos", $$ListaEventos, {})} </div> ` })}`;
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
