

const initialState = {
    propertiesData: undefined,
    propertyDetail:undefined,
    allData:undefined,
    totalProducts:undefined,
    totalItems:undefined,
    loading: false
};

export default (state = initialState, action) => {
    console.log("action")
    console.log(action)
    switch (action.type) {

        case "DATA_LODDER":
            return {
                ...state,
                loading: true
            };
   case "GET_PROPERTY_FILTER":
       return{
           ...state,
           propertiesData:action.data.products,
           totalItems:action.data.totalItems,
           loading:false
       }
        case "GET_PROPERTY_SUCCESS":
            return {
                ...state,
                allData:action.data.products,
                propertiesData: action.data.products,
                totalProducts:action.data.totalProducts,
                loading: false
            };
            case "GET_PROPERTY_DETAIL_SUCCESS":
                return {
                    ...state,
                    propertyDetail: action.data,
                    loading: false
                };
            

        default:
            return state;
    }
};
