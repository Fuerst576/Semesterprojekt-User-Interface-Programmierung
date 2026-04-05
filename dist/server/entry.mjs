import { r as renderers } from './chunks/_@astro-renderers_D2FXYBo7.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DjWYgoc5.mjs';
import { manifest } from './manifest_CpfTsUxd.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/favoriten.astro.mjs');
const _page2 = () => import('./pages/filmhinzufuegen.astro.mjs');
const _page3 = () => import('./pages/gelernt.astro.mjs');
const _page4 = () => import('./pages/login.astro.mjs');
const _page5 = () => import('./pages/register.astro.mjs');
const _page6 = () => import('./pages/_film_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/favoriten.astro", _page1],
    ["src/pages/filmhinzufuegen.astro", _page2],
    ["src/pages/gelernt.astro", _page3],
    ["src/pages/login.astro", _page4],
    ["src/pages/register.astro", _page5],
    ["src/pages/[film].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/dist/client/",
    "server": "file:///Users/lukasfuerst/Downloads/uip_semesterprojekt/uip_semesterprojekt/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
