import { getItem } from "../utils/localStore";
import { Base_Url } from '../app.constant';
import axios from "axios";


class marketPlaceApi {

   

    static getAllProperties = async (limit, skip) => {
        const ajaxRequestHeaders = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        let response = await axios({
            url: `${Base_Url}/user/marketplace/getAllProperties`,
            method: "POST",
            headers: ajaxRequestHeaders,
            data: {
                 limit:0,
                skip:0               
            }
        });
        return response;
    };
    static getFilteredPropertiesList = async (obje) => {
        const ajaxRequestHeaders = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        let response = await axios({
            url: `${Base_Url}/user/SearchProperty`,
            method: "POST",
            headers: ajaxRequestHeaders,
            data:obje
        });
        console.log(response)
        return response;
    };


    static getPropertyDetail = async (id) => {
        const TOKEN = getItem("accessToken");
        const ajaxRequestHeaders = {
            "Content-Type": "application/json",
            Accept: "application/json",
            'authorization' :  TOKEN
        };
        let response = await axios({
            url: `${Base_Url}/user/marketplace/propertyDetails`,
            method: "POST",
            headers: ajaxRequestHeaders,
            data: {
                property_id: id,               
            }
        });
        return response;
    }
}

export default marketPlaceApi;




// async function getUserAsync(name) {
//     try{
//       let response = await fetch(`https://api.github.com/users/${name}`);
//       return await response.json();
//     }catch(err){
//       console.error(err);
//       // Handle errors here
//     }
//   }

//   async function getUserAsync(name) 
// {
//   await fetch(`https://api.github.com/users/${name}`).then(async (response)=> {
//   return await response.json()
// }

// async function getUserAsync(name) 
// {
//   let response = await fetch(`https://api.github.com/users/${name}`);
//   let data = await response.json()
//   return data;
// }

// getUserAsync('yourUsernameHere')
//   .then(data => console.log(data)); 