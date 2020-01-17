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

  return {
    getCrear,
    getUsers,
    getSorteo,
    addUsers
  };
};

export default createApi;
