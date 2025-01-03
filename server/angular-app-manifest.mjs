
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
    'index.csr.html': {size: 15401, hash: '4b29eb1f184980807cf3a4eb5e43a1e88dd4d382c386af829ac93fd5c09c912c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8833, hash: '55a92cb717d343e84a78ce629ff5e27c4c949c8f1ed42659a5b7d17b7a0a68de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18099, hash: 'ef109de98bb9417843572f49651eab97763d79bbaf1fe5585e859ab81e8792a8', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18099, hash: 'ef109de98bb9417843572f49651eab97763d79bbaf1fe5585e859ab81e8792a8', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-UNI6UW42.css': {size: 7154, hash: '8tr+6X9Fryc', text: () => import('./assets-chunks/styles-UNI6UW42_css.mjs').then(m => m.default)}
  },
};
