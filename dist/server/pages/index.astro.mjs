/* empty css                               */
import { c as createComponent, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_BsEV8pba.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../chunks/MainLayouts_DcVQ13my.mjs';
import { $ as $$Panel } from '../chunks/Panel_CXYVMjwc.mjs';
import { $ as $$Slider } from '../chunks/Slider_BcoE4qzN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Home - UManizales Totem" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Panel", $$Panel, {})} ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/index.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
