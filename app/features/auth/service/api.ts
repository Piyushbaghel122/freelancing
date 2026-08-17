/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"; 

const api = axios.create({
    baseURL : "http://localhost:3000/api/v1/auth",
    headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
})

export async function RegisterUser({username , email , password}: {username:string , email:string , password:string}){
    try{
        const response = await api.post("/register" , {username , email , password})
        localStorage.setItem("token" , response.data.token)
        return response.data;
    }catch(error : any){
        throw error.response.data.message;
    }
}

export async function LoginUser({email , password}: {email:string , password:string}){
    try{
        const response = await api.post("/login" , {email , password})
        localStorage.setItem("token" , response.data.token)
        return response.data;
    }catch(error : any){
        throw error.response.data.message;
    }
}

export async function LogoutUser(){
    try{
        const response = await api.post("/logout")
        localStorage.removeItem("token")
        return response.data;
    }catch(error : any){
        throw error.response.data.message;
    }
}

export async function GetMe(){
    try{
        const response = await api.get("/getme")
        return response.data;
    }catch(error : any){
        throw error.response.data.message;
    }
}