import React, { useCallback, useState } from 'react';
import {
  Container,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';

import { configuracionSorteo } from '../actions/sorteo';
import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';

const Ganador = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { userList, ganador } = useSelector(({ sorteo }) => sorteo);

  console.log('dataList ', userList);
  useMount(async () => {
    const { data } = await jsonApi().ganadores(ganador);

    // dispatch(configuracionSorteo(data[0]));
    console.log(data);
  });

  return (
    <Container className={classes.container} maxWidth={false}>
      <h1>Informacion Sorteo</h1>
      <List className={classes.List}>
        <ListItem>{ganador}</ListItem>
      </List>
    </Container>
  );
};

export default Ganador;
