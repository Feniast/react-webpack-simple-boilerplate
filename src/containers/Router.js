import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../views/About';
import Home from '../views/Home';
import NoMatch from '../views/NoMatch';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Router;
