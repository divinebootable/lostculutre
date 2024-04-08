/* eslint-disable arrow-body-style  */
import axios from 'axios';

import api from '../../serverConfig';

const addCategory = (name, voting_name, voting_image, election) => {
  console.log(name, voting_name, voting_image, election);
  const AUTH_TOKEN = localStorage.getItem('userToken');
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
          authorization: `token ${AUTH_TOKEN}`,
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

const getAllCategories = () => {
  const AUTH_TOKEN = localStorage.getItem('userToken');
  const config = {
    headers: {
      authorization: `token ${AUTH_TOKEN}`,
    },
  };
  return axios
    .get(api.GETALLCATEGORIES, config)
    .then((res) => {
      console.log('CATEGORY');
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

const CategoryService = {
  addCategory,
  getAllCategories,
};

export default CategoryService;
