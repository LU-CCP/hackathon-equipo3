import { create } from 'apisauce';

const config = {
  baseURL: 'http://10.10.11.51:4000/'
};

const createApi = () => {
  const { get, post } = create(config);

  const getCrear = data =>
    // get('api/?format=pretty&results=50&inc=name,email,login,picture&noinfo');
    post('crear', data);

  return {
    getCrear
  };
};

export default createApi;
