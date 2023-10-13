import { defineConfig } from 'umi';
import RemarkHtml from 'remark-html';
import remark from 'remark';

export default defineConfig({
  routes: [
    { path: '/', component: 'indexPage' },
    { path: '/casePage', component: 'casePage' },
    { path: '/docPage', component: 'docPage' },
    { path: '/sourcePage', component: 'sourcePage' },
    { path: '/aboutPage', component: 'aboutPage' },
  ],
  title: '打印模版设计器',
  npmClient: 'yarn',
  chainWebpack(memo, { env, webpack }) {
    memo.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('remark-loader')
      .loader('remark-loader')
      .end();
  },
});
