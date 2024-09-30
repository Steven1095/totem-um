/* empty css                                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Buscador = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div x-data="{ search: '', items: [
  { name: 'División de Desarrollo Humano', icon: 'fas fa-user-friends' },
  { name: 'Proyección Social', icon: 'fas fa-handshake' },
  { name: 'Administrativa y Financiera', icon: 'fas fa-briefcase' },
  { name: 'Comunicaciones y Mercadeo', icon: 'fas fa-bullhorn' },
  { name: 'Investigaciones y Posgrados', icon: 'fas fa-flask' },
  { name: 'Registro Académico', icon: 'fas fa-file-alt' },
  { name: 'Tecnologías de la Información', icon: 'fas fa-laptop-code' },
  { name: 'Internacionalización', icon: 'fas fa-globe' },
  { name: 'Innovación y Emprendimiento', icon: 'fas fa-lightbulb' },
  { name: 'Biblioteca', icon: 'fas fa-book' },
] }" class="w-full max-w-full mx-auto mt-8 px-4"> <input type="text" x-model="search" placeholder="Buscar..." class="w-full text-6xl p-3 border border-gray-300 rounded-xl mb-4"> <div class="flex max-h-[800px] w-full flex-col overflow-y-scroll mt-12"> <template x-for="item in items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))" :key="item.name"> <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5"> <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200"> <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900"> <i :class="'fas ' + item.icon" class="mr-2"></i> </p> </div> <div class="flex w-full flex-col items-start justify-between"> <p class="text-left text-4xl text-slider-nav font-semibold" x-text="item.name"></p> </div> </button> <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center"> </template> </div> </div>`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Buscador.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Buscador.astro";
const $$url = "/totem-um/dist/components/Buscador";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Buscador,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
