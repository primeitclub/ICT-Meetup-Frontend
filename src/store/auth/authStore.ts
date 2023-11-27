import { create } from 'zustand';

type AuthStore = {
    isAuthenticated: () => boolean;
}

type User = {
    id: number;
    email: string;
    username: string;
}

type UserDetail = {
    user: User | null;
    getUser: () => User;
    setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    isAuthenticated: () => {
        const token = localStorage.getItem("pitc-token");
        return token ? true : false;
    }
}));

export const useUserStore = create<UserDetail>((set, get) => ({
    getUser: () => {
        const user = localStorage.getItem("pitc-user");
        return user ? JSON.parse(user) : null;
    },
    setUser: (user: User) => {
        localStorage.setItem("pitc-user", JSON.stringify(user));
    }
    ,
    user: null
}))
