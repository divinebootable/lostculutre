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

const CompetitionService = {
  addCompetition,
};

export default CompetitionService;
