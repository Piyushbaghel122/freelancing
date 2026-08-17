import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
    email : string ;
    password : string}

export default function LoginUser(){
    const { LoginUser: loginApi, error, loading } = useAuth();
    const [formdata , setformdata] = useState<FormData>({
            email : "",
            password : ""
    })

    const navigate = useRouter();

    const submitLogin = async (e : React.FormEvent) => {
        e.preventDefault();
        const response = await loginApi(formdata.email , formdata.password);
        if(response){
            setformdata({
                email : "",
                password : ""
            });
            navigate.push("/dashboard");
        }else{
            console.error("Login failed");
            navigate.push("/login");
        }
    }
    return (
        <>
        <div className="flex ">
            
        </div>        
        </>
    )
}