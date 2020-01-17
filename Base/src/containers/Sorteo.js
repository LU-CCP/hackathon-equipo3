import React, { Fragment, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import useForm from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { LOBBY_ADMIN } from '../routes/paths';
import jsonApi from '../services/jsonApi';
import { configuracionSorteo } from '../actions/sorteo';

const Sorteo = () => {
  // const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(true);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  //   const { open, nameObject } = props;
  const { datosApi } = useSelector(({ counter }) => counter);

  //   const handleClose = () => {
  //     props.onClose();
  //   };

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);
  const handleData = useCallback(data => dispatch(configuracionSorteo(data)), [
    dispatch
  ]);

  const onSubmit = async (data, e) => {
    console.log(data);
    // const indice = datosApi.findIndex(element => element.email === nameObject);
    const { status } = await jsonApi().getCrear(data);

    console.log(status);

    if (status === 200) {
      dispatch(push(LOBBY_ADMIN));
    }

    handleData(data);
    // handleClose();
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
          //   defaultValue={open.first}
          fullWidth
          inputRef={register({ required: true, maxLength: 50 })}
          variant='outlined'
        />
        {errors.firstName && errors.firstName.type === 'required' && (
          <span>First name is required.</span>
        )}
        {/* <Checkbox
          checked={checked}
          onChange={handleChange}
          value='primary'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        /> */}

        <TextField
          id='minimo'
          label='Minimo participantes'
          name='minimo'
          type='number'
          InputLabelProps={{
            shrink: true
          }}
          inputRef={register({ required: true, maxLength: 5 })}
          fullWidth
          variant='outlined'
        />
        {errors.minimo && errors.minimo.type === 'required' && (
          <span role='alert'>Minimo de participantes requerido.</span>
        )}
        <TextField
          id='minimoParticipantes'
          label='Minimo participantes'
          type='number'
          name='seleccionados'
          InputLabelProps={{
            shrink: true
          }}
          inputRef={register({ required: true, maxLength: 5 })}
          fullWidth
          variant='outlined'
        />
        {errors.minimo && errors.minimo.type === 'required' && (
          <span role='alert'>Minimo de participantes requerido.</span>
        )}

        <Button type='submit' color='primary' variant='contained'>
          Save
        </Button>
      </form>
    </Fragment>
  );
};

export default Sorteo;
