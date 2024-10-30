/* empty css                              */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_CqfnIhi3.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from './MainLayouts_C-YSvhFR.mjs';

const $$ListaEventos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Lista Eventos - Totem UM" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="space-y-4"> <li class="text-gray-500">No hay elementos.</li> <li class="p-4 bg-white shadow rounded-lg flex items-center justify-between"> <div> <h3 class="text-lg font-medium">titulo evento</h3> <p class="text-gray-500">description</p> <time class="text-sm text-gray-400">
17 de septiembre a las 10:00 A.M.
</time> </div> <button class="text-red-500 hover:text-red-700">
Eliminar
</button> </li> </ul> ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/ListaEventos.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/ListaEventos.astro";
const $$url = "/totem-um/dist/admin/ListaEventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ListaEventos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ListaEventos as $, _page as _ };
