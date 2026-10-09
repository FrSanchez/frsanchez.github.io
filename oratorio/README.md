# Oratorio de la Virgen de Fátima

A responsive Spanish and English rosary built with plain JavaScript and Bootstrap 5.3.8. No build step or backend is required.

Open `index.html` in a browser, or serve this folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. The complete folder can be deployed to any static website host.

## Prayer flow

Oraciones iniciales → five mysteries → Oraciones finales → Letanías de la Santísima Virgen → Cierre.

The mysteries use the visitor's local date: Gozosos on Monday/Saturday, Dolorosos on Tuesday/Friday, Gloriosos on Wednesday/Sunday, and Luminosos on Thursday. A prayer session keeps its selected group until INICIO starts it again. SIGUE appears after the prayer text. INICIO is always visible. Browser Back/Forward and page links work through URL hashes.

## Add mystery descriptions

Edit `js/content.js`. Each mystery has a `title` and an empty `description`:

```js
{
  "title": "La Encarnación del Hijo de Dios (Lucas 1, 37).",
  "description": "Add the Spanish meditation here."
}
```

Descriptions appear automatically below the mystery title when present. Use `\n` for paragraph breaks. Prayer content is rendered as text, so no HTML markup is needed. Spanish content lives in `js/content.js`; English content lives in `js/content-en.js`. Add each meditation separately in both languages.

## Colors

Header title: `#0c2340`; reading text: `#444`; buttons: `#226bc9` with `#fff` text. The warm background and green progress marker match the Flutter version. Adjust colors in `css/styles.css`.

## Checks

```sh
node --test tests/rosary.test.cjs
```

Bootstrap CSS is bundled in `vendor/bootstrap.min.css` so the page does not need a CDN at runtime. Bootstrap is MIT licensed; its license is included in `vendor/LICENSE.bootstrap`.

## Language settings

The gear button in the top-right corner opens Settings. Spanish is the default. Switching to English updates the current page immediately and preserves rosary progress. The choice is saved in localStorage under `oratorio-language`; when storage is unavailable, switching still works for the current visit. No account or backend is needed.

- `js/locales.js`: interface strings, page labels, prayer headings, accessibility labels, and formatting templates.
- `js/content.js`: Spanish prayers and mysteries.
- `js/content-en.js`: English prayers and mysteries.

Language names are shown in their own languages (Español / English). The page's HTML language and tab title follow the selection. URL hashes stay stable across languages so browser navigation continues to work. English content uses familiar English prayer wording where applicable and translations of the supplied Spanish texts elsewhere; the source abbreviations in the closing prayers are retained.

To add another language, supply a matching content file and UI dictionary in `locales.js`, add its option in the settings selector, and update the supported language validation in `app.js`.

## Deploying updates

Upload the complete site folder, including `css/styles.css`, all files under `js/`, and the `vendor/` files. The custom stylesheet link includes a version query to avoid reusing older cached CSS. After changing the stylesheet, change this version in `index.html` before deploying. If your host has a CDN cache, purge it when deploying updated files.

The header image also has explicit fallback dimensions, so it remains small if the custom stylesheet fails to load. Its final alignment and responsive size come from the `.header-layout` and `.header-image` rules in `css/styles.css`.
