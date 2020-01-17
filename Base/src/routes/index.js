import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Counter, Home, Root, Sorteo, LobbyAdmin } from '../containers';

import {
  ROOT,
  ABOUT,
  COUNTER,
  HOME,
  SORTEO,
  LOBBY_ADMIN,
  PARTICIPANTES,
  INSCRIPCION
} from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Root} />
    <Route exact path={HOME} component={Home} />
    <Route exact path={SORTEO} component={Sorteo} />
    <Route exact path={LOBBY_ADMIN} component={LobbyAdmin} />
    <Route exact path={ABOUT} component={About} />
    <Route exact path={COUNTER} component={Counter} />
    <Route exact path={PARTICIPANTES} component={About} />
    <Route exact path={INSCRIPCION} component={Counter} />
  </Switch>
);

export default Routes;
