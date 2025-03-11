import { a as createAstro, c as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, f as renderSlot, g as renderHead, m as maybeRenderHead } from './astro/server_CmAdv76m.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import { S as SITE } from './siteConfig_BNacgQv6.mjs';

const $$Astro$3 = createAstro("https://example.treelink.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Laptop/Desktop/treelink-test/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- TODO: document favicon replacement --><link rel="apple-touch-icon-precomposed" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/x-icon" href="/favicon.png"><link rel="shortcut icon" type="image/x-icon" href="/favicon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon.png">`;
}, "C:/Users/Laptop/Desktop/treelink-test/src/components/Favicons.astro", void 0);

const $$Astro$2 = createAstro("https://example.treelink.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  return renderTemplate`<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="HandheldFriendly" content="True"><meta name="format-detection" content="telephone=no"><meta name="referrer" content="no-referrer-when-downgrade"><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)"><link rel="sitemap" href="/sitemap-index.xml"><link rel="manifest" href="/site.webmanifest"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE.name, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderSlot($$result, $$slots["default"])}${renderHead()}</head>`;
}, "C:/Users/Laptop/Desktop/treelink-test/src/components/BaseHead.astro", void 0);

const $$Astro$1 = createAstro("https://example.treelink.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="pt-12 text-center text-xs text-lightModeForegroundMuted hover:text-lightModeForeground dark:text-darkModeForegroundMuted dark:hover:text-darkModeForeground"> <hr class="opacity-50"> <!-- <a href="https://treelink.app" class="block py-4 no-underline"
    >Built with Astro Link 🔗</a
  > --> </footer>`;
}, "C:/Users/Laptop/Desktop/treelink-test/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.treelink.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/Laptop/Desktop/treelink-test/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "BaseHead", $$BaseHead, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["head"])}` })}${renderComponent($$result, "Analytics", $$Index, {})}${maybeRenderHead()}<body class="mx-auto min-h-screen max-w-screen-sm p-3 font-sans sm:p-6"> <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Laptop/Desktop/treelink-test/src/layouts/BaseLayout.astro", void 0);

function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  const formatOptions = { ...defaultOptions, ...options };
  return new Intl.DateTimeFormat("en-CA", formatOptions).format(date);
}

export { $$BaseLayout as $, formatDate as f };
