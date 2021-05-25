//For login (boolean)
export const userLoginAction = payload => dispatch => {
  dispatch({
    type: "USER_LOGIN_ACTION",
    payload: payload
  });
};
//For role (business/personal)
export const userRoleAction = payload => dispatch => {
  dispatch({
    type: "USER_ROLE",
    payload: payload
  });
};
//For user id
export const userIdAction = payload => dispatch => {
  dispatch({
    type: "USER_ID",
    payload: payload
  });
};
//for sigupData
export const SignupData = payload => dispatch => {
  dispatch({
    type: "SignupData",
    payload: payload
  });
};
//For user detail object on signin
export const userDetailAction = payload => dispatch => {
  dispatch({
    type: "USER_DETAIL",
    payload: payload
  });
};
//user register detail
