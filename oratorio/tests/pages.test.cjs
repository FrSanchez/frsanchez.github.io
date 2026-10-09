const test = require('node:test');
const assert = require('node:assert/strict');
const { getPages } = require('../js/pages.js');
const { infoRoutes, menuRoutes, routeForHash } = require('../js/navigation.js');
const { routes } = require('../js/rosary.js');

test('All menu pages and rosary steps support direct links', () => {
  assert.equal(menuRoutes.length, 7);
  for (const route of infoRoutes) assert.equal(routeForHash(`#${route}`, routes).view, route);
  for (let i = 0; i < routes.length; i++) {
    assert.deepEqual(routeForHash(`#${routes[i]}`, routes), {view:'rosario',anchor:'',index:i});
  }
  assert.deepEqual(routeForHash('#rosario', routes), {view:'rosario',anchor:'',index:0});
  assert.deepEqual(routeForHash('#cancionero/adios-reina-del-cielo', routes), {view:'cancionero',anchor:'adios-reina-del-cielo',index:0});
  assert.equal(routeForHash('#unknown', routes).view, 'rosario');
});

function validateSection(section, pages) {
  for (const text of section.paragraphs || []) assert.ok(typeof text === 'string' && text.length > 0);
  for (const text of section.bullets || []) assert.ok(typeof text === 'string' && text.length > 0);
  for (const item of section.items || []) validateSection(item, pages);
  for (const link of section.links || []) {
    assert.ok(link.label.length > 0);
    if (!link.href.startsWith('#')) { assert.equal(link.href, 'https://bible.usccb.org/daily-bible-reading'); continue; }
    const destination = routeForHash(link.href, routes);
    if (destination.view !== 'rosario') assert.ok(pages[destination.view]);
    if (destination.anchor) assert.ok(pages[destination.view].sections.some(s => s.id === destination.anchor));
  }
}

test('Spanish and English include complete matching pages and working cross-links', () => {
  const spanish = getPages('es');
  const english = getPages('en');
  assert.deepEqual(Object.keys(spanish).sort(), infoRoutes.slice().sort());
  assert.deepEqual(Object.keys(english).sort(), Object.keys(spanish).sort());
  for (const language of ['es', 'en']) {
    const pages = getPages(language);
    for (const page of Object.values(pages)) {
      assert.ok(page.title.length > 0);
      for (const section of page.sections) validateSection(section, pages);
    }
    assert.equal(pages.cancionero.sections.length, 7);
    assert.deepEqual(pages.recomendaciones.sections.filter(s => s.items).flatMap(s => s.items.map((_, i) => s.start + i)), [1,2,3,4,5,6]);
    assert.equal(pages['hacer-y-no-hacer'].sections[0].bullets.length, 6);
    assert.equal(pages['hacer-y-no-hacer'].sections[1].bullets.length, 5);
  }
  for (const key of infoRoutes) assert.equal(spanish[key].sections.length, english[key].sections.length);
  assert.deepEqual(spanish.cancionero.sections.map(s=>s.id), english.cancionero.sections.map(s=>s.id));
});


test('Rosary consecration and standalone consecration have distinct routes', () => {
  assert.deepEqual(routeForHash('#rosario-consagracion', routes), {view:'rosario',anchor:'',index:9});
  assert.deepEqual(routeForHash('#consagracion', routes), {view:'consagracion',anchor:'',index:0});
});
