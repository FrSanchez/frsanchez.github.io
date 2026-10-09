(() => {
  const { groupForDate, pagesForGroup, indexForHash, routes } = window.Rosary;
  const elements = Object.fromEntries([
    'daily-group', 'page-count', 'progress', 'progress-fill', 'step-markers',
    'section-label', 'page-title', 'mystery-title', 'mystery-description',
    'prayers', 'next-button', 'home-button',
  ].map(id => [id, document.getElementById(id)]));
  let groupKey = groupForDate();
  let pageIndex = indexForHash(window.location.hash);

  function render(moveFocus = false) {
    const pages = pagesForGroup(groupKey);
    const page = pages[pageIndex];
    elements['daily-group'].textContent = window.RosaryContent.groups[groupKey].name;
    elements['page-count'].textContent = `Página ${pageIndex + 1} de ${pages.length}`;
    elements.progress.setAttribute('aria-valuenow', pageIndex + 1);
    elements.progress.setAttribute('aria-valuetext', `Página ${pageIndex + 1} de ${pages.length}: ${page.title}`);
    elements['progress-fill'].style.width = `${(pageIndex + 1) / pages.length * 100}%`;
    elements['step-markers'].replaceChildren(...pages.map((step, index) => {
      const marker = document.createElement('li');
      marker.className = `step-marker${index < pageIndex ? ' completed' : ''}`;
      marker.textContent = index + 1;
      marker.setAttribute('aria-label', `${index + 1}. ${step.title}`);
      if (index === pageIndex) marker.setAttribute('aria-current', 'step');
      return marker;
    }));
    elements['section-label'].textContent = page.label;
    elements['page-title'].textContent = page.title;
    for (const [id, value] of [['mystery-title', page.mystery], ['mystery-description', page.description]]) {
      elements[id].textContent = value || '';
      elements[id].hidden = !value;
    }
    elements.prayers.replaceChildren(...page.sections.map(section => {
      const container = document.createElement('section');
      container.className = 'prayer-section';
      if (section.heading) {
        const heading = document.createElement('h3');
        heading.textContent = section.heading;
        container.append(heading);
      }
      for (const text of section.paragraphs) {
        const paragraph = document.createElement('p');
        paragraph.className = 'prayer-paragraph';
        const match = /^(Guía|Todos):\s*/.exec(text);
        if (match) {
          const speaker = document.createElement('strong');
          speaker.textContent = `${match[1]}: `;
          paragraph.append(speaker, document.createTextNode(text.slice(match[0].length)));
        } else {
          paragraph.textContent = text;
        }
        container.append(paragraph);
      }
      return container;
    }));
    elements['next-button'].hidden = pageIndex === pages.length - 1;
    document.title = `${page.title} · Oratorio de la Virgen de Fátima`;
    if (moveFocus) {
      elements['page-title'].focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function navigate(index) {
    if (index === 0) groupKey = groupForDate();
    pageIndex = index;
    const hash = `#${routes[index]}`;
    if (window.location.hash !== hash) window.history.pushState(null, '', hash);
    render(true);
  }

  elements['next-button'].addEventListener('click', () => {
    if (pageIndex < routes.length - 1) navigate(pageIndex + 1);
  });
  elements['home-button'].addEventListener('click', () => navigate(0));
  window.addEventListener('hashchange', () => {
    pageIndex = indexForHash(window.location.hash);
    if (pageIndex === 0) groupKey = groupForDate();
    render(true);
  });
  render();
})();
