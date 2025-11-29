
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
    'index.csr.html': {size: 450, hash: '93443e679d69244bc889595353a2ac53b7733c555c327a503e36c438be112d60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: '9ddd8910f740b548fec172bfd8a140e39c36c4d05dcd8e8f1a28ea36d0070c03', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10145, hash: 'e6f541513cab96666e3da550ad6e6224ba0499b39f5e4f06c158828489ac2aa1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
