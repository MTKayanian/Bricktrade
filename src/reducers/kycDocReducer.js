const initialState = {
  KYCDocSave:'',
  KYCDocSubmit:'',
  KYCGetSaveData:'',
  KYCUpdateProfile:'',
  KYCCloseAccount:''
};

export default (state = initialState, action) => {
switch (action.type) {
  case 'KYC_DOC_SAVE':
    return {
      ...state,
      KYCDocSave: action.payload
    };
    case 'KYC_DOC_SUBMIT':
      return {
        ...state,
        KYCDocSubmit: action.payload
      };
      case 'KYC_GET_SAVE_DATE':
      return {
        ...state,
        KYCGetSaveData: action.payload
      };
      case 'KYC_UPDATE_PROFILE':
        return {
          ...state,
          KYCUpdateProfile: action.payload
        };
        case 'KYC_CLOSE_ACCOUNT':
        return {
          ...state,
          KYCCloseAccount: action.payload
        };

        

   default:
    return state;
}
};
