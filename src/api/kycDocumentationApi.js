import { getItem } from "../utils/localStore";
import { Base_Url } from "../app.constant";
import axios from "axios";
let kyc = '';

if (getItem("role") == 'business'){
  kyc = 'businessKYC'
}
else if (getItem("role") == 'individual'){
  kyc = 'individualKYC'
}


export const kycDocSaveApi = async data => {
  console.log("data from api ", data);
  let TOKEN = getItem("accessToken");
  // const ajaxRequestHeaders = new Headers({
  //   "Content-Type": "multipart/form-data",
  //   authorization: TOKEN
  // });
  
  let response = await axios({
    url: `${Base_Url}/${kyc}/updateDocumentSave`,
    method: "post",
    headers: {      
      authorization:TOKEN,
      "content-type": "multipart/form-data" ,
      Accept: 'application/json'
    },
    data
  });
  return response;
};


export const kycDocSubmitApi = async data  => {
  let TOKEN = getItem("accessToken");
  // const ajaxRequestHeaders = new Headers({
  //   "Content-Type": "multipart/form-data",
  //   authorization: TOKEN
  // });
  
  let response = await axios({
    url: `${Base_Url}/${kyc}/updateDocumentSubmit`,
    method: "post",
    headers: {      
      authorization:TOKEN,
      "Content-Type": "application/json",
      Accept: "application/json",
  },
  data
  });
  return response
};



export const kycSavedDataApi = async data  => {
  let TOKEN = getItem("accessToken");
  // const ajaxRequestHeaders = new Headers({
  //   "Content-Type": "multipart/form-data",
  //   authorization: TOKEN
  // });
  
  let response = await axios({
    url: `${Base_Url}/user/getSavedData`,
    method: "get",
    headers: {      
      authorization:TOKEN,
      "Content-Type": "application/json",
      Accept: "application/json",
  }
  });
  return response;
};



export const kycProfileApi = async data  => {
  let TOKEN = getItem("accessToken");
  // const ajaxRequestHeaders = new Headers({
  //   "Content-Type": "multipart/form-data",
  //   authorization: TOKEN
  // });
  
   let response = await axios({
    url: `${Base_Url}/${kyc}/updateProfile`,
    method: "post",
    headers: {      
      authorization:TOKEN,
      "Content-Type": "application/json",
      Accept: "application/json",
  },
  data
  });
  return response;
};




export const KycCloseAcountApi = async () => {
  let TOKEN = getItem("accessToken");
  // const ajaxRequestHeaders = new Headers({
  //   "Content-Type": "multipart/form-data",
  //   authorization: TOKEN
  // });
  
   let response = await axios({
    url: `${Base_Url}/user/closeAcountRequest`,
    method: "post",
    headers: {      
      authorization:TOKEN,
      "Accept": "application/json",
  }
  });
  return response;
};