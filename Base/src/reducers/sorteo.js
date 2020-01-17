import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { CONFIGURACION_SORTEO, SET_USER_LIST } from '../actions/sorteo';

const INITIAL_STATE = {
  dataForm: [],
  userList: []
};

const setData = produce((draft, { data }) => {
  console.log('data reducer', data);

  draft.dataForm.push(data);
});
const setDataUser = produce((draft, { data }) => {
  console.log('data user reducer', data);
  draft.userList = data;
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
  [CONFIGURACION_SORTEO]: setData,
  [SET_USER_LIST]: setDataUser
});

export default reducer;
