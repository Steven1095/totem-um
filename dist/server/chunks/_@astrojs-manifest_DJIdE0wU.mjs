import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_CqfnIhi3.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/cym_webmanager/Documents/Astro/totem_um/","adapterName":"@astrojs/node","routes":[{"file":"SliderData/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sliderdata","isIndex":false,"type":"page","pattern":"^\\/SliderData\\/?$","segments":[[{"content":"SliderData","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/SliderData.astro","pathname":"/SliderData","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.DFo0bvyj.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow{border:2px solid #a59f9f!important;border-top-left-radius:7px!important;border-top-right-radius:7px!important;box-sizing:border-box!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;padding:8px!important}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow+.ql-container[data-astro-cid-dflsp22b].ql-snow{border-top:0px!important;border-bottom:2px solid #a59f9f!important;border-left:2px solid #a59f9f!important;border-right:2px solid #a59f9f!important;border-bottom-left-radius:7px!important;border-bottom-right-radius:7px!important}\n"}],"routeData":{"route":"/admin/admineventos","isIndex":false,"type":"page","pattern":"^\\/admin\\/AdminEventos\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"AdminEventos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/AdminEventos.astro","pathname":"/admin/AdminEventos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.PpXCnIs3.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/admin/formulario","isIndex":false,"type":"page","pattern":"^\\/admin\\/Formulario\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"Formulario","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/Formulario.astro","pathname":"/admin/Formulario","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/admin/listaeventos","isIndex":false,"type":"page","pattern":"^\\/admin\\/ListaEventos\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"ListaEventos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/ListaEventos.astro","pathname":"/admin/ListaEventos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.PpXCnIs3.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/admin/wysiwyg","isIndex":false,"type":"page","pattern":"^\\/admin\\/Wysiwyg\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"Wysiwyg","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/Wysiwyg.astro","pathname":"/admin/Wysiwyg","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[],"routeData":{"route":"/api/ticketmaster.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/ticketmaster\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"ticketmaster.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/ticketmaster.json.ts","pathname":"/api/ticketmaster.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/api","isIndex":false,"type":"page","pattern":"^\\/api\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api.astro","pathname":"/api","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/components/buscador","isIndex":false,"type":"page","pattern":"^\\/components\\/Buscador\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}],[{"content":"Buscador","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components/Buscador.astro","pathname":"/components/Buscador","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/components/buscador2","isIndex":false,"type":"page","pattern":"^\\/components\\/Buscador2\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}],[{"content":"Buscador2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components/Buscador2.astro","pathname":"/components/Buscador2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.CvB32A0e.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow{border:2px solid #a59f9f!important;border-top-left-radius:7px!important;border-top-right-radius:7px!important;box-sizing:border-box!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;padding:8px!important}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow+.ql-container[data-astro-cid-dflsp22b].ql-snow{border-top:0px!important;border-bottom:2px solid #a59f9f!important;border-left:2px solid #a59f9f!important;border-right:2px solid #a59f9f!important;border-bottom-left-radius:7px!important;border-bottom-right-radius:7px!important}\n"}],"routeData":{"route":"/components/layouts/mainlayouts","isIndex":false,"type":"page","pattern":"^\\/components\\/Layouts\\/MainLayouts\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}],[{"content":"Layouts","dynamic":false,"spread":false}],[{"content":"MainLayouts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components/Layouts/MainLayouts.astro","pathname":"/components/Layouts/MainLayouts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/components/panel","isIndex":false,"type":"page","pattern":"^\\/components\\/Panel\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}],[{"content":"Panel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components/Panel.astro","pathname":"/components/Panel","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/components/slider","isIndex":false,"type":"page","pattern":"^\\/components\\/Slider\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}],[{"content":"Slider","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components/Slider.astro","pathname":"/components/Slider","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.CvB32A0e.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow{border:2px solid #a59f9f!important;border-top-left-radius:7px!important;border-top-right-radius:7px!important;box-sizing:border-box!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;padding:8px!important}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow+.ql-container[data-astro-cid-dflsp22b].ql-snow{border-top:0px!important;border-bottom:2px solid #a59f9f!important;border-left:2px solid #a59f9f!important;border-right:2px solid #a59f9f!important;border-bottom-left-radius:7px!important;border-bottom-right-radius:7px!important}\n"}],"routeData":{"route":"/dependencias/[name]","isIndex":false,"type":"page","pattern":"^\\/dependencias\\/([^/]+?)\\/?$","segments":[[{"content":"dependencias","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"params":["name"],"component":"src/pages/dependencias/[name].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.CvB32A0e.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow{border:2px solid #a59f9f!important;border-top-left-radius:7px!important;border-top-right-radius:7px!important;box-sizing:border-box!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;padding:8px!important}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow+.ql-container[data-astro-cid-dflsp22b].ql-snow{border-top:0px!important;border-bottom:2px solid #a59f9f!important;border-left:2px solid #a59f9f!important;border-right:2px solid #a59f9f!important;border-bottom-left-radius:7px!important;border-bottom-right-radius:7px!important}\n"}],"routeData":{"route":"/dependencias","isIndex":false,"type":"page","pattern":"^\\/dependencias\\/?$","segments":[[{"content":"dependencias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dependencias.astro","pathname":"/dependencias","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.CvB32A0e.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow{border:2px solid #a59f9f!important;border-top-left-radius:7px!important;border-top-right-radius:7px!important;box-sizing:border-box!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;padding:8px!important}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow+.ql-container[data-astro-cid-dflsp22b].ql-snow{border-top:0px!important;border-bottom:2px solid #a59f9f!important;border-left:2px solid #a59f9f!important;border-right:2px solid #a59f9f!important;border-bottom-left-radius:7px!important;border-bottom-right-radius:7px!important}\n"}],"routeData":{"route":"/eventos/[name]","isIndex":false,"type":"page","pattern":"^\\/eventos\\/([^/]+?)\\/?$","segments":[[{"content":"eventos","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"params":["name"],"component":"src/pages/eventos/[name].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.CvB32A0e.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow{border:2px solid #a59f9f!important;border-top-left-radius:7px!important;border-top-right-radius:7px!important;box-sizing:border-box!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;padding:8px!important}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow+.ql-container[data-astro-cid-dflsp22b].ql-snow{border-top:0px!important;border-bottom:2px solid #a59f9f!important;border-left:2px solid #a59f9f!important;border-right:2px solid #a59f9f!important;border-bottom-left-radius:7px!important;border-bottom-right-radius:7px!important}\n"}],"routeData":{"route":"/eventos","isIndex":false,"type":"page","pattern":"^\\/eventos\\/?$","segments":[[{"content":"eventos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eventos.astro","pathname":"/eventos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/eventos2/[name]","isIndex":false,"type":"page","pattern":"^\\/eventos2\\/([^/]+?)\\/?$","segments":[[{"content":"eventos2","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"params":["name"],"component":"src/pages/eventos2/[name].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"}],"routeData":{"route":"/eventos2","isIndex":false,"type":"page","pattern":"^\\/eventos2\\/?$","segments":[[{"content":"eventos2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eventos2.astro","pathname":"/eventos2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/totem-um/dist/_astro/hoisted.CvB32A0e.js"},{"type":"external","value":"/totem-um/dist/_astro/page.BA34ORVw.js"}],"styles":[{"type":"external","src":"/totem-um/dist/_astro/SliderData.D9Mv9A_o.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow{border:2px solid #a59f9f!important;border-top-left-radius:7px!important;border-top-right-radius:7px!important;box-sizing:border-box!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif!important;padding:8px!important}.ql-toolbar[data-astro-cid-dflsp22b].ql-snow+.ql-container[data-astro-cid-dflsp22b].ql-snow{border-top:0px!important;border-bottom:2px solid #a59f9f!important;border-left:2px solid #a59f9f!important;border-right:2px solid #a59f9f!important;border-bottom-left-radius:7px!important;border-bottom-right-radius:7px!important}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/totem-um/dist/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/api.astro",{"propagation":"none","containsHead":true}],["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos2.astro",{"propagation":"none","containsHead":true}],["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Layouts/MainLayouts.astro",{"propagation":"none","containsHead":true}],["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/AdminEventos.astro",{"propagation":"none","containsHead":true}],["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/dependencias.astro",{"propagation":"none","containsHead":true}],["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/dependencias/[name].astro",{"propagation":"none","containsHead":true}],["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos.astro",{"propagation":"none","containsHead":true}],["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/eventos/[name].astro",{"propagation":"none","containsHead":true}],["C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/admin/AdminEventos@_@astro":"pages/admin/admineventos.astro.mjs","\u0000@astro-page:src/pages/admin/Formulario@_@astro":"pages/admin/formulario.astro.mjs","\u0000@astro-page:src/pages/admin/ListaEventos@_@astro":"pages/admin/listaeventos.astro.mjs","\u0000@astro-page:src/pages/admin/Wysiwyg@_@astro":"pages/admin/wysiwyg.astro.mjs","\u0000@astro-page:src/pages/api/ticketmaster.json@_@ts":"pages/api/ticketmaster.json.astro.mjs","\u0000@astro-page:src/pages/api@_@astro":"pages/api.astro.mjs","\u0000@astro-page:src/pages/components/Buscador@_@astro":"pages/components/buscador.astro.mjs","\u0000@astro-page:src/pages/components/Buscador2@_@astro":"pages/components/buscador2.astro.mjs","\u0000@astro-page:src/pages/components/Layouts/MainLayouts@_@astro":"pages/components/layouts/mainlayouts.astro.mjs","\u0000@astro-page:src/pages/components/Panel@_@astro":"pages/components/panel.astro.mjs","\u0000@astro-page:src/pages/components/Slider@_@astro":"pages/components/slider.astro.mjs","\u0000@astro-page:src/pages/dependencias/[name]@_@astro":"pages/dependencias/_name_.astro.mjs","\u0000@astro-page:src/pages/dependencias@_@astro":"pages/dependencias.astro.mjs","\u0000@astro-page:src/pages/eventos/[name]@_@astro":"pages/eventos/_name_.astro.mjs","\u0000@astro-page:src/pages/eventos@_@astro":"pages/eventos.astro.mjs","\u0000@astro-page:src/pages/eventos2/[name]@_@astro":"pages/eventos2/_name_.astro.mjs","\u0000@astro-page:src/pages/eventos2@_@astro":"pages/eventos2.astro.mjs","\u0000@astro-page:src/pages/SliderData@_@astro":"pages/sliderdata.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/cym_webmanager/Documents/Astro/totem_um/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DT9OVKIr.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.PpXCnIs3.js","/astro/hoisted.js?q=3":"_astro/hoisted.l0sNRNKZ.js","/astro/hoisted.js?q=1":"_astro/hoisted.DFo0bvyj.js","/astro/hoisted.js?q=2":"_astro/hoisted.CvB32A0e.js","astro:scripts/page.js":"_astro/page.BA34ORVw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/totem-um/dist/_astro/SliderData.D9Mv9A_o.css","/totem-um/dist/favicon.svg","/totem-um/dist/img/background-circle.svg","/totem-um/dist/img/dependencias.png","/totem-um/dist/img/eventos.png","/totem-um/dist/img/fondo_totem.jpg","/totem-um/dist/img/pieza_evento.jpg","/totem-um/dist/img/titulo_pagina.png","/totem-um/dist/_astro/hoisted.CvB32A0e.js","/totem-um/dist/_astro/hoisted.DFo0bvyj.js","/totem-um/dist/_astro/hoisted.PpXCnIs3.js","/totem-um/dist/_astro/page.BA34ORVw.js","/totem-um/dist/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.Oozc_hRb.js","/totem-um/dist/img/galeria_totem/1.png","/totem-um/dist/img/galeria_totem/10.jpg","/totem-um/dist/img/galeria_totem/11.png","/totem-um/dist/img/galeria_totem/12.png","/totem-um/dist/img/galeria_totem/13.png","/totem-um/dist/img/galeria_totem/14.png","/totem-um/dist/img/galeria_totem/15.jpeg","/totem-um/dist/img/galeria_totem/16.png","/totem-um/dist/img/galeria_totem/17.png","/totem-um/dist/img/galeria_totem/18.jpg","/totem-um/dist/img/galeria_totem/19.png","/totem-um/dist/img/galeria_totem/2.png","/totem-um/dist/img/galeria_totem/20.png","/totem-um/dist/img/galeria_totem/21.png","/totem-um/dist/img/galeria_totem/22.png","/totem-um/dist/img/galeria_totem/23.jpg","/totem-um/dist/img/galeria_totem/24.jpg","/totem-um/dist/img/galeria_totem/25.jpg","/totem-um/dist/img/galeria_totem/26.png","/totem-um/dist/img/galeria_totem/27.png","/totem-um/dist/img/galeria_totem/28.png","/totem-um/dist/img/galeria_totem/29.png","/totem-um/dist/img/galeria_totem/3.png","/totem-um/dist/img/galeria_totem/30.png","/totem-um/dist/img/galeria_totem/31.png","/totem-um/dist/img/galeria_totem/32.png","/totem-um/dist/img/galeria_totem/33.png","/totem-um/dist/img/galeria_totem/34.png","/totem-um/dist/img/galeria_totem/35.png","/totem-um/dist/img/galeria_totem/36.png","/totem-um/dist/img/galeria_totem/37.png","/totem-um/dist/img/galeria_totem/38.png","/totem-um/dist/img/galeria_totem/39.png","/totem-um/dist/img/galeria_totem/4.png","/totem-um/dist/img/galeria_totem/40.png","/totem-um/dist/img/galeria_totem/41.png","/totem-um/dist/img/galeria_totem/42.png","/totem-um/dist/img/galeria_totem/43.png","/totem-um/dist/img/galeria_totem/44.png","/totem-um/dist/img/galeria_totem/45.jpg","/totem-um/dist/img/galeria_totem/46.jpg","/totem-um/dist/img/galeria_totem/47.jpg","/totem-um/dist/img/galeria_totem/48.jpg","/totem-um/dist/img/galeria_totem/5.png","/totem-um/dist/img/galeria_totem/6.png","/totem-um/dist/img/galeria_totem/7.png","/totem-um/dist/img/galeria_totem/8.jpg","/totem-um/dist/img/galeria_totem/9.png","/totem-um/dist/_astro/page.BA34ORVw.js","/totem-um/dist/SliderData/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { DEFAULT_404_ROUTE as D, default404Instance as d, ensure404Route as e, manifest as m };
