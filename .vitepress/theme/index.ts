// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import 'virtual:uno.css';
import '@bprogress/core/css';
import { BProgress } from '@bprogress/core';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // const inBrowser = typeof window !== 'undefined';
    // if (inBrowser) {
    BProgress.configure({ showSpinner: false });
    router.onBeforeRouteChange = () => {
      BProgress.start(); // 开始进度条
    };
    router.onAfterRouteChange = () => {
      BProgress.done(); // 停止进度条
    };
    // }
  },
} satisfies Theme;
