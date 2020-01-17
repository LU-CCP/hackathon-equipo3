import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    configuracionSorteo: ['data']
  },
  {
    prefix: 'SORTEO/'
  }
);

const { configuracionSorteo } = Creators;

const { CONFIGURACION_SORTEO } = Types;

export { configuracionSorteo, CONFIGURACION_SORTEO };
