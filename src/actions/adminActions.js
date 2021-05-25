import adminApi from '../api/adminApi';


export function adminGetProfileBusinessAction(token, userId) {
  return async function(dispatch) {
    try {
      let response = await adminApi.getProfileBusiness(token, userId);
      dispatch({
        type: 'ADMIN_GET_PROFILE_BUSSINESS',
        payload:response.data.data
      });
    } catch (err) {
      console.error('ERROR=>', err);
      return err;
      // Handle errors here
    }
  };

}

export function adminCreateUserWalletAction(token, userId) {
    return async function(dispatch) {
      try {
        let response = await adminApi.createUserWallet(token, userId);
        dispatch({
          type: 'ADMIN_CREAT_USER_WALLET',
          payload:response.data.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };
}