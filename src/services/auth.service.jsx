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
      console.long(res);
    })
    .catch((e) => {
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
    .post(api.SIGNIN, loginBody, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    .then((data) => {
      console.log(data);
      return data;
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
