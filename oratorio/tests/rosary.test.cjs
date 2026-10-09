const test = require('node:test');
const assert = require('node:assert/strict');
const { groupForDate, pagesForGroup, indexForHash, routes } = require('../js/rosary.js');
const content = require('../js/content.js');

test('Every local weekday selects the requested mysteries', () => {
  const expected = ['gozosos', 'dolorosos', 'gloriosos', 'luminosos', 'dolorosos', 'gozosos', 'gloriosos'];
  expected.forEach((group, offset) => assert.equal(groupForDate(new Date(2026, 9, 5 + offset)), group));
});

test('Each group has the full nine-page flow and all decade prayers', () => {
  for (const key of Object.keys(content.groups)) {
    const pages = pagesForGroup(key);
    assert.equal(pages.length, 9);
    assert.equal(pages[0].title, 'Introducción');
    assert.equal(pages[6].title, 'Oraciones finales');
    assert.equal(pages[7].title, 'Letanías de la Santísima Virgen');
    assert.equal(pages[8].title, 'Cierre');
    for (let i = 1; i <= 5; i++) {
      assert.equal(pages[i].mystery, content.groups[key].mysteries[i - 1].title);
      assert.equal(pages[i].sections.length, 5);
      assert.ok(pages[i].sections.flatMap(s => s.paragraphs).every(p => typeof p === 'string' && p.length > 0));
    }
    assert.equal(pages[7].sections[1].paragraphs.length, 54);
  }
});

test('Added mystery descriptions appear on the corresponding page', () => {
  const mystery = content.groups.gozosos.mysteries[0];
  const original = mystery.description;
  try {
    mystery.description = 'Texto de meditación.\nSegundo párrafo.';
    assert.equal(pagesForGroup('gozosos')[1].description, mystery.description);
  } finally {
    mystery.description = original;
  }
});

test('Browser routes map to all pages and unknown routes return home', () => {
  routes.forEach((route, index) => assert.equal(indexForHash(`#${route}`), index));
  assert.equal(indexForHash(''), 0);
  assert.equal(indexForHash('#unknown'), 0);
});

const { getLocale, locales, format } = require('../js/locales.js');

test('Both languages cover every UI key, prayer, and mystery', () => {
  const spanish = getLocale('es');
  const english = getLocale('en');
  assert.deepEqual(Object.keys(english.ui).sort(), Object.keys(spanish.ui).sort());
  assert.deepEqual(Object.keys(english.content.prayers).sort(), Object.keys(spanish.content.prayers).sort());
  for (const [key, value] of Object.entries(spanish.content.prayers)) {
    const translated = english.content.prayers[key];
    if (Array.isArray(value)) assert.equal(translated.length, value.length, key);
    else assert.ok(typeof translated === 'string' && translated.length > 0, key);
  }
  for (const language of Object.keys(locales)) {
    for (const key of Object.keys(content.groups)) {
      const pages = pagesForGroup(key, language);
      assert.equal(pages.length, 9);
      for (const page of pages) {
        assert.ok(page.title.length > 0 && !page.title.includes('{'));
        for (const section of page.sections) {
          assert.ok(section.paragraphs.every(p => typeof p === 'string' && p.length > 0));
        }
      }
      assert.equal(getLocale(language).content.groups[key].mysteries.length, 5);
    }
  }
});

test('English renders translated page headings, prayers, and litany responses', () => {
  const pages = pagesForGroup('gozosos', 'en');
  assert.equal(pages[0].title, 'Introduction');
  assert.equal(pages[1].title, 'First Joyful Mystery');
  assert.ok(pages[1].sections[0].paragraphs[0].startsWith('Our Father'));
  assert.equal(pages[7].title, 'Litany of the Blessed Virgin Mary');
  assert.equal(pages[7].sections[1].paragraphs[0], 'Holy Mary,\npray for us.');
  assert.equal(pages[7].sections[2].paragraphs.length, 3);
  assert.equal(format(getLocale('en').ui.pageCount, {current: 8, total: 9}), 'Page 8 of 9');
  assert.equal(getLocale('unsupported'), getLocale('es'));
});


test('New introduction has the requested prayer sections and Gospel link in both languages', () => {
  for (const language of ['es', 'en']) {
    const {ui, content} = getLocale(language);
    const intro = pagesForGroup('luminosos', language)[0];
    assert.equal(intro.title, ui.initialTitle);
    assert.deepEqual(intro.sections.map(s => s.heading).filter(Boolean), [ui.contritionTitle, ui.spiritTitle, ui.gospelTitle, ui.petitionsTitle]);
    assert.equal(intro.sections[3].link.href, 'https://bible.usccb.org/daily-bible-reading');
    assert.equal(intro.sections[2].paragraphs.length, 5);
    assert.ok(content.prayers.initialPrayers[7].endsWith('…'));
    for (const mystery of pagesForGroup('luminosos', language).slice(1, 6)) {
      assert.equal(mystery.sections[3].heading, ui.maryGraceTitle);
    }
  }
});


test('Every mystery ends with the complete Jaculatorias and Fátima prayer', () => {
  for (const language of ['es', 'en']) {
    const { content: localized } = getLocale(language);
    const p = localized.prayers;
    for (const key of Object.keys(content.groups)) {
      for (const mystery of pagesForGroup(key, language).slice(1, 6)) {
        assert.deepEqual(mystery.sections[3].paragraphs, [p.maryGrace, p.maryResponse, p.rosaryVirginLeader, p.rosaryVirginResponse]);
        assert.deepEqual(mystery.sections[4].paragraphs, [p.fatimaPrayer, p.ourLadyFatimaLeader, p.ourLadyFatimaResponse, p.immaculateHeartLeader, p.immaculateHeartResponse]);
      }
    }
  }
});


test('Closing prayers and updated litany follow the supplied content in both languages', () => {
  for (const language of ['es', 'en']) {
    const { content: localized, ui } = getLocale(language);
    const p = localized.prayers;
    const pages = pagesForGroup('luminosos', language);
    assert.ok(pages[6].sections[0].paragraphs[0].includes('Seattle'));
    assert.equal(pages[6].sections[1].heading, ui.ourFatherTitle);
    assert.deepEqual(pages[6].sections[1].paragraphs, [p.ourFather]);
    assert.equal(pages[6].sections[2].paragraphs.length, 3);
    assert.deepEqual(pages[6].sections[3].paragraphs, [p.glory]);
    const litany = pages[7];
    assert.deepEqual(litany.sections[0].emphasizedResponses, [p.litanyMercyResponse]);
    assert.deepEqual(litany.sections[1].emphasizedResponses, [p.litanyResponse]);
    assert.equal(litany.sections[1].paragraphs.filter(t => t.includes(p.litanyResponse)).length, 1);
    assert.equal(litany.sections[2].paragraphs.length, 3);
    assert.ok(litany.sections[2].paragraphs.every(t => t.split('\n').length === 2));
  }
});


test('Cierre contains only Thanksgiving, Salve, and Let Us Pray in both languages', () => {
  for (const language of ['es', 'en']) {
    const { ui, content: localized } = getLocale(language);
    const final = pagesForGroup('gozosos', language)[8];
    assert.deepEqual(final.sections.map(s => s.heading), [ui.thanksgivingTitle, ui.salveTitle, ui.letUsPrayTitle]);
    assert.deepEqual(final.sections.flatMap(s => s.paragraphs), localized.prayers.finalPrayers);
    assert.equal(final.sections[1].paragraphs.length, 3);
    assert.ok(final.sections[2].paragraphs[0].endsWith(language === 'es' ? 'Amén.' : 'Amen.'));
    assert.ok(!('offering' in localized.prayers));
    assert.ok(!('conclusion' in localized.prayers));
  }
});
