import logo from '@/assets/logo.svg';
import styles from '@/styles/app.m.less';
import React from 'react';
const Home: React.SFC<any> = () => (
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
        Learn React!!
      </a>
    </header>
  </div>
);
export default Home;
