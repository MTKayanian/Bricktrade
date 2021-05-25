import { getItem } from "../utils/localStore";
import { Base_Url } from '../app.constant';
import axios from "axios";


class propertyApi {

    

    static getAllProperties = async ({limit, skip,propertyStatus}) => {
        const TOKEN = getItem("accessToken");
          console.log('DATAS==>',propertyStatus)
        const ajaxRequestHeaders = {
            "Content-Type": "application/json",
            Accept: "application/json",
            'authorization' :  TOKEN
        };
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/user/property/listMyProperties`,
            headers: ajaxRequestHeaders,
            data: {
                property_status:propertyStatus ,             
                // limit,
                // skip,
            }
        });
        console.log("response****",response);
        return response;
    };

    static userPropertyDetailsApi = async () => {
        const TOKEN = getItem("accessToken");
        const productId = getItem("productId");

        //  console.log('DATAS==>',propertyStatus)
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/user/property/propertyDetails`,
            headers: {
                authorization:TOKEN                
            },
            data: {
                property_id:productId ,             
            }
        });
        return response;
    };   

    static addInvestmentTermsApi = async (data) => {
        const TOKEN = getItem("accessToken");
        //  console.log('DATAS==>',propertyStatus)
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/user/property/addInvestmentTerms`,
            headers: {
                authorization:TOKEN                
            },
            data
        });
        return response;
    };    
    
    static addInvestmentBenefitsApi = async (data) => {
        const TOKEN = getItem("accessToken");
        //  console.log('DATAS==>',propertyStatus)
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/user/property/addInvestmentBenefits`,
            headers: {
                authorization:TOKEN                
            },
            data
        });
        return response;
    };    

    static addWalletAddressApi = async () => {
        const TOKEN = getItem("accessToken");
        const productId = getItem("productId");

        //  console.log('DATAS==>',propertyStatus)
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/user/property/addWalletAddress`,
            headers: {
                authorization:TOKEN                
            },
            data:{
                property_id:productId                
            }
        });
        return response;
    };    

    static addTokenSaleDurationApi = async (data) => {
        console.log("data*****",data);
        const TOKEN = getItem("accessToken");
        //  console.log('DATAS==>',propertyStatus)
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/user/property/addTokenSaleDuration`,
            headers: {
                authorization:TOKEN                
            },
            data               
        });
        return response;
    };    
    
    static addRequiredDocumentsApi = async (data) => {
        console.log("data*****",data);
        const TOKEN = getItem("accessToken");
        //  console.log('DATAS==>',propertyStatus)
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/user/property/addRequiredDocuments`,
            headers: {
                authorization:TOKEN                
            },
            data               
        });
        return response;
    };    


    static FundRaisingUserPropertyDetailsApi = async (token, propertyId) => {
       
        //  console.log('DATAS==>',propertyStatus)
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/user/property/propertyDetails`,
            headers: {
                authorization:token                
            },
            data: {
                property_id:propertyId              
            }
        });
        return response;
    };   

    
    
    
}

export default propertyApi;

