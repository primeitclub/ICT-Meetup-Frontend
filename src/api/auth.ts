import { RegisterSchemaType } from "../schema/registerSchema";
import { PostRequest } from "../services/httpRequest";

export async function registerToWebsite(
    data: RegisterSchemaType
){
    try {
        const response = await PostRequest("/auth/register", {
            data: data
        });
        return response;
    }
    catch (error:any) {
        return error.response;
    }
}