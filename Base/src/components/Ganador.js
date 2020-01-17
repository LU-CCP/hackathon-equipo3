import React, { useState } from 'react';
import { Container, List, ListItem } from '@material-ui/core';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';
import useStyles from '../containers/styles';

const Ganador = () => {
  const classes = useStyles();

  const [ganador, setGanador] = useState([]);

  useMount(async () => {
    const { data } = await jsonApi().getGanador();

    setGanador(data);
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
