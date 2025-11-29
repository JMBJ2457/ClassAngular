
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ClassAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ClassAngular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 450, hash: 'bbbcfcce5283503b686d7c15534241f90cc4e511807bb81606f48f76d6fe3b7f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: '2f66669d25ae6c9d610a58a6dbf838aa08cc9bf0868ca2285559bc831bd972f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10310, hash: '587b76eac4a17cd84e7e0c13845258470cc9f7fb7195ca6d5be892cf21cf90f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
