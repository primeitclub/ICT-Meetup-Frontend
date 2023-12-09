import { PostRequest } from '../services/httpRequest';
import { requestHandler } from '../services/requestHandler';

export const registerValorant = requestHandler<any, unknown>(async (params) => {
    return PostRequest("auth/register/valorant", params, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
})