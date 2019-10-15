import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import { hot } from 'react-hot-loader';
import Home from '@/pages/home';
import Chart1 from '@/pages/charts/chart1';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/charts/chart1">
            <Chart1 />
          </Route>
        </Switch>
      </BasicLayout>
    </BrowserRouter>
  );
};

export default hot(module)(App);
