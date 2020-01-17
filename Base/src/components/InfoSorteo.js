import React from 'react';
import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

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

    dispatch(configuracionSorteo(data));
    console.log(data);
  });

  return (
    <Container className={classes.container} maxWidth={false}>
      <font face='Comic sans MS' size=' 7'>
        Configuracion del Sorteo
      </font>
      <h1 />
      <List className={classes.List}>
        {dataForm &&
          dataForm.map(({ nombre_sorteo, minimo_participantes }) => (
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
