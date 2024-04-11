import axios from 'axios';

import api from '../serverConfig';

const buyProduct = (contestant, size, amount, number, gender) => {
  const AUTH_TOKEN = localStorage.getItem('userToken');
  return axios
    .post(
      api.BUYPRODUCT,
      {
        contestant,
        size,
        amount,
        number,
        gender,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data;',
          authorization: `token ${AUTH_TOKEN}`,
        },
      }
    )
    .then((res) => {
      console.log('RES');
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

const ShopService = {
  buyProduct,
};

export default ShopService;
