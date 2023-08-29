//make api calls here

import { GetRequest } from "../services/httpRequest";

export const GetTest = async () => {
    try{
        const response = await GetRequest("https://ictv7demo.primeitclub.com/api/ict");
        return response.data;
    }catch(error){
        throw error;
    }
}