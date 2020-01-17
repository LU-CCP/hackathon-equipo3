import React, { Fragment, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import useForm from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Grid, Paper } from '@material-ui/core';

import Header from '../components/Header';
import InfoSorteo from '../components/InfoSorteo';
import { LOBBY_ADMIN } from '../routes/paths';
import jsonApi from '../services/jsonApi';
import { configuracionSorteo } from '../actions/sorteo';

import useStyles from './styles';

const Inscripcion = () => {
  // const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(true);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  //   const { open, nameObject } = props;
  const { datosApi } = useSelector(({ counter }) => counter);

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);
  const handleData = useCallback(data => dispatch(configuracionSorteo(data)), [
    dispatch
  ]);

  const onSubmit = async (data, e) => {
    console.log(data);
    // const indice = datosApi.findIndex(element => element.email === nameObject);
    const { status } = await jsonApi().addUsers(data);

    console.log(status);

    if (status === 200) {
      dispatch(push(LOBBY_ADMIN));
    }

    handleData(data);
    // handleClose();
  };

  const classes = useStyles();

  return (
    <div>
      <Header />
      <Fragment>
        <form className='App-Form' onSubmit={handleSubmit(onSubmit)}>
          <Container className={classes.container} maxWidth={false}>
            <Grid className={classes.grid}>
              <Paper className={classes.paperForm}>
                <DialogTitle id='form-dialog-title'>
                  <InfoSorteo />
                </DialogTitle>

                <TextField
                  autoFocus
                  margin='dense'
                  id='firstName'
                  name='nombre'
                  label='Usuario Participante '
                  type='text'
                  //   defaultValue={open.first}
                  fullWidth
                  inputRef={register({ required: true, maxLength: 50 })}
                  variant='outlined'
                />

                <Button type='submit' color='primary' variant='contained'>
                  Save
                </Button>
              </Paper>
            </Grid>
          </Container>
        </form>
      </Fragment>
    </div>
  );
};

export default Inscripcion;
