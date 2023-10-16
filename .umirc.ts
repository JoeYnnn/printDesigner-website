import { defineConfig } from 'umi';

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
});
