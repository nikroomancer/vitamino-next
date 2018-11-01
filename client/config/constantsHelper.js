import {BASE_URL_DEV, BASE_URL_PROD} from "./constants";

export const getBaseUrl = () => {
    if(process.env.NODE_ENV === 'development'){
        return BASE_URL_DEV;
    }else{
        return BASE_URL_PROD;
    }
};
