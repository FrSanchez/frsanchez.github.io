(function (root) {
  const infoRoutes = ['presentacion', 'recomendaciones', 'consagracion', 'despedida', 'cancionero', 'hacer-y-no-hacer', 'acerca-de'];
  const menuRoutes = ['presentacion', 'recomendaciones', 'rosario', 'consagracion', 'despedida', 'cancionero', 'hacer-y-no-hacer', 'acerca-de'];
  function routeForHash(hash, rosaryRoutes) {
    const [name, anchor = ''] = hash.replace(/^#/, '').split('/');
    if (infoRoutes.includes(name)) return { view: name, anchor, index: 0 };
    const index = rosaryRoutes.indexOf(name);
    return { view: 'rosario', anchor: '', index: index < 0 ? 0 : index };
  }
  function languageForPath(pathname) {
    return /\/en(?:\/|$)/.test(pathname) ? 'en' : 'es';
  }
  function pathForLanguage(pathname, language) {
    if (languageForPath(pathname) === language) return pathname;
    if (language === 'es') return pathname.replace(/\/en(?:\/|$)/, '/');
    const filename = pathname.endsWith('.html') ? pathname.slice(pathname.lastIndexOf('/') + 1) : '';
    const directory = filename ? pathname.slice(0, -filename.length) : `${pathname.replace(/\/$/, '')}/`;
    return `${directory}en/${filename}`;
  }
  const api = { infoRoutes, menuRoutes, routeForHash, languageForPath, pathForLanguage };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.OratorioNavigation = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
