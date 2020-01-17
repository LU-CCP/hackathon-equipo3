import React, { useCallback } from 'react';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import InfoSorteo from '../components/InfoSorteo';
import { INSCRIPCION } from '../routes/paths';

import useStyles from './styles';

const Participantes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <Container className={classes.container} maxWidth={false}>
        <InfoSorteo />
        <Grid className={classes.grid}>
          <Paper className={classes.paper}>
            <Button
              className={classes.button}
              color='primary'
              variant='contained'
              onClick={handleNavigate(INSCRIPCION)}
            >
              Inscripcion
            </Button>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Participantes;
