import React, { useCallback } from 'react';
import { Button, Container, Grid, Paper, Hidden } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import BackgroundLogo from '../resources/Background_logo.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { SORTEO } from '../routes/paths';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <Header />
      <img src={BackgroundLogo} style={{ position: 'relative', left: 580 }} />

      <Button
        className={classes.button}
        color='primary'
        variant='contained'
        onClick={handleNavigate(SORTEO)}
        style={{ position: 'relative', left: 430, top: 120 }}
      >
        Let's Go
      </Button>
      <Footer />
    </div>
  );
};

export default Home;
