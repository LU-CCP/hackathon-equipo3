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

const InfoSorteo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { dataForm } = useSelector(({ sorteo }) => sorteo);

  console.log('dataform ', dataForm);
  useMount(async () => {
    const { data } = await jsonApi().getSorteo();

    dispatch(configuracionSorteo(data[0]));
    console.log(data);
  });

  return (
    <Container className={classes.container} maxWidth={false}>
      <h1>Informacion Sorteo</h1>
      <List className={classes.List}>
        {dataForm.map(({ nombre_sorteo, minimo_participantes }) => (
          <ListItem className={classes.List} key={nombre_sorteo}>
            <ListItem alignItems='flex-start'>
              <ListItemText
                primary={`${nombre_sorteo}${' '}${minimo_participantes}`}
              />
              <ListItem />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default InfoSorteo;
