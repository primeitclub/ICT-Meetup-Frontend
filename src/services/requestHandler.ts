import { AxiosResponse } from 'axios';

type BaseRequest<T,V> = (params?: T) => Promise<AxiosResponse<V>>;

type SuccessResponse<K> = {
    success: true;
    data: K;
};

type ErrorResponse
= {
    success: false;
    error: {
        message: string;
        status: number;
        detail: Array<string>;
    }
};

type BaseResponse <V > = SuccessResponse<V> | ErrorResponse;
const returnError = (error: any,
    customMessage?: string,
    ) => {
  return {
    detail: error.details || [],
    error: error.status || 500,
    message: customMessage || error.message || "Something went wrong",
  };
};


export const requestHandler = <T,V>(request: BaseRequest<T,V>) => async (params?: T): Promise<BaseResponse<V>> => {
    try{
        const response = await request(params)
        return {
            success: true,
            data: response.data
        }
    }
    catch(e:any){
       const error = returnError(e)
        console.log(error)
        return {
            success: false,
            error: {
                detail: error.detail,
                message: error.message,
                status: error.error
            }
        }
    }
}