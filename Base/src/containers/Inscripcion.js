import React, { Fragment, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { LOBBY } from '../routes/paths';
import jsonApi from '../services/jsonApi';
import { configuracionSorteo } from '../actions/sorteo';

const Inscripcion = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleData = useCallback(data => dispatch(configuracionSorteo(data)), [
    dispatch
  ]);

  const onSubmit = async data => {
    console.log(data);
    const { status } = await jsonApi().addUsers(data);

    console.log(status);

    if (status === 200) {
      dispatch(push(LOBBY));
    }

    handleData(data);
  };

  return (
    <Fragment>
      <form className='App-Form' onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id='form-dialog-title'>Configuracion Sorteo</DialogTitle>

        <TextField
          autoFocus
          margin='dense'
          id='firstName'
          name='nombre'
          label='Nombre Creador '
          type='text'
          fullWidth
          inputRef={register({ required: true, maxLength: 50 })}
          variant='outlined'
        />

        <Button type='submit' color='primary' variant='contained'>
          Save
        </Button>
      </form>
    </Fragment>
  );
};

export default Inscripcion;
