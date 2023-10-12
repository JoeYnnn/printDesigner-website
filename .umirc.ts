import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'indexPage' },
    { path: '/casePage', component: 'casePage' },
    { path: '/docPage', component: 'docPage' },
    { path: '/sourcePage', component: 'sourcePage' },
    { path: '/aboutPage', component: 'aboutPage' },
  ],
  npmClient: 'yarn',
  chainWebpack(memo, { env, webpack }) {
    memo.module
      .rule('markdown')
      .test(/\.md$/)
      .use('markdown-loader')
      .loader('markdown-loader')
      .end();
  },
});
