import axios from 'axios';

import api from '../../serverConfig';

const addCategory = (name, voting_name, voting_image, election) => {
  console.log(name, voting_name, voting_image, election);
  return axios
    .post(
      api.SIGNUP,
      {
        name,
        voting_name,
        voting_image,
        election,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data;',
          // 'Authorization': `Basic ${token}`
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

const CategoryService = {
  addCategory,
};

export default CategoryService;
