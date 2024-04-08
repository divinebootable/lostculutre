const URL = `https://eupatridae1.pythonanywhere.com/`;

export default {
  // AUTHENTICATION
  SIGNUP: `${URL}api/accounts/signup/`,
  SIGNIN: `${URL}api/accounts/login/`,
  GETUSER: `${URL}api/accounts/users/me/`,

  // Contestants
  ALLCONTESTANTS: `${URL}votes/contestants/`,

  //  COMPETITION

  CONTESTANTREGISTRATION: `${URL}votes/contestants/`,
  ADDCOMPETITION: `${URL}votes/elections/`,
  ADDCATEGORY: `${URL}`,
  GETALLCATEGORIES: `${URL}`,
  GETCATEGORIESPERCOMPETITION: `${URL}`,
  GETALLCOMPETITIONS: `${URL}votes/elections/`,
};
