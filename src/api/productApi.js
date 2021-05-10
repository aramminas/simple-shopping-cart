import axios from 'axios';
import {API_URL} from "../constants";

async function getAllProducts(id = 0){
    try{
        let result = {};
        let message = "";
        const {data} = await axios.get(API_URL);
        if( data.length > 0){
            if(id > 0){
                result = data.filter(item => item.id === +id);
                if(result.length > 0){
                    result = result[0];
                }
            } else if(id.length > 0 && !(id > 0)) {
                result = {};
                message = "No product found for this ID!";
            } else {
                result = data;
            }
        }
        return {success: true, result, error: message};
    } catch (error){
        return {success: false, error: error.message};
    }
}

export {
    getAllProducts,
};