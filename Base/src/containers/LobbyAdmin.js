import React, { useCallback, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';

import InfoSorteo from '../components/InfoSorteo';
import ListaUsers from '../components/listaUsers';

import useStyles from './styles';

const LobbyAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <InfoSorteo />
      <ListaUsers />
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
