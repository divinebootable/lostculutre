import axios from 'axios';

import api from '../serverConfig';

const getTotalNumberOfContestants = async () => {
  const AUTH_TOKEN = localStorage.getItem('userToken');
  const config = {
    headers: {
      authorization: `token ${AUTH_TOKEN}`,
    },
  };
  const response = await axios.get(api.ALLCONTESTANTS, config);
  return response.data;
};

const ContestantService = {
  getTotalNumberOfContestants,
};

export default ContestantService;
