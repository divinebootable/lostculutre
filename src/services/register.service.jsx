import axios from 'axios';

import api from '../serverConfig';

const register = (name, gender, category, photo_d, stage_name, facebook, youtube, instagram) => {
  console.log(name, gender, category, photo_d, stage_name, facebook, youtube, instagram);
  return axios
    .post(api.CONTESTANTREGISTRATION, {
      name,
      gender,
      category,
      photo_d,
      stage_name,
      facebook,
      youtube,
      instagram,
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
