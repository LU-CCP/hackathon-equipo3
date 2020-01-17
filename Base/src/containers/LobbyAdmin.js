import React, { useCallback, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';

import InfoSorteo from '../components/InfoSorteo';
import ListaUsers from '../components/listaUsers';
import Header from '../components/Header';

import useStyles from './styles';

const LobbyAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <InfoSorteo />
      </div>
      <div>
        <Container className={classes.container} maxWidth={false}>
          <ListaUsers />
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
            onClick={handleGoBack}
          >
            START
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default LobbyAdmin;
