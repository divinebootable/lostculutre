import axios from 'axios';

import api from '../serverConfig';

const register = (
  name,
  gender,
  category,
  stage_name,
  facebook,
  instagram,
  youtube,
  bio,
  photo_d
) => {
  console.log('HERE');
  console.log(name, gender, category, stage_name, facebook, instagram, youtube, bio);
  console.log('HERE');
  return axios
    .post(
      api.CONTESTANTREGISTRATION,
      {
        name,
        gender,
        category,
        stage_name,
        facebook,
        instagram,
        youtube,
        bio,
        photo_d,
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

const ContestantRegistrationService = {
  register,
};

export default ContestantRegistrationService;
