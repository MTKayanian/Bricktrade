import { getItem } from "../utils/localStore";
import { Base_Url } from '../app.constant';
import axios from "axios";


class AdminPropertyApi {

    static FundRaisingAdminPropertyDetailsApi = async (token, propertyId) => {

        //  console.log('DATAS==>',propertyStatus)
        let response = await axios({
            method: "POST",
            url: `${Base_Url}/admin/getpropertybyDetail`,
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

export default AdminPropertyApi;

