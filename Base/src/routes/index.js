import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Counter, Home } from '../containers';

import { ROOT, PARTICIPANTES, INSCRIPCION } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={PARTICIPANTES} component={About} />
    <Route exact path={INSCRIPCION} component={Counter} />
  </Switch>
);

export default Routes;
