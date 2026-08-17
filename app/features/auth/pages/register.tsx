import axios from "axios";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
    username : string;
    email : string ;
    password : string}

export default function RegisterUser(){
    const { RegisterUser: registerApi, error, loading } = useAuth();
    const [formdata , setformdata] = useState<FormData>({
            username : "",
            email : "",
            password : ""
    }
)

const navigate = useRouter();

 const submitRegister = async (e : React.FormEvent) => {
    e.preventDefault();
    const response = await registerApi(formdata.username , formdata.email , formdata.password);
    
    // If response is truthy, it means registration succeeded (useAuth handles errors)
    if(response){
        setformdata({
            username : "",
            email : "",
            password : ""
        });
        navigate.push("/dashboard");
    }
 }


    return (
        <>
        <div className="flex ">
            
        </div>        
        </>
    )
}

