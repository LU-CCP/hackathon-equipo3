import React, { useCallback } from 'react';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { SORTEO } from '../routes/paths';

import useStyles from './styles';

const Ganador = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <Container className={classes.container} maxWidth={false}>
        <Grid className={classes.grid}>
          <Paper className={classes.paper}>
            <Button
              className={classes.button}
              color='primary'
              variant='contained'
              onClick={handleNavigate(SORTEO)}
            >
              Ganador
            </Button>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Ganador;
