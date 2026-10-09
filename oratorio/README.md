# Oratorio de la Virgen de Fátima

A responsive Spanish rosary built with plain JavaScript and Bootstrap 5.3.8. No build step or backend is required.

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

Descriptions appear automatically below the mystery title when present. Use `\n` for paragraph breaks. Prayer content is rendered as text, so no HTML markup is needed. All content lives in this file for later localization.

## Colors

Header title: `#0c2340`; reading text: `#444`; buttons: `#226bc9` with `#fff` text. The warm background and green progress marker match the Flutter version. Adjust colors in `css/styles.css`.

## Checks

```sh
node --test tests/rosary.test.cjs
```

Bootstrap CSS is bundled in `vendor/bootstrap.min.css` so the page does not need a CDN at runtime. Bootstrap is MIT licensed; its license is included in `vendor/LICENSE.bootstrap`.
