// import * as types from "./actionTypes";
import {
  kycDocSaveApi,
  kycDocSubmitApi,
  kycSavedDataApi,
  kycProfileApi,
  KycCloseAcountApi
} from '../api/kycDocumentationApi';

export const savekycDocSaveApi = data => {
  return async function(dispatch) {
    // dispatch(getLodding());

    try {
      let response = await kycDocSaveApi(data);
      console.log('response save********', response);
      dispatch({
        type: 'KYC_DOC_SAVE',
        payload: response.data
      });
      this.props.history.push('/kycPending');
    } catch (e) {
      console.log(e);
    }
  };
};

export const savekycDocSubmitApi = data => {
  return async function(dispatch) {
    // dispatch(getLodding());

    try {
      let response = await kycDocSubmitApi(data);
      console.log('response submit********', response);
      dispatch({
        type: 'KYC_DOC_SUBMIT',
        payload: response.data
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getkycSavedDataApi = () => {
  return async function(dispatch) {
    // dispatch(getLodding());
    try {
      let response = await kycSavedDataApi();
      console.log('response getSaveDataApi********', response);
      dispatch({
        type: 'KYC_GET_SAVE_DATE',
        payload: response.data
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateKycProfileApi = data => {
  return async function(dispatch) {
    // dispatch(getLodding());
    try {
      let response = await kycProfileApi(data);
      console.log('response updateKycProfileApi********', response);
      dispatch({
        type: 'KYC_UPDATE_PROFILE',
        payload: response.data
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const userKycCloseAcountApi = () => {
  return async function(dispatch) {
    // dispatch(getLodding());
    try {
      let response = await KycCloseAcountApi();
      console.log('response KycCloseAcountApi********', response);
      dispatch({
        type: 'KYC_CLOSE_ACCOUNT',
        payload: response.data
      });
    } catch (e) {
      console.log(e);
    }
  };
};
