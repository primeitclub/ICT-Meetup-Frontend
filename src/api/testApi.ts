//make api calls here

import { GetRequest } from "../services/httpRequest";

export const GetTest = () => {
    return GetRequest("https://ictv7demo.primeitclub.com/api/ict");
}