import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { CONFIGURACION_SORTEO } from '../actions/sorteo';

const INITIAL_STATE = {
  dataForm: []
};

const setData = produce((draft, { data }) => {
  console.log('data reducer', data);
  draft.dataForm.push(data);
});
const dropUsuariosCargados = produce((draft, { index }) => {
  draft.datosApi.splice(index.index, 1);
});

const updateUser = produce((draft, { index }) => {
  draft.datosApi.forEach((element, i) => {
    if (i === index.indice) {
      element.name.first = index.data.firstName;
      element.name.last = index.data.lastName;
      element.email = index.data.email;
    }
  });
});

const reducer = createReducer(INITIAL_STATE, {
  [CONFIGURACION_SORTEO]: setData
});

export default reducer;
