import { PostRequest } from '../services/httpRequest';
import { requestHandler } from '../services/requestHandler';

export const registerValorant = requestHandler<any, unknown>(async (params) => {
    return PostRequest("events/valorant/", params, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
})

export const registerIdeathon = requestHandler<any, unknown>(async (params) => {
    return PostRequest("events/ideathon/register", params, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
})