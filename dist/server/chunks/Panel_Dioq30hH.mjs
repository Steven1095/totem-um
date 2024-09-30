/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Panel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Parte superior con dos columnas -->${maybeRenderHead()}<div class="flex flex-1" style="background: url('./img/fondo_totem.jpg'); background-size: contain;"> <!-- Columna 1 con imagen de fondo --> <div class="w-1/2 relative"> <!-- <div class="w-1/2 bg-cover bg-center relative" style="background-image: url('https://umanizales.edu.co/sites/default/files/2024-08/eventos.png');"> --> <!-- Título en la parte superior --> <div class="absolute top-14 w-full p-4 "> <h2 class="text-6xl text-slider-nav font-bold text-center">Eventos</h2> </div> <!-- Párrafo centrado --> <div class="flex items-center justify-center h-full"> <a href="../eventos" type="button" class="rounded-full bg-botones px-16 py-5 text-5xl font-medium text-white shadow-sm hover:bg-botones-hover transform translate-y-32">Ver más</a> </div> </div> <!-- Columna 2 con imagen de fondo --> <div class="w-1/2 relative"> <!-- <div class="w-1/2 bg-cover bg-center relative" style="background-image: url('https://umanizales.edu.co/sites/default/files/2024-08/dependencias.png');"> --> <!-- Título en la parte superior --> <div class="absolute top-14 w-full p-4"> <h2 class="text-6xl text-slider-nav font-bold text-center">Dependencias</h2> </div> <!-- Párrafo centrado --> <div class="flex items-center justify-center h-full"> <a href="./dependencias" type="button" class="rounded-full bg-botones px-16 py-5 text-5xl font-medium text-white shadow-sm hover:bg-botones-hover transform translate-y-32">Ver más</a> </div> </div> </div>`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Panel.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Panel.astro";
const $$url = "/totem-um/dist/components/Panel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Panel,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Panel as $, _page as _ };
