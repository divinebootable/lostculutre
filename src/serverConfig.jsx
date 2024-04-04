const URL = `https://eupatridae1.pythonanywhere.com/`;

export default {
  // AUTHENTICATION
  SIGNUP: `${URL}signup/`,
  SIGNIN: `${URL}signin`,

  // Contestants
  ALLCONTESTANTS: `${URL}votes/contestants/`,

  //  COMPETITION

  CONTESTANTREGISTRATION: `${URL}votes/contestants/`,
  ADDCOMPETITION: `${URL}votes/elections/`,
  ADDCATEGORY: `${URL}`,
  GETALLCATEGORIES: `${URL}`,
  GETCATEGORIESPERCOMPETITION: `${URL}`,
  GETALLCOMPETITIONS: `${URL}`,
};
