import AdminPropertyApi from "../api/AdminPropertyApi";




export function FundRaisingAdminPropertyDetailsAction(token, propertyId) {
    return async function(dispatch) {
      try {
        let response = await AdminPropertyApi.FundRaisingAdminPropertyDetailsApi(token, propertyId);
        dispatch({
          type: 'FUND_RAISING_ADMIN_PROPERTY_DETAILS',
          payload:response.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };

  }