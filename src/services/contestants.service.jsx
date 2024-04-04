import axios from 'axios';

import api from '../serverConfig';

const getTotalNumberOfContestants = async () => {
  const AUTH_TOKEN = localStorage.getItem('authToken');
  const config = {
    headers: {
      authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };
  const response = await axios.get(api.ALLCONTESTANTS, config);
  return response.data;
};

const ContestantService = {
  getTotalNumberOfContestants,
};

export default ContestantService;
