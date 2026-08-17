/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"; 

const api = axios.create({
    baseURL : "http://localhost:8080/api/auth",
    headers : {
        "Content-Type" : "application/json"
    }
});

api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});


export async function RegisterUser({username , email , password}: {username:string , email:string , password:string}){
    try{
        const response = await api.post("/signup" , {username , email , password})
        localStorage.setItem("token" , response.data.token)
        return response.data;
        }catch(error : any){
        throw error?.response?.data?.message || error?.message || "An unexpected error occurred";
    }
}

export async function LoginUser({email , password}: {email:string , password:string}){
    try{
        const response = await api.post("/login" , {email , password})
        localStorage.setItem("token" , response.data.token)
        return response.data;
    }catch(error : any){
        throw error?.response?.data?.message || error?.message || "An unexpected error occurred";
    }
}

export async function LogoutUser(){
    try{
        const response = await api.post("/logout")
        localStorage.removeItem("token")
        return response.data;
    }catch(error : any){
        throw error?.response?.data?.message || error?.message || "An unexpected error occurred";
    }
}

export async function GetMe(){
    try{
        const response = await api.get("/profile")
        return response.data;
    }catch(error : any){
        throw error?.response?.data?.message || error?.message || "An unexpected error occurred";
    }
}

export async function apiUploadAvatar(file: File){
    try{
        const formData = new FormData();
        formData.append("avatar", file);
        
        const response = await api.post("/upload-avatar", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    }catch(error : any){
        throw error?.response?.data?.message || error?.message || "An unexpected error occurred";
    }
}