/* empty css                              */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_CqfnIhi3.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from './MainLayouts_C-YSvhFR.mjs';

const $$Formulario = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Formulario Eventos - Totem UM" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form @submit="submitForm" class="space-y-6 p-6 bg-white shadow-lg rounded-lg"> <div> <label for="title" class="block text-sm font-medium text-gray-700">Título</label> <input type="text" id="title" name="title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required> </div> <div> <label for="description" class="block text-sm font-medium text-gray-700">Descripción</label> <textarea id="description" name="description" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required></textarea> </div> <div> <label for="date" class="block text-sm font-medium text-gray-700">Fecha</label> <input type="date" id="date" name="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required> </div> <div> <label for="time" class="block text-sm font-medium text-gray-700">Hora</label> <input type="time" id="time" name="time" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required> </div> <div> <label for="image" class="block text-sm font-medium text-gray-700">Imagen</label> <input type="file" id="image" name="image" accept="image/*" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" required> </div> <button type="submit" class="w-full bg-botones text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Añadir
</button> </form> ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/Formulario.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/Formulario.astro";
const $$url = "/totem-um/dist/admin/Formulario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Formulario,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Formulario as $, _page as _ };