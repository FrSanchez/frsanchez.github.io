(function (root) {
  const infoRoutes = ['presentacion', 'recomendaciones', 'consagracion', 'despedida', 'cancionero', 'hacer-y-no-hacer'];
  const menuRoutes = ['presentacion', 'recomendaciones', 'rosario', 'consagracion', 'despedida', 'cancionero', 'hacer-y-no-hacer'];
  function routeForHash(hash, rosaryRoutes) {
    const [name, anchor = ''] = hash.replace(/^#/, '').split('/');
    if (infoRoutes.includes(name)) return { view: name, anchor, index: 0 };
    const index = rosaryRoutes.indexOf(name);
    return { view: 'rosario', anchor: '', index: index < 0 ? 0 : index };
  }
  const api = { infoRoutes, menuRoutes, routeForHash };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.OratorioNavigation = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
