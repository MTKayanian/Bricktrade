const initialState = {
  details: {},
  isUserLoggedIn: false,
  signupData: null,
  userId: "",
  role: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_ACTION":
      return {
        ...state,
        isUserLoggedIn: action.payload
      };
    case "SignupData":
      return {
        ...state,
        signupData: action.payload
      };
    case "USER_ID":
      return {
        ...state,
        userId: action.payload
      };
    case "USER_ROLE":
      return {
        ...state,
        role: action.payload
      };
    case "USER_VERIFIED":
      return {
        ...state,
        verified: action.payload
      };
    case "USER_DETAIL":
      return {
        ...state,
        details: action.payload
      };
    case "USER_REGISTER_DETAIL":
      return {
        ...state,
        registerUserDetails: action.payload
      };
    default:
      return state;
  }
};
