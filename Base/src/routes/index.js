import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Root,
  Sorteo,
  LobbyAdmin,
  Participantes,
  Inscripcion,
  Ganador,
  Lobby,
  SorteoFutbol,
  FormFutbol
} from '../containers';

import {
  ROOT,
  HOME,
  SORTEO,
  LOBBY_ADMIN,
  PARTICIPANTES,
  INSCRIPCION,
  GANADOR,
  LOBBY,
  SORTEO_FUTBOL,
  FORM_FUTBOL
} from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={HOME} component={Home} />
    <Route exact path={SORTEO} component={Sorteo} />
    <Route exact path={LOBBY_ADMIN} component={LobbyAdmin} />
    <Route exact path={PARTICIPANTES} component={Participantes} />
    <Route exact path={INSCRIPCION} component={Inscripcion} />
    <Route exact path={GANADOR} component={Ganador} />
    <Route exact path={LOBBY} component={Lobby} />
    <Route exact path={SORTEO_FUTBOL} component={SorteoFutbol} />
    <Route exact path={FORM_FUTBOL} component={FormFutbol} />
  </Switch>
);

export default Routes;
