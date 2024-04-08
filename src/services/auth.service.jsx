import axios from 'axios';

import api from '../serverConfig';

const signup = (first_name, last_name, email, password) => {
  console.log(first_name, last_name, email, password);
  return axios
    .post(api.SIGNUP, {
      first_name,
      last_name,
      email,
      password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

const login = (email, password) => {
  console.log(email, password);
  const loginBody = {
    email,
    password,
  };

  return axios
    .post(api.SIGNIN, loginBody)
    .then((res) => {
      console.log('LOGIN DATA');
      console.log(res);
      localStorage.setItem('userToken', res.data.token);
      localStorage.setItem('userData', JSON.stringify(res.data.user_info));
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

const AuthService = {
  signup,
  login,
};

export default AuthService;
