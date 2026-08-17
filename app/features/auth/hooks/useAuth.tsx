/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { RegisterUser as apiRegisterUser, LoginUser as apiLoginUser, LogoutUser as apiLogoutUser, GetMe as apiGetMe } from "../service/api";

export default function useAuth(){
    const [loading ,setLoading] = useState<boolean>(false);
    const [error , setError] = useState<string | null>(null);

    async function RegisterUser(name : string , email : string , password : string){
        setLoading(true);
        setError(null);
        try{
            const response = await apiRegisterUser({ username: name, email, password });
            setLoading(false);
            return response;
        }catch(error: any){
            setError(error);
            setLoading(false);
        }
    }


    const LoginUser = async (email : string , password : string) => {
        setLoading(true);
        setError(null);
        try{
            const response = await apiLoginUser({ email, password });
            setLoading(false);
            return response;
        }catch(error: any){
            setError(error);
            setLoading(false);
        }
    }

    const LogoutUser = async (): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try{
            await apiLogoutUser();
            setLoading(false);
            return true;
        }catch(error: any){
            setError(error);
            setLoading(false);
            return false;
        }
    }

    const GetMe = async () => {
        setLoading(true);
        setError(null);
        try{
            const response = await apiGetMe();
            setLoading(false);
            return response;
        }catch(error: any){
            setError(error);
            setLoading(false);
        }
    }

    return { loading, error, RegisterUser , LoginUser , LogoutUser , GetMe };
}
