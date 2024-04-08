/* eslint-disable arrow-body-style */
import axios from 'axios';

import api from '../../serverConfig';

const addCompetition = (name, start_date, end_date) => {
  const AUTH_TOKEN = localStorage.getItem('userToken');
  console.log(name, start_date, end_date);
  return axios
    .post(
      api.ADDCOMPETITION,
      {
        name,
        start_date,
        end_date,
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

const getAllCompetitions = () => {
  const AUTH_TOKEN = localStorage.getItem('userToken');
  const config = {
    headers: {
      authorization: `token ${AUTH_TOKEN}`,
    },
  };
  return axios
    .get(api.GETALLCOMPETITIONS, config)
    .then((res) => {
      console.log('SERVICE');
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

const CompetitionService = {
  addCompetition,
  getAllCompetitions,
};

export default CompetitionService;
