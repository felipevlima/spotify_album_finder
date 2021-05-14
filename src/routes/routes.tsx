import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/pages/Home/home';
import Layout from 'src/components/Layout/Layout';
import AlbumInfo from 'src/pages/AlbumInfo/albuminfo';

export const history = createBrowserHistory();

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={AlbumInfo} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
