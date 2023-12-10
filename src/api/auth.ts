import { setLocalStorage } from '../helpers/localStorage';
import {
  GetRequest,
  PostRequest,
} from '../services/httpRequest';
import { requestHandler } from '../services/requestHandler';
import { LoginResponse } from '../utils/types/auth';

interface UserSession{
    user: {
        email: string;
        username: string;
        user_type: string;
    }
}

interface UserRoles{
    statusCode: number;
    message: string;
    userType: string;    
}

interface RegisterResponse{
    email: string;
    id: number;
    message: string;
    statusCode: number;
}

export const registerUser = requestHandler<any, RegisterResponse>(async (params) => {
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

export const getUserProfile = requestHandler<any, UserSession>(async (params) => {
    return GetRequest("user/profile", params);
})

export const checkAdmin = requestHandler<any, UserRoles>(async () => {
    return GetRequest("user/isAdmin");
})

export const verifyOtp = requestHandler<any, unknown>(async (params) => {
    return PostRequest("auth/verify-otp", params);
})

export const resendOtp = requestHandler<any, unknown>(async (params) => {
    return PostRequest("auth/verify-otp", params);
})

export const loginWithGoogle = requestHandler<any, LoginResponse>(async () => {
    return GetRequest("auth/login-with-google");
})

export const logoutUser = async () => {
    //clear token
    setLocalStorage("pitc-token", "");
    setLocalStorage("pitc-refresh-token", "");
    //refresh page
    window.location.reload();
    return;
}