import React, { useCallback, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import { GANADOR } from '../routes/paths';
import InfoSorteo from '../components/InfoSorteo';
import ListaUsers from '../components/listaUsers';
import CodeQR from '../components/QRcode';
import { setGanador } from '../actions/sorteo';

import useStyles from './styles';

const LobbyAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userList } = useSelector(({ sorteo }) => sorteo);

  const handleGoBack = useCallback(() => {
    dispatch(setGanador(userList));
    dispatch(push(GANADOR));
  }, [dispatch, userList]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <InfoSorteo />
      <ListaUsers />
      <CodeQR />
      <Button
        className={classes.button}
        variant='contained'
        onClick={handleGoBack}
      >
        START
      </Button>
    </Container>
  );
};

export default LobbyAdmin;
