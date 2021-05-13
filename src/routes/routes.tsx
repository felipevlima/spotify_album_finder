import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/pages/Home/home';
import Layout from 'src/components/Layout/Layout';

export const history = createBrowserHistory();

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
