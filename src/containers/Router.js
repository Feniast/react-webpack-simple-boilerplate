import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../views/About';
import Home from '../views/Home';
import NoMatch from '../views/NoMatch';
import Nav from './Nav';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
