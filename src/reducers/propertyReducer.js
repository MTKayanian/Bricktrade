const initialState = {
  propertiesData: undefined,
  loading: false,
  userPropertyDetails: '',
  addInvestmentTerms: '',
  addInvestmentBenefits: '',
  addWalletAddress: '',
  addTokenSaleDuration: '',
  addRequiredDoucments: '',
  fundRaisinguserPropertyDetails: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_LODDER':
      return {
        ...state,
        loading: true
      };

    case 'PROPERTY_SUCCESS':
      return {
        ...state,
        propertiesData: action.data,
        loading: false
      };

    case 'USER_PROPERTY_DETAILS':
      return {
        ...state,
        userPropertyDetails: action.payload
      };

    case 'ADD_INVESTMENT_TERMS':
      return {
        ...state,
        addInvestmentTerms: action.payload
      };

    case 'ADD_INVESTMENT_BENEFITS':
      return {
        ...state,
        addInvestmentBenefits: action.payload
      };
    case 'ADD_WALLET_ADDRESS':
      return {
        ...state,
        addWalletAddress: action.payload
      };
    case 'ADD_TOKEN_SALE_DURATION':
      return {
        ...state,
        addTokenSaleDuration: action.payload
      };
    case 'ADD_REQUIRED_DOCUMENTS':
      return {
        ...state,
        addRequiredDoucments: action.payload
      };
    case 'FUND_RAISING_USER_PROPERTY_DETAILS':
      return {
        ...state,
        fundRaisinguserPropertyDetails: action.payload
      };

    default:
      return state;
  }
};
