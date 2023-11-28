import { create } from 'zustand';

import { getUserProfile } from '../../api/auth';

type AuthStore = {
    isAuthenticated: () => boolean;
}

type User = {
    id: number;
    email: string;
    username: string;
}

type UserDetail = {
    user: any;
    getUser: () => any;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    isAuthenticated: () => {
        const token = localStorage.getItem("pitc-token");
        return token ? true : false;
    }
}));

export const useUserStore = create<UserDetail>((set, get) => ({
    getUser: async () => {
        const user = await getUserProfile();
        if(user.success===true){
            set({user:user.data})
        }
    },
    user: null
}))
