import { getItem } from "../utils/localStore";
import { Base_Url } from '../app.constant';
import axios from "axios";


class adminApi {

    static getProfileBusiness = async (token, userId) => {
        let response = await axios({
            url: `${Base_Url}/admin/business/getProfile`,
            method: "POST",
            headers: { authorization: token },
            data: {
                userId: userId
            }
        });
        return response;

    }

    static createUserWallet = async (token, userId) => {
        console.log("createUserWallet*********",token,userId);
        // const ajaxRequestHeaders = new Headers({
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     authorization:token
        // });

        let response = await axios({
            url: `${Base_Url}/admin/createUserWallet`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                authorization: token },
            data: {
                userId: userId
            }
        });
        console.log(response);
        return response;
    }


}

export default adminApi;