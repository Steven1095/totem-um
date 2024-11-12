/* empty css                                               */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../../../chunks/astro/server_7KwYiMtk.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../../../../chunks/MainLayouts_xRpi3O1K.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const evento = await fetch(`https://api-dev.umanizales.edu.co/api/v1/module/totem-um/event/${id}`);
  if (!evento.ok || evento.status !== 200) {
    return Astro2.redirect("/");
  }
  const data = await evento.json();
  if (!data) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Editar evento - Totem UM" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full absolute top-0 h-72 bg-no-repeat bg-cover bg-center p-4" style="background-image: url('/img/titulo_pagina.png');"> <div class="container mx-auto"> <h2 style="font-size: clamp(2rem, 2vw + 1.5rem, 4rem);" class="text-slider-nav font-semibold m-6 text-left">Editar eventos</h2> </div> <hr class="bg-botones h-2 md:h-2 lg:h-1  w-1/2 -ml-4"> <div class="container mx-auto px-4 sm:px-8 lg:px-20 xl:px-30 mt-8"> <div class="flex gap-2"> <button class="bg-teal-400 text-white py-2 px-6">Editar</button> <button class="bg-red-400 text-white py-2 px-6">Eliminar</button> </div> <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">${data.name}:</h2> <ul class="w-full space-y-1 text-gray-700 list-disc list-inside dark:text-gray-600"> <li>${data.name}</li> <li>${data.description}</li> <li>${data.mode}</li> <li>${data.place}</li> <li>${data.date}</li> <!-- <li>imagen del evento</li> --> </ul> </div> </div> ` })}`;
}, "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/admin/evento/edit/[id].astro", void 0);

const $$file = "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/admin/evento/edit/[id].astro";
const $$url = "/totem-um/dist/admin/evento/edit/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
