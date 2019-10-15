import { Setting, BarChart, RadarChart } from '@ant-design/icons';

export const icons = {
  setting: Setting,
  chart: BarChart,
  monitor: RadarChart,
};

export const route = {
  path: '/',
  routes: [
    {
      path: '/home',
      name: '个人主页',
      icon: 'home',
      exact: true,
    },
    {
      path: '/charts',
      name: '数据图表',
      icon: 'bar-chart',
      routes: [
        {
          path: '/charts/chart1',
          name: '堆叠图',
          exact: true,
        },
      ],
    },
    {
      path: '/monitor',
      name: '监控预计',
      icon: 'monitor',
      routes: [
        {
          path: '/monitor/monitor1',
          name: '堆叠图',
          exact: true,
        },
      ],
    },
    {
      path: '/settings',
      name: '设置管理',
      icon: 'setting',
      routes: [
        {
          path: '/settings/users',
          name: '用户管理',
          exact: true,
        },
      ],
    },
  ],
};

export const menus = [
  {
    path: '/charts',
    name: '数据图表',
    icon: 'bar-chart',
    children: [
      {
        path: '/charts/chart1',
        name: '堆叠图',
        exact: true,
      },
    ],
  },
  {
    path: '/monitor',
    name: '监控预计',
    icon: 'monitor',
    children: [
      {
        path: '/monitor/chart1',
        name: '堆叠图',
        exact: true,
      },
    ],
  },
  {
    path: '/settings',
    name: '设置管理',
    icon: 'setting',
    children: [
      {
        path: '/users',
        name: '用户管理',
        exact: true,
      },
    ],
  },
];
