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

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';
import { setUserList } from '../actions/sorteo';

const ListaUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { userList } = useSelector(({ sorteo }) => sorteo);

  console.log('dataform ', userList);
  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    dispatch(setUserList(data));
    console.log('listausers', data);
  });

  return (
    <Container className={classes.container} maxWidth={false}>
      <h1>Lista usuarios</h1>
      <List className={classes.List}>
        {userList.map(({ nombre }) => (
          <ListItem className={classes.List} key={nombre}>
            <ListItem alignItems='flex-start'>
              <ListItemText primary={`${nombre}`} />
              <ListItem />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListaUsers;
