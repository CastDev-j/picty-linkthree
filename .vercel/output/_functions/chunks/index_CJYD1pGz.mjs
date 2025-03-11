import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CmAdv76m.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>¿Te gustaría transformar tus recuerdos más preciados en obras de arte? En Picty, nos especializamos en llevar tus imágenes favoritas a la realidad, ya sea en cuadros elegantes o láminas de alta calidad.</p>\n<p>Nuestra misión es ofrecerte productos personalizados que no solo embellezcan tus espacios, sino que también cuenten historias. Utilizamos materiales de primera y técnicas de impresión avanzadas para garantizar que cada pieza sea única y duradera.</p>\n<p>Además, en Picty creemos que la calidad no tiene por qué ser costosa. Por eso, ofrecemos precios razonables para que todos puedan disfrutar de nuestras creaciones. Descubre cómo podemos ayudarte a capturar y preservar tus momentos más especiales con estilo y elegancia.</p>\n<p>¡Transforma tus recuerdos en arte con Picty!</p>";

				const frontmatter = {"title":"Acerca de Picty","description":"Personalización fácil, calidad sublime.","publicationDate":"2025-03-11T00:00:00.000Z"};
				const file = "C:/Users/Laptop/Desktop/treelink-test/src/content/blog/about/index.md";
				const url = undefined;
				function rawContent() {
					return "\n¿Te gustaría transformar tus recuerdos más preciados en obras de arte? En Picty, nos especializamos en llevar tus imágenes favoritas a la realidad, ya sea en cuadros elegantes o láminas de alta calidad. \n\nNuestra misión es ofrecerte productos personalizados que no solo embellezcan tus espacios, sino que también cuenten historias. Utilizamos materiales de primera y técnicas de impresión avanzadas para garantizar que cada pieza sea única y duradera.\n\nAdemás, en Picty creemos que la calidad no tiene por qué ser costosa. Por eso, ofrecemos precios razonables para que todos puedan disfrutar de nuestras creaciones. Descubre cómo podemos ayudarte a capturar y preservar tus momentos más especiales con estilo y elegancia.\n\n¡Transforma tus recuerdos en arte con Picty!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
