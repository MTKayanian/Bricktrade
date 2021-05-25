const initialState = {
    getPorfileBussiness:'',
    createUserWallet:'',
    fundRaisingAdmin:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN_GET_PROFILE_BUSSINESS':
      return {
        ...state,
        getPorfileBussiness: action.payload
      };

      case 'ADMIN_CREAT_USER_WALLET':
        return {
          ...state,
          createUserWallet: action.payload
        };
      case 'FUND_RAISING_ADMIN_PROPERTY_DETAILS':
        return{
          ...state,
          fundRaisingAdmin:action.payload
        }
    default:
      return state;
  }
};


