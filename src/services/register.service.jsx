import axios from 'axios';

import api from '../serverConfig';

const register = (name, gender, category, stage_name, facebook, instagram, youtube) => {
  console.log('HERE');
  console.log(name, gender, category, stage_name, facebook, instagram, youtube);
  console.log('HERE');
  return axios
    .post(api.CONTESTANTREGISTRATION, {
      name,
      gender,
      category,
      stage_name,
      facebook,
      instagram,
      youtube,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

const ContestantRegistrationService = {
  register,
};

export default ContestantRegistrationService;
