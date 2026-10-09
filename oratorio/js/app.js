(() => {
  const { groupForDate, pagesForGroup, indexForHash, routes } = window.Rosary;
  const { getLocale, format } = window.RosaryLocales;
  const storageKey = 'oratorio-language';
  let language = 'es';
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'es' || saved === 'en') language = saved;
  } catch { /* The language switch still works if browser storage is unavailable. */ }
  const settingsDialog = document.getElementById('settings-dialog');
  const languageSelect = document.getElementById('language-select');
  const settingsButton = document.getElementById('settings-button');
  const elements = Object.fromEntries([
    'daily-group', 'page-count', 'progress', 'progress-fill', 'step-markers',
    'section-label', 'page-title', 'mystery-title', 'mystery-description',
    'prayers', 'next-button', 'home-button', 'closing-symbol',
  ].map(id => [id, document.getElementById(id)]));
  let groupKey = groupForDate();
  let pageIndex = indexForHash(window.location.hash);

  function render(moveFocus = false) {
    const { content, ui } = getLocale(language);
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]').content = ui.metaDescription;
    for (const element of document.querySelectorAll('[data-i18n]')) {
      element.textContent = ui[element.dataset.i18n];
    }
    for (const element of document.querySelectorAll('[data-i18n-aria]')) {
      element.setAttribute('aria-label', ui[element.dataset.i18nAria]);
    }
    for (const element of document.querySelectorAll('[data-i18n-alt]')) {
      element.alt = ui[element.dataset.i18nAlt];
    }
    languageSelect.value = language;
    const pages = pagesForGroup(groupKey, language);
    const page = pages[pageIndex];
    elements['daily-group'].textContent = content.groups[groupKey].name;
    const pageCount = format(ui.pageCount, { current: pageIndex + 1, total: pages.length });
    elements['page-count'].textContent = pageCount;
    elements.progress.setAttribute('aria-valuenow', pageIndex + 1);
    elements.progress.setAttribute('aria-valuetext', `${pageCount}: ${page.title}`);
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
    elements.prayers.classList.toggle('litany-columns', routes[pageIndex] === 'letanias');
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
        text.split('\n').forEach((line, index) => {
          if (index > 0) paragraph.append(document.createTextNode('\n'));
          if (section.emphasizedResponses?.includes(line)) {
            const response = document.createElement('em');
            response.className = 'litany-response';
            response.textContent = line;
            paragraph.append(response);
            return;
          }
          const label = ui.speakers.find(speaker => line.startsWith(`${speaker}:`));
          if (label) {
            const speaker = document.createElement('strong');
            speaker.textContent = `${label}: `;
            paragraph.append(speaker, document.createTextNode(line.slice(label.length + 1).trimStart()));
          } else {
            paragraph.append(document.createTextNode(line));
          }
        });
        container.append(paragraph);
      }
      if (section.link) {
        const paragraph = document.createElement('p');
        paragraph.className = 'prayer-paragraph';
        const link = document.createElement('a');
        link.href = section.link.href;
        link.textContent = section.link.label;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', section.link.ariaLabel);
        paragraph.append(link);
        container.append(paragraph);
      }
      return container;
    }));
    elements['closing-symbol'].hidden = routes[pageIndex] !== 'cierre';
    elements['next-button'].hidden = pageIndex === pages.length - 1;
    elements['home-button'].closest('footer').hidden = pageIndex === 0;
    document.body.classList.toggle('at-start', pageIndex === 0);
    document.title = `${page.title} · ${ui.siteTitle}`;
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

  settingsButton.addEventListener('click', () => settingsDialog.showModal());
  settingsDialog.addEventListener('close', () => settingsButton.focus({ preventScroll: true }));
  settingsDialog.addEventListener('click', event => {
    if (event.target !== settingsDialog) return;
    const rect = settingsDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      settingsDialog.close();
    }
  });
  languageSelect.addEventListener('change', () => {
    const selected = languageSelect.value;
    if (selected !== 'es' && selected !== 'en') return;
    language = selected;
    try { window.localStorage.setItem(storageKey, language); } catch { /* Optional persistence. */ }
    render();
  });

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
