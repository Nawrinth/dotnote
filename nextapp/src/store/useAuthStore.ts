import { create } from "zustand";

interface AuthStore{
    authUser:any,
    setUser:(data:any)=>void,
}


export const useAuthStore = create<AuthStore>((set)=>({
    authUser:null,
    setUser:(data)=>{
        set({authUser:data})
    }
}));