/* eslint-disable arrow-body-style */
import axios from 'axios';

import api from '../../serverConfig';

const addCompetition = (name, start_date, end_date) => {
  console.log(name, start_date, end_date);
  return axios
    .post(api.ADDCOMPETITION, {
      name,
      start_date,
      end_date,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

const getAllCompetitions = () => {
  // const AUTH_TOKEN = localStorage.getItem('authToken');
  // const config = {
  //   headers: {
  //     authorization: `Bearer ${AUTH_TOKEN}`,
  //   },
  // };
  return axios
    .get(api.GETALLCOMPETITIONS)
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
