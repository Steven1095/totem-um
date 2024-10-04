/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Buscador = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div x-data="{ search: '', items: [
  { name: 'division-de-desarrollo-humano', displayName: 'División de Desarrollo Humano', icon: 'fas fa-user-friends' },
  { name: 'proyeccion-social', displayName: 'Proyección Social', icon: 'fas fa-handshake' },
  { name: 'administrativa-y-financiera', displayName: 'Administrativa y Financiera', icon: 'fas fa-briefcase' },
  { name: 'comunicaciones-y-mercadeo', displayName: 'Comunicaciones y Mercadeo', icon: 'fas fa-bullhorn' },
  { name: 'investigaciones-y-posgrados', displayName: 'Investigaciones y Posgrados', icon: 'fas fa-flask' },
  { name: 'registro-academico', displayName: 'Registro Académico', icon: 'fas fa-file-alt' },
  { name: 'tecnologias-de-la-informacion', displayName: 'Tecnologías de la Información', icon: 'fas fa-laptop-code' },
  { name: 'internacionalizacion', displayName: 'Internacionalización', icon: 'fas fa-globe' },
  { name: 'innovacion-y-emprendimiento', displayName: 'Innovación y Emprendimiento', icon: 'fas fa-lightbulb' },
  { name: 'biblioteca', displayName: 'Biblioteca', icon: 'fas fa-book' },
] }" class="w-full max-w-full mx-auto mt-8 px-4"> <div class="flex"> <input type="text" x-model="search" placeholder="Buscar..." class="w-full text-6xl p-3 border border-gray-300 rounded-xl mb-4 mt-18"> </div> <div class="flex max-h-[800px] w-full flex-col overflow-y-scroll"> <template x-for="item in items.filter(i => i.displayName.toLowerCase().includes(search.toLowerCase()))" :key="item.name"> <a :href="'/dependencias/' + encodeURIComponent(item.name)"> <button class="w-full group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5"> <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200"> <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900"> <i :class="'fas ' + item.icon" class="mr-2"></i> </p> </div> <div class="flex w-full flex-col items-start justify-between"> <p class="text-left text-4xl text-slider-nav font-semibold" x-text="item.displayName"></p> </div> </button> <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center item.name"> </a> </template> </div> </div>`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Buscador.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Buscador.astro";
const $$url = "/totem-um/dist/components/Buscador";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Buscador,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Buscador as $, _page as _ };
