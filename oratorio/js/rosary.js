(function (root) {
  const { getLocale, format } = typeof module !== 'undefined' && module.exports
    ? require('./locales.js') : root.RosaryLocales;
  const routes = ['inicio', 'misterio-1', 'misterio-2', 'misterio-3', 'misterio-4', 'misterio-5', 'oraciones-finales', 'letanias', 'cierre'];

  function groupForDate(date = new Date()) {
    return ['gloriosos', 'gozosos', 'dolorosos', 'gloriosos', 'luminosos', 'dolorosos', 'gozosos'][date.getDay()];
  }

  function pagesForGroup(groupKey, language = 'es') {
    const { content, ui } = getLocale(language);
    const group = content.groups[groupKey];
    const p = content.prayers;
    const decade = [
      { heading: ui.ourFatherTitle, paragraphs: [p.ourFather] },
      { heading: ui.hailMaryTitle, paragraphs: [p.hailMary] },
      { heading: ui.gloryTitle, paragraphs: [p.glory] },
      { heading: ui.maryGraceTitle, paragraphs: [p.maryGrace, p.maryResponse] },
      { heading: ui.fatimaPrayerTitle, paragraphs: [p.fatimaPrayer] },
    ];
    return [
      { title: ui.initialTitle, label: ui.initialLabel, mystery: format(ui.todayMysteries, { group: group.name }), sections: [{ paragraphs: p.initialPrayers }] },
      ...group.mysteries.map((mystery, index) => ({
        title: format(ui.mysteryHeading, { ordinal: ui.ordinals[index], kind: group.kind }),
        label: format(ui.contemplation, { current: index + 1, total: 5 }),
        mystery: mystery.title,
        description: mystery.description,
        sections: decade,
      })),
      { title: ui.closingTitle, label: ui.closingLabel, sections: [{ paragraphs: p.closingPrayers }] },
      { title: ui.litanyTitle, label: ui.litanyLabel, sections: [
        { paragraphs: p.litanyOpening },
        { paragraphs: p.litanyInvocations.map(invocation => `${invocation}\n${ui.prayForUs}`) },
      ] },
      { title: ui.finalTitle, label: ui.finalLabel, sections: [
        { paragraphs: p.finalPrayers },
        { heading: ui.offeringTitle, paragraphs: [p.offering] },
        { heading: ui.conclusionTitle, paragraphs: p.conclusion },
      ] },
    ];
  }

  function indexForHash(hash) {
    const index = routes.indexOf(hash.replace(/^#/, ''));
    return index < 0 ? 0 : index;
  }

  const api = { groupForDate, pagesForGroup, indexForHash, routes };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Rosary = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
