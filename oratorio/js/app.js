(() => {
  const { groupForDate, pagesForGroup, routes } = window.Rosary;
  const { getLocale, format } = window.RosaryLocales;
  const { getPages } = window.OratorioPages;
  const { routeForHash, menuRoutes } = window.OratorioNavigation;
  const storageKey = 'oratorio-language';
  let language = 'es';
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'es' || saved === 'en') language = saved;
  } catch { /* Language switching works when storage is unavailable. */ }
  const settingsDialog = document.getElementById('settings-dialog');
  const languageSelect = document.getElementById('language-select');
  const settingsButton = document.getElementById('settings-button');
  const menuDialog = document.getElementById('menu-dialog');
  const menuButton = document.getElementById('menu-button');
  const menuLinks = document.getElementById('menu-links');
  let menuNavigated = false;
  const elements = Object.fromEntries([
    'daily-group', 'page-count', 'progress', 'progress-fill', 'step-markers',
    'section-label', 'page-title', 'mystery-title', 'mystery-description',
    'prayers', 'next-button', 'home-button', 'closing-symbol', 'progress-panel',
  ].map(id => [id, document.getElementById(id)]));
  let groupKey = groupForDate();
  let current = routeForHash(window.location.hash, routes);
  const menuLabelKeys = ['menuPresentation', 'menuRecommendations', 'menuRosary', 'menuConsecration', 'menuFarewell', 'menuSongbook', 'menuDosDonts'];

  function makeParagraph(text, section, ui) {
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
      } else paragraph.append(document.createTextNode(line));
    });
    return paragraph;
  }

  function appendContent(container, section, ui) {
    for (const text of section.paragraphs || []) container.append(makeParagraph(text, section, ui));
    if (section.bullets) {
      const list = document.createElement('ul');
      list.className = 'devotion-list';
      for (const text of section.bullets) {
        const item = document.createElement('li');
        item.append(makeParagraph(text, section, ui));
        list.append(item);
      }
      container.append(list);
    }
    if (section.items) {
      const list = document.createElement('ol');
      list.className = 'recommendation-list';
      list.start = section.start || 1;
      for (const content of section.items) {
        const item = document.createElement('li');
        appendContent(item, content, ui);
        list.append(item);
      }
      container.append(list);
    }
    for (const data of section.links || (section.link ? [section.link] : [])) {
      const paragraph = document.createElement('p');
      paragraph.className = 'prayer-paragraph page-link';
      const link = document.createElement('a');
      link.href = data.href;
      link.textContent = data.label;
      if (data.href.startsWith('https://')) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', data.ariaLabel || `${data.label} (${ui.newTab})`);
      }
      paragraph.append(link);
      container.append(paragraph);
    }
  }

  function render(moveFocus = false) {
    current = routeForHash(window.location.hash, routes);
    const isRosary = current.view === 'rosario';
    const { content, ui } = getLocale(language);
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]').content = ui.metaDescription;
    for (const element of document.querySelectorAll('[data-i18n]')) element.textContent = ui[element.dataset.i18n];
    for (const element of document.querySelectorAll('[data-i18n-aria]')) element.setAttribute('aria-label', ui[element.dataset.i18nAria]);
    for (const element of document.querySelectorAll('[data-i18n-alt]')) element.alt = ui[element.dataset.i18nAlt];
    languageSelect.value = language;
    menuLinks.replaceChildren(...menuRoutes.map((route, index) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${route}`;
      link.textContent = ui[menuLabelKeys[index]];
      if (route === current.view) link.setAttribute('aria-current', 'page');
      item.append(link);
      return item;
    }));
    const pages = pagesForGroup(groupKey, language);
    const page = isRosary ? pages[current.index] : getPages(language)[current.view];
    elements['progress-panel'].hidden = !isRosary;
    elements['daily-group'].textContent = content.groups[groupKey].name;
    const pageCount = format(ui.pageCount, { current: current.index + 1, total: pages.length });
    elements['page-count'].textContent = pageCount;
    elements.progress.setAttribute('aria-valuemax', pages.length);
    elements.progress.setAttribute('aria-valuenow', current.index + 1);
    elements.progress.setAttribute('aria-valuetext', `${pageCount}: ${page.title}`);
    elements['progress-fill'].style.width = `${(current.index + 1) / pages.length * 100}%`;
    elements['step-markers'].replaceChildren(...pages.map((step, index) => {
      const item = document.createElement('li');
      const marker = document.createElement('button');
      marker.type = 'button';
      marker.className = `step-marker${index < current.index ? ' completed' : ''}`;
      marker.textContent = index + 1;
      marker.dataset.pageIndex = index;
      marker.setAttribute('aria-label', format(ui.jumpToPage, { current: index + 1, title: step.title }));
      marker.setAttribute('aria-controls', 'prayer-page');
      if (index === current.index) marker.setAttribute('aria-current', 'step');
      item.append(marker);
      return item;
    }));
    elements['section-label'].textContent = page.label;
    elements['page-title'].textContent = page.title;
    for (const [id, value] of [['mystery-title', page.mystery], ['mystery-description', page.description]]) {
      elements[id].textContent = value || '';
      elements[id].hidden = !value;
    }
    elements.prayers.classList.toggle('litany-columns', isRosary && routes[current.index] === 'letanias');
    elements.prayers.classList.toggle('songbook-columns', !!page.songbook);
    elements.prayers.classList.toggle('checklist-columns', !!page.checklists);
    elements.prayers.replaceChildren(...page.sections.map(section => {
      const container = document.createElement('section');
      container.className = `prayer-section${page.songbook ? ' song-card' : ''}${section.checklist ? ` checklist-${section.checklist}` : ''}`;
      if (section.id) container.id = section.id;
      if (section.heading) {
        const heading = document.createElement('h3');
        heading.textContent = section.heading;
        if (section.id) heading.tabIndex = -1;
        container.append(heading);
      }
      appendContent(container, section, ui);
      return container;
    }));
    elements['closing-symbol'].hidden = !isRosary || routes[current.index] !== 'cierre';
    elements['next-button'].hidden = !isRosary || current.index === pages.length - 1;
    elements['home-button'].textContent = isRosary ? ui.home : ui.menuRosary;
    elements['home-button'].closest('footer').hidden = isRosary && current.index === 0;
    document.body.classList.toggle('at-start', isRosary && current.index === 0);
    document.title = `${page.title} · ${ui.siteTitle}`;
    if (moveFocus) {
      elements['page-title'].focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    if (current.anchor) {
      const target = document.getElementById(current.anchor);
      if (target && elements.prayers.contains(target)) {
        if (moveFocus) target.querySelector('h3')?.focus({ preventScroll: true });
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
    }
  }

  function navigateTo(hash) {
    const destination = routeForHash(hash, routes);
    if (destination.view === 'rosario' && destination.index === 0) groupKey = groupForDate();
    if (window.location.hash !== hash) window.history.pushState(null, '', hash);
    render(true);
  }

  function dismissOnBackdrop(dialog, event) {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
  menuButton.addEventListener('click', () => {
    menuNavigated = false;
    menuButton.setAttribute('aria-expanded', 'true');
    menuDialog.showModal();
  });
  menuDialog.addEventListener('close', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    if (!menuNavigated) menuButton.focus({ preventScroll: true });
  });
  menuDialog.addEventListener('click', event => dismissOnBackdrop(menuDialog, event));
  menuLinks.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    menuNavigated = true;
    menuDialog.close();
    navigateTo(link.getAttribute('href'));
  });
  settingsButton.addEventListener('click', () => settingsDialog.showModal());
  settingsDialog.addEventListener('close', () => settingsButton.focus({ preventScroll: true }));
  settingsDialog.addEventListener('click', event => dismissOnBackdrop(settingsDialog, event));
  languageSelect.addEventListener('change', () => {
    const selected = languageSelect.value;
    if (selected !== 'es' && selected !== 'en') return;
    language = selected;
    try { window.localStorage.setItem(storageKey, language); } catch { /* Optional persistence. */ }
    render();
  });
  elements['step-markers'].addEventListener('click', event => {
    const marker = event.target.closest('button[data-page-index]');
    if (!marker || current.view !== 'rosario') return;
    const index = Number(marker.dataset.pageIndex);
    if (Number.isInteger(index) && index >= 0 && index < routes.length) navigateTo(`#${routes[index]}`);
  });
  elements['next-button'].addEventListener('click', () => {
    if (current.view === 'rosario' && current.index < routes.length - 1) navigateTo(`#${routes[current.index + 1]}`);
  });
  elements['home-button'].addEventListener('click', () => navigateTo('#inicio'));
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    elements['page-title'].focus();
  });
  window.addEventListener('hashchange', () => {
    const destination = routeForHash(window.location.hash, routes);
    if (destination.view === 'rosario' && destination.index === 0) groupKey = groupForDate();
    render(true);
  });
  render();
})();
