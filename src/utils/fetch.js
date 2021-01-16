import axios from 'axios';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const fetch = async (method, path, data) => {
  let response;
  if (method === 'get') {
    response = await axios[method](path, axiosConfig);
  } else if (method === 'post') {
    response = await axios[method](path, data, axiosConfig);
  }
  return response;
};

export default fetch;
