import { setLocalStorage } from '../helpers/localStorage';
import {
  GetRequest,
  PostRequest,
} from '../services/httpRequest';
import { requestHandler } from '../services/requestHandler';
import { LoginResponse } from '../utils/types/auth';

export const registerUser = requestHandler<any, unknown>(async (params) => {
    return PostRequest("auth/register", params);
})

export const loginUser = requestHandler<any, LoginResponse>(async (params) => {
    return PostRequest("auth/login", params);
});

export const setToken = (token: string) => {
    setLocalStorage("pitc-token", token);
}

export const setRefreshToken = (token: string) => {
    setLocalStorage("pitc-refresh-token", token);
}

export const getUserProfile = requestHandler<any, unknown>(async (params) => {
    return GetRequest("user/profile", params);
})