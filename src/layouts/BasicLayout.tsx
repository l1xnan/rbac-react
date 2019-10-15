import React, { useState } from 'react';
import RightContent from '@/components/GlobalHeader/RightContent';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import {
  BasicLayout as BasicLayoutComponents,
  BasicLayoutProps as BasicLayoutComponentsProps,
  MenuDataItem,
  Settings,
  SettingDrawer,
} from '@ant-design/pro-layout';
import { menus, route } from './settings';

import { Home } from '@ant-design/icons';
import defaultSettings from './defaultSettings';

export interface BasicLayoutProps extends BasicLayoutComponentsProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  settings: Settings;
}

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
  return menuList.map(item => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : [],
    };
    // return Authorized.check(item.authority, localItem, null) as MenuDataItem;
    return localItem;
  });
};

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const [collapsed, handleMenuCollapse] = useState<boolean>(true);
  const [settings, setSettings] = useState({});

  return (
    <>
      <BasicLayoutComponents
        logo={logo}
        // collapsed={collapsed}
        // onCollapse={handleMenuCollapse}
        // menuDataRender={props => menus}
        menuItemRender={(menuItemProps, defaultDom) => {
          return menuItemProps.isUrl ? (
            defaultDom
          ) : (
            <Link to={menuItemProps.path}>{defaultDom}</Link>
          );
        }}
        route={route}
        // breadcrumbRender={(routers = []) => {
        //   console.log(routers);
        //   return [
        //     {
        //       path: '/',
        //       breadcrumbName: <Home />,
        //     },
        //     ...routers,
        //   ];
        // }}
        // itemRender={(route, params, routes, paths) => {
        //   console.log(route, routes);
        //   const first = routes.indexOf(route) === 0;
        //   return first ? (
        //     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        //   ) : (
        //     <span>{route.breadcrumbName}</span>
        //   );
        // }}
        
        rightContentRender={rightProps => <RightContent {...rightProps} />}
        footerRender={false}
        // {...defaultSettings}
        // {...props}
        {...settings}
      >
        {props.children}
      </BasicLayoutComponents>
      <SettingDrawer
        settings={settings}
        onSettingChange={config => setSettings(config)}
      />
    </>
  );
};

export default BasicLayout;
