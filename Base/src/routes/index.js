import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Counter, Home, Root, Sorteo, LobbyAdmin } from '../containers';

import { ROOT, ABOUT, COUNTER, HOME, SORTEO, LOBBY_ADMIN } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Root} />
    <Route exact path={HOME} component={Home} />
    <Route exact path={SORTEO} component={Sorteo} />
    <Route exact path={LOBBY_ADMIN} component={LobbyAdmin} />
    <Route exact path={ABOUT} component={About} />
    <Route exact path={COUNTER} component={Counter} />
  </Switch>
);

export default Routes;
