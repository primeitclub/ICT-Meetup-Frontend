import { PostRequest } from '../services/httpRequest';
import { requestHandler } from '../services/requestHandler';

export const addNewEvent = requestHandler<any, any>(async (data)=> {
    return PostRequest("admin/addEvent", data);
})