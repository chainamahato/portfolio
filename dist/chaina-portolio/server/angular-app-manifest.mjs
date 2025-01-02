
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
    'index.csr.html': {size: 15401, hash: 'b31b90cf89026aaca4035d52f5ecaf26b8d4bc849ac25ece1bb2da8b02239135', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8833, hash: '205517eb2e7e73936b64edafd65c2fb250d50b5b46109794c52070947aa432b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18100, hash: 'cedbb6318c89c083ace170ce9b224a279dbcc2e7abd1521076f3a494e1af695b', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18100, hash: 'cedbb6318c89c083ace170ce9b224a279dbcc2e7abd1521076f3a494e1af695b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-UNI6UW42.css': {size: 7154, hash: '8tr+6X9Fryc', text: () => import('./assets-chunks/styles-UNI6UW42_css.mjs').then(m => m.default)}
  },
};
