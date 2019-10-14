/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */


import React, { useEffect,useState } from 'react';
import { GithubFill } from '@ant-design/icons';
import RightContent from '@/components/GlobalHeader/RightContent';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import {
  BasicLayout as BasicLayoutComponents,
  BasicLayoutProps as BasicLayoutComponentsProps,
  MenuDataItem,
  Settings,
} from '@ant-design/pro-layout';
export interface BasicLayoutProps extends BasicLayoutComponentsProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  settings: Settings;
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};
/**
 * use Authorized check all menu item
 */

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
  return menuList.map(item => {
    const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
    // return Authorized.check(item.authority, localItem, null) as MenuDataItem;
    return localItem
  });
};

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { 
    //dispatch, 
    children, settings } = props;
  /**
   * constructor
   */

  useState(() => {
    // if (dispatch) {
    //   dispatch({
    //     type: 'user/fetchCurrent',
    //   });
    //   dispatch({
    //     type: 'settings/getSetting',
    //   });
    // }
  });

  /**
   * init variables
   */
  const handleMenuCollapse = (payload: boolean) =>{

    // dispatch &&
    // dispatch({
    //   type: 'global/changeLayoutCollapsed',
    //   payload,
    // });
  }

  return (
    <BasicLayoutComponents
      logo={logo}
      onCollapse={handleMenuCollapse}
      menuItemRender={(menuItemProps, defaultDom) => {
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => {
        return [
          {
            path: '/',
            breadcrumbName: '主页',
          },
          ...routers,
        ];
      }}
      menuDataRender={menuDataRender}
      rightContentRender={rightProps => <RightContent {...rightProps} />}
      {...props}
      {...settings}
    >
      {children}
    </BasicLayoutComponents>
  );
};

export default BasicLayout

// connect(({ global, settings }: ConnectState) => ({
//   collapsed: global.collapsed,
//   settings,
// }))(BasicLayout);