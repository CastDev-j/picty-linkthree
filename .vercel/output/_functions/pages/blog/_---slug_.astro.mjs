/* empty css                                     */
import { a as createAstro, c as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CmAdv76m.mjs';
import 'kleur/colors';
import { S as SITE, g as getCollection } from '../../chunks/siteConfig_BNacgQv6.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DsIoYA7-.mjs';
import { f as formatDate, $ as $$BaseLayout } from '../../chunks/util_CdtLZvEf.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.treelink.com");
const $$SeoPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SeoPost;
  const { entry } = Astro2.props;
  const post = entry;
  const postTitle = post.data.title || SITE.name;
  const postDescription = post.data.description || SITE.bio;
  const ogImage = new URL("./og.jpg", Astro2.site);
  return renderTemplate`<title>${`${postTitle} | ${SITE.name}`}</title><meta name="title"${addAttribute(`${postTitle} | ${SITE.name}`, "content")}><meta name="description"${addAttribute(postDescription, "content")}><link rel="canonical"${addAttribute(SITE.url, "href")}><meta property="og:title"${addAttribute(postTitle, "content")}><meta property="og:description"${addAttribute(postDescription, "content")}><meta property="og:image"${addAttribute(`${SITE.url}${post?.data?.image?.src}` || ogImage, "content")}><meta property="og:image:alt"${addAttribute(postTitle, "content")}><meta property="og:type" content="website"><meta property="og:locale"${addAttribute(SITE.locale, "content")}><meta name="twitter:title"${addAttribute(postTitle, "content")}><meta name="twitter:description"${addAttribute(postDescription, "content")}><meta property="twitter:image"${addAttribute(`${SITE.url}${post?.data?.image?.src}` || ogImage, "content")}><meta name="twitter:image:alt"${addAttribute(postTitle, "content")}><meta name="twitter:card" content="summary_large_image">${post?.data.tags && post.data.tags.map((tag) => {
    return renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`;
  })}`;
}, "C:/Users/Laptop/Desktop/treelink-test/src/components/SeoPost.astro", void 0);

const $$Astro = createAstro("https://example.treelink.com");
async function getStaticPaths() {
  const blog = await getCollection("blog");
  return blog.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main> <a href="/" class="block py-3 text-lg font-medium uppercase text-lightModeForegroundMuted underline underline-offset-4 hover:text-lightModeForeground dark:text-darkModeForegroundMuted dark:hover:text-darkModeForeground">${`\u2190 ${SITE.name}`}</a> ${entry.data.image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": entry.data.image, "alt": entry.data.imageAlt || "", "class": "mt-10 h-auto w-full" })}`} <h1 class="mt-6 flex flex-wrap justify-center text-balance text-2xl font-medium text-lightModeForeground dark:text-darkModeForeground"> ${entry.data.title} </h1> <p class="text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted"> ${formatDate(entry.data.publicationDate)} </p> <hr class="my-6 opacity-50"> <div class="prose mx-auto mb-16 dark:prose-invert"> ${renderComponent($$result2, "Content", Content, {})} </div> <a href="/" class="block py-3 text-lg font-medium uppercase text-lightModeForegroundMuted underline underline-offset-4 hover:text-lightModeForeground dark:text-darkModeForegroundMuted dark:hover:text-darkModeForeground">${`\u2190 ${SITE.name}`}</a> </main> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "SeoPost", $$SeoPost, { "slot": "head", "entry": entry })}` })}`;
}, "C:/Users/Laptop/Desktop/treelink-test/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/treelink-test/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
