import { create } from 'apisauce';

const config = {
  baseURL: 'http://10.10.11.51:4000/'
};

const createApi = () => {
  const { get, post } = create(config);

  const getCrear = data => post('crear', data);
  const getUsers = () => get('users');
  const getSorteo = () => get('getSorteo');
  const addUsers = data => post('users/add', data);
  const ganadores = data => post('ganadores', { nombre: data });
  const getQR = () => get('getQR');
  const getGanador = () => get('ganadores/set');

  return {
    getCrear,
    getUsers,
    getSorteo,
    addUsers,
    ganadores,
    getQR,
    getGanador
  };
};

export default createApi;
