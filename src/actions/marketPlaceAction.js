// import * as types from "./actionTypes";
import marketPlaceApi from "../api/marketPlaceApi";


export function getLodding() {
    return {
        type: 'DATA_LODDER',
    };
}

export function getAllPropertyList(data) {
    return {
        type: 'GET_PROPERTY_SUCCESS',
        data
    };
}
export function getFilterProperty(data) {
    return {
        type:'GET_PROPERTY_FILTER',
        data
    };
}
export function getFilteredProperties(data){
    return async function (dispatch) {
     console.log(data)
        dispatch(getLodding());

        
//             // let data = await marketPlaceApi.getAllProperties(limit, skip);
//             // dispatch(getAllPropertyList(data));
           dispatch(getFilterProperty(data));
                
          
    

    };
}
 
export function getAllPropertiesList(limit, skip) {

    return async function (dispatch) {

        dispatch(getLodding());

        
            // let data = await marketPlaceApi.getAllProperties(limit, skip);
            // dispatch(getAllPropertyList(data));
            marketPlaceApi.getAllProperties(limit, skip)
            .then(
                ({data})=> dispatch(getAllPropertyList(data))
            )
        .catch (err=> console.error("ERROR=>", err)) 

    };
} 


export function getPropertyDetailList(data) {
    return {
        type: 'GET_PROPERTY_DETAIL_SUCCESS',
        data
    };
}


export function getPropertyDetail(id) {
     return async function (dispatch) {
        dispatch(getLodding());
            marketPlaceApi.getPropertyDetail(id)
            .then(
                ({data})=> dispatch(getPropertyDetailList(data))
            )
        .catch (err=> console.error("ERROR=>", err)) 

    };
} 

