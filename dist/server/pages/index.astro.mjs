/* empty css                                      */
import { c as createComponent, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../chunks/MainLayouts_CM9tFvcv.mjs';
import { $ as $$Panel } from '../chunks/Panel_Dioq30hH.mjs';
import { $ as $$Slider } from '../chunks/Slider_BhUS0O-k.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Home - UManizales Totem" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Panel", $$Panel, {})} ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/index.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/index.astro";
const $$url = "/totem-um/dist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
