import React, { useCallback, useState } from 'react';
import {
  Button,
  Container,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';

import InfoSorteo from '../components/InfoSorteo';
import ListaUsers from '../components/listaUsers';

import useStyles from './styles';

const Lobby = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <InfoSorteo />
      <ListaUsers />
    </Container>
  );
};

export default Lobby;
