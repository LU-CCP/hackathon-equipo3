import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    configuracionSorteo: ['data'],
    setUserList: ['data']
  },
  {
    prefix: 'SORTEO/'
  }
);

const { configuracionSorteo, setUserList } = Creators;

const { CONFIGURACION_SORTEO, SET_USER_LIST } = Types;

export {
  configuracionSorteo,
  CONFIGURACION_SORTEO,
  setUserList,
  SET_USER_LIST
};
