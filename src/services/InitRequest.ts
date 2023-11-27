import axios, {
  AxiosError,
  AxiosResponse,
} from 'axios';

import { getTokenFromStorage } from '../helpers/localStorage';

const axiosInstance = axios.create({
//  baseURL: import.meta.env.VITE_EXPRESS_BACKEND_URL,
    baseURL: 'http://localhost:6969/',
 headers: {
  'Content-Type': 'application/json'
 }
});

axiosInstance.interceptors.request.use(
    (config:any) => {
        const token = getTokenFromStorage();
        try{
            if (!!token) {
                config.headers["Authorization"] = `Token ${token}`;
            }
            return config;
        }
        catch(e){
            // console.log(e)
            console.error("Error in interceptors")
            //handle error
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

class AppError extends Error{
    status: number
    details: any
    constructor(message: string, status: number, details: any){
        super(message)
        this.status = status
        this.details = [details]
    }
}

function ErrorHandler(response: AxiosResponse){
    const {data} = response
    console.log(data)

    switch(response.status){
        case 400:
            throw new AppError(
              response.statusText || "Bad request", response.status, data.message)
        case 401:
            throw new AppError(
              response.statusText || "Unauthorized", response.status, response.data.message)
        case 403: 
            throw new AppError(
              response.statusText || "Forbidden", response.status, response.data.message)
        case 404:
            throw new AppError(
              response.statusText || "Resource not found", response.status, response.data.message)
        case 409:
            throw new AppError(
              response.statusText || "Entity already exists", response.status, response.data.message)
        default:
            throw new AppError(
              response.statusText || "Something went wrong", response.status, response.data.message)
    }
}
    
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log(error)

    if (error.response) {
      // The request was made and the server responded with a status code
        ErrorHandler(error.response)
    }
  }
);

export default axiosInstance;
