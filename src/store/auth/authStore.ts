import { create } from 'zustand';

import { getUserProfile } from '../../api/auth';

type AuthStore = {
    isAuthenticated: boolean;
     user: User;
    role: string;
    getUser: () => any;
}

type User = {
    email: string;
    username: string;
} | null;



export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false, 
    user: null,
    role: "",
    getUser: async () => {
        const user = await getUserProfile();
        if(user.success===true){
            set({user:{
                email: user.data.user.email,
                username: user.data.user.username,
            }})
            set({role: user.data.user.user_type})
            set({isAuthenticated: true})
        }
    },
}));


