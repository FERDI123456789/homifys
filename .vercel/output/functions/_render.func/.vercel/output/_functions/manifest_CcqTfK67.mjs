import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Coxad2nv.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_C30w1nyD.mjs';
import 'clsx';

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
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ferdi/homifys/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"homes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/homes","isIndex":true,"type":"page","pattern":"^\\/homes\\/?$","segments":[[{"content":"homes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/homes/index.astro","pathname":"/homes","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"team/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/team","isIndex":true,"type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team/index.astro","pathname":"/team","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ferdi/homifys/src/pages/authors/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/authors/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/homifys/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/homifys/src/pages/contacts/author/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contacts/author/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/homifys/src/pages/contacts/homes/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contacts/homes/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/homifys/src/pages/homes/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/homes/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/homifys/src/pages/homes/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/homes/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/homifys/src/pages/team/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/team/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/homifys/src/pages/team/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/team/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/homifys/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/authors/[slug]@_@astro":"pages/authors/_slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/contacts/author/[slug]@_@astro":"pages/contacts/author/_slug_.astro.mjs","\u0000@astro-page:src/pages/contacts/homes/[slug]@_@astro":"pages/contacts/homes/_slug_.astro.mjs","\u0000@astro-page:src/pages/homes/[slug]@_@astro":"pages/homes/_slug_.astro.mjs","\u0000@astro-page:src/pages/homes/index@_@astro":"pages/homes.astro.mjs","\u0000@astro-page:src/pages/team/[slug]@_@astro":"pages/team/_slug_.astro.mjs","\u0000@astro-page:src/pages/team/index@_@astro":"pages/team.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/ferdi/homifys/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/home/ferdi/homifys/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_CcqTfK67.mjs","/home/ferdi/homifys/src/components/NavReact":"_astro/NavReact.BSNElBaB.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/men6.P_bA_Rip.jpg","/_astro/woman.Ubx5lzCq.png","/_astro/features2.CEeQHQuJ.jpg","/_astro/home14.zuyR_HXf.jpg","/_astro/_slug_.Cmsgwl_k.css","/favicon.svg","/home1.jpg","/home2.jpg","/home3.jpg","/homify-logo.svg","/woman.png","/_astro/NavReact.BSNElBaB.js","/_astro/_slug_.BnCWH13A.css","/_astro/client.BIGLHmRd.js","/_astro/hoisted.2daoxv0f.js","/_astro/index.DhYZZe0J.js","/contact/index.html","/homes/index.html","/team/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"5n6FozgLdf/6TOJi/v70Eiq6JAAI9EV6A3FM7yWkMxk=","experimentalEnvGetSecretEnabled":false});

export { manifest };
