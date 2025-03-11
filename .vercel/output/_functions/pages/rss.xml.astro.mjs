import rss from '@astrojs/rss';
import { g as getCollection, S as SITE } from '../chunks/siteConfig_BNacgQv6.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE.name,
    description: SITE.bio,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publicationDate,
      link: `/blog/${post.slug}`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
