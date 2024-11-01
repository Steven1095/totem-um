/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_CqfnIhi3.mjs';
import 'kleur/colors';
import { $ as $$Wysiwyg } from './Wysiwyg_BHKjhaVw.mjs';

const $$Formulario = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form @submit="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"> <div> <label for="nombre_evento" class="block text-md font-medium text-slider-nav">Nombre del evento</label> <input type="text" id="nombre_evento" name="nombre_evento" class="mt-3 block w-full h-10 bg-transparent rounded-md border-2 border-gray-400" required> </div> <div> <label for="moderador" class="block text-md font-medium text-slider-nav">Moderador</label> <input type="text" id="moderador" name="moderador" class="mt-3 block w-full h-10 bg-transparent rounded-md border-2 border-gray-400" required> </div> <div> <label for="lugar_evento" class="block text-md font-medium text-slider-nav">Lugar</label> <input type="text" id="lugar_evento" name="lugar_evento" class="mt-3 block w-full h-10 bg-transparent rounded-md border-2 border-gray-400" required> </div> <div> <label for="modalidad_evento" class="block text-md font-medium text-slider-nav">Modalidad</label> <input type="text" id="modalidad_evento" name="modalidad_evento" class="mt-3 block w-full h-10 bg-transparent rounded-md border-2 border-gray-400" required> </div> <div> <label for="date" class="block text-md font-medium text-slider-nav">Fecha</label> <input type="date" id="date" name="date" class="mt-3 pl-3 pr-1 block w-full h-10 bg-transparent rounded-md border-2 border-gray-400" required> </div> <div> <label for="time" class="block text-md font-medium text-slider-nav">Hora</label> <input type="time" id="time" name="time" class="mt-3 pl-3 pr-1 block w-full h-10 bg-transparent rounded-md border-2 border-gray-400" required> </div> <div class="md:col-span-2"> ${renderComponent($$result, "Wysiwyg", $$Wysiwyg, {})} </div> <div> <label for="image" class="block text-md font-medium text-slider-nav">Imagen del evento</label> <input type="file" id="image" name="image" accept="image/*" class="mt-3 block w-full text-sm text-color-iconos-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-150 file:text-color-iconos hover:file:bg-gray-300" required> </div> <div class="md:col-span-2 mt-3"> <button type="submit" class="rounded-full bg-botones text-slider-nav font-semibold py-2 px-14 hover:bg-botones-hover">
Añadir
</button> </div> </form>`;
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
