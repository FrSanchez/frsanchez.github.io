(function (root) {
  const content = typeof module !== 'undefined' && module.exports
    ? require('./content.js') : root.RosaryContent;
  const ordinals = ['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto'];
  const routes = ['inicio', 'misterio-1', 'misterio-2', 'misterio-3', 'misterio-4', 'misterio-5', 'oraciones-finales', 'letanias', 'cierre'];

  function groupForDate(date = new Date()) {
    return ['gloriosos', 'gozosos', 'dolorosos', 'gloriosos', 'luminosos', 'dolorosos', 'gozosos'][date.getDay()];
  }

  function pagesForGroup(groupKey) {
    const group = content.groups[groupKey];
    const p = content.prayers;
    const decade = [
      { heading: 'Padre nuestro', paragraphs: [p.ourFather] },
      { heading: 'Ave María · 10 veces', paragraphs: [p.hailMary] },
      { heading: 'Gloria', paragraphs: [p.glory] },
      { heading: 'María, Madre de gracia', paragraphs: [p.maryGrace, p.maryResponse] },
      { heading: 'Oración de Fátima', paragraphs: [p.fatimaPrayer] },
    ];
    return [
      { title: 'Oraciones iniciales', label: 'Comenzamos en oración', mystery: `Misterios de hoy: ${group.name}`, sections: [{ paragraphs: p.initialPrayers }] },
      ...group.mysteries.map((mystery, index) => ({
        title: `${ordinals[index]} misterio de ${group.kind}`,
        label: `Contemplamos · ${index + 1} de 5`,
        mystery: mystery.title,
        description: mystery.description,
        sections: decade,
      })),
      { title: 'Oraciones finales', label: 'A nuestra Madre', sections: [{ paragraphs: p.closingPrayers }] },
      { title: 'Letanías de la Santísima Virgen', label: 'Ruega por nosotros', sections: [
        { paragraphs: p.litanyOpening },
        { paragraphs: p.litanyInvocations.map(invocation => `${invocation}\nRuega por nosotros.`) },
      ] },
      { title: 'Cierre', label: 'Concluimos en oración', sections: [
        { paragraphs: p.finalPrayers },
        { heading: 'Ofrecimiento del Santo Rosario', paragraphs: [p.offering] },
        { heading: 'Conclusión', paragraphs: p.conclusion },
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
