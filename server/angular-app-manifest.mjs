
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
    'index.csr.html': {size: 15401, hash: '08ddf6bccd656966f0e03618b1dab5dc9c3ba3a2f1af68aa12cf4a5fe4a7e59b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8833, hash: '24462f9b25cfcf1d61bdb9b7c3d4fa378d1b856fc4b1ec33e771b7dc30d58b19', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18100, hash: 'fcdc33a1c5692a2236dfb1f64fe03a381f3cc14535fda5165f4f3b6362201553', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18100, hash: 'fcdc33a1c5692a2236dfb1f64fe03a381f3cc14535fda5165f4f3b6362201553', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-UNI6UW42.css': {size: 7154, hash: '8tr+6X9Fryc', text: () => import('./assets-chunks/styles-UNI6UW42_css.mjs').then(m => m.default)}
  },
};
