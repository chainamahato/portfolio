
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://chainamahato.github.io/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://chainamahato.github.io/portfolio/about",
    "route": "/https://chainamahato.github.io/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/https://chainamahato.github.io/portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/https://chainamahato.github.io/portfolio/about"
  }
],
  assets: {
    'index.csr.html': {size: 15401, hash: '08bf01c7ce6919b0dde668b3cf5ce4c997d4c0788d3bb57b174ac2a640c1be4d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8833, hash: '277a64cda658a13a1349acb1535853ea59f6a8822734bc49b42e9652fa847496', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18115, hash: '16e809e264c7962ec7fd59ec6248b12b1e91402636e2561375959bd2fbce3ee4', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18115, hash: '16e809e264c7962ec7fd59ec6248b12b1e91402636e2561375959bd2fbce3ee4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-UNI6UW42.css': {size: 7154, hash: '8tr+6X9Fryc', text: () => import('./assets-chunks/styles-UNI6UW42_css.mjs').then(m => m.default)}
  },
};
