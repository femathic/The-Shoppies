import axios from 'axios';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',
  }
};

const fetch = async (method, path, data) => {
  let response;
  if (method === 'get') {
    response = await axios[method](path, axiosConfig)
  } else if (method === 'post') {
    response = await axios[method](path, data, axiosConfig)
  };
  return await response;
};

export default fetch;