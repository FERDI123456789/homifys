import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_rymPkkR_.mjs';
import { manifest } from './manifest_si6hcqDC.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/authors/_slug_.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/homes/_slug_.astro.mjs');
const _page4 = () => import('./pages/homes.astro.mjs');
const _page5 = () => import('./pages/team/_slug_.astro.mjs');
const _page6 = () => import('./pages/team.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/authors/[slug].astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/homes/[slug].astro", _page3],
    ["src/pages/homes/index.astro", _page4],
    ["src/pages/team/[slug].astro", _page5],
    ["src/pages/team/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f6790e71-5975-42ab-9931-d9bf328e7fbc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
