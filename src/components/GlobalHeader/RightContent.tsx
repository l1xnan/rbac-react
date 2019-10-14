import { Tooltip } from 'antd';
import React from 'react';

import { QuestionCircleFill } from '@ant-design/icons';

import HeaderSearch from '../HeaderSearch';
// import Avatar from './AvatarDropdown';
import styles from './index.m.less';

export type SiderTheme = 'light' | 'dark';
export interface GlobalHeaderRightProps {
  theme?: SiderTheme;
  layout: 'sidemenu' | 'topmenu';
}

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = props => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder={'搜索'}
        dataSource={['123', '125']}
        onSearch={value => {
          console.log('input', value);
        }}
        onPressEnter={value => {
          console.log('enter', value);
        }}
      />
      <Tooltip title={'帮助'}>
        <a
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleFill />
        </a>
      </Tooltip>
      {/* <Avatar /> */}
    </div>
  );
};

export default GlobalHeaderRight;
// connect(({ settings }: ConnectState) => ({
//   theme: settings.navTheme,
//   layout: settings.layout,
// }))(GlobalHeaderRight);
