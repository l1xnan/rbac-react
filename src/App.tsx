import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import defaultSettings from '@/layouts/defaultSettings';
import styles from '@/styles/app.m.less';
import RightContent from '@/components/GlobalHeader/RightContent';

import BasicLayout, {
  DefaultFooter,
  PageHeaderWrapper,
  SettingDrawer,
} from '@ant-design/pro-layout';

import customMenu from './routes';

const App: React.FC = () => {
  const [collapsed, handleMenuCollapse] = useState<boolean>(true);
  const [settings, setSettings] = useState({});
  return (
    <BrowserRouter>
      <BasicLayout
        collapsed={collapsed}
        onCollapse={handleMenuCollapse}
        {...defaultSettings}
        {...settings}
        footerRender={false}
        menuItemRender={(menuItemProps, defaultDom) => {
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        rightContentRender={rightProps => <RightContent {...rightProps} />}

        // menuDataRender={() => customMenu}
        // menuItemRender={(menuItemProps, defaultDom) =>
        //   menuItemProps.isUrl ? defaultDom : <a>open {defaultDom}</a>
        // }
      >
        {/* <PageHeaderWrapper>Hello World</PageHeaderWrapper> */}
        <Switch>
          <Route exact path="/">
            <div className={styles.app}>
              <header className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route exact path="/charts/chart1">
            123
          </Route>
        </Switch>
      </BasicLayout>
      <SettingDrawer
        settings={settings}
        onSettingChange={config => setSettings(config)}
      />
    </BrowserRouter>
  );
};

export default App;
