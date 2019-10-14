import { MenuTheme } from 'antd/lib/menu/MenuContext';
import { BarChartOutline } from '@ant-design/icons';
import logo from '@/assets/logo.svg';

export type ContentWidth = 'Fluid' | 'Fixed';
export interface DefaultSettings {
  /**
   * theme for nav menu
   */
  navTheme: MenuTheme;
  /**
   * primary color of ant design
   */
  primaryColor: string;
  /**
   * nav menu position: `sidemenu` or `topmenu`
   */
  layout: 'sidemenu' | 'topmenu';
  /**
   * layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
   */
  contentWidth: ContentWidth;
  /**
   * sticky header
   */
  fixedHeader: boolean;
  /**
   * auto hide header
   */
  autoHideHeader: boolean;
  /**
   * sticky siderbar
   */
  fixSiderbar: boolean;
  menu: { locale: boolean };
  title: string;
  pwa: boolean;
  // Your custom iconfont Symbol script Url
  // eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js
  // 注意：如果需要图标多色，Iconfont 图标项目里要进行批量去色处理
  // Usage: https://github.com/ant-design/ant-design-pro/pull/3517
  iconfontUrl: string;
  colorWeak: boolean;
}

export default {
  navTheme: 'dark',
  primaryColor: '#1890FF',
  layout: 'sidemenu',
  contentWidth: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSiderbar: false,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: '易佰数据',
  pwa: false,
  iconfontUrl: '',
  logo,
  route: {
    path: '/',
    routes: [
      {
        path: '/',
        name: 'welcome',
        icon: 'barchart',
        routes: [
          {
            path: '/welcome',
            name: 'one',
            icon: '/favicon.png',
            routes: [
              {
                path: '/welcome/welcome',
                name: 'two',
                icon: 'smile',
                exact: true,
              },
            ],
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
} as DefaultSettings;
