// import * as types from "./actionTypes";
import propertyApi from "../api/propertyApi";

export function getLodding() {
    return {
        type: 'DATA_LODDER',
    };
}

export function getAllPropertyList(data) {
    return {
        type: 'PROPERTY_SUCCESS',
        data
    };
}
 
export function getAllPropertiesList(data) {

    return async function (dispatch) {

        dispatch(getLodding());

        
            // let data = await marketPlaceApi.getAllProperties(limit, skip);
            // dispatch(getAllPropertyList(data));
            propertyApi.getAllProperties(data)
            .then(
                ({data})=> dispatch(getAllPropertyList(data))
            )
        .catch (err=> console.error("ERROR=>", err)) 

    };
} 



export function userPropertyDetailsAction() {
    return async function(dispatch) {
      try {
        let response = await propertyApi.userPropertyDetailsApi();
        dispatch({
          type: 'USER_PROPERTY_DETAILS',
          payload:response.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };
  
  }

  export function addInvestmentTermsAction(data) {
    console.log("addInvestmentTermsAction******",data);
  
    return async function(dispatch) {
      try {
        let response = await propertyApi.addInvestmentTermsApi(data);
        dispatch({
          type: 'ADD_INVESTMENT_TERMS',
          payload:response.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };

  }

  export function addInvestmentBenefitsAction(data) {
    return async function(dispatch) {
      try {
        let response = await propertyApi.addInvestmentBenefitsApi(data);
        dispatch({
          type: 'ADD_INVESTMENT_BENEFITS',
          payload:response.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };

  }


  export function addWalletAddressAction() {
    return async function(dispatch) {
      try {
        let response = await propertyApi.addWalletAddressApi();
        dispatch({
          type: 'ADD_WALLET_ADDRESS',
          payload:response.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };

  }

  export function addTokenSaleDurationAction(data) {
    console.log("addTokenSaleDurationAction******",data);
    return async function(dispatch) {
      try {
        let response = await propertyApi.addTokenSaleDurationApi(data);
        dispatch({
          type: 'ADD_TOKEN_SALE_DURATION',
          payload:response.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };
  }
  
  
  export function addRequiredDocumentsAction(data) {
    console.log("addRequiredDocumentsAction******",data);
    return async function(dispatch) {
      try {
        let response = await propertyApi.addRequiredDocumentsApi(data);
        dispatch({
          type: 'ADD_REQUIRED_DOCUMENTS',
          payload:response.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };
  }
  
  export function FundRaisingUserPropertyDetailsAction(token, propertyId) {
    return async function(dispatch) {
      try {
        let response = await propertyApi.FundRaisingUserPropertyDetailsApi(token, propertyId);
        dispatch({
          type: 'FUND_RAISING_USER_PROPERTY_DETAILS',
          payload:response.data
        });
      } catch (err) {
        console.error('ERROR=>', err);
        return err;
        // Handle errors here
      }
    };
  
  }