import { Tooltip } from 'antd';
import React from 'react';

import { QuestionCircle } from '@ant-design/icons';

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
      <Tooltip title={'帮助'}>
        <a
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircle />
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
