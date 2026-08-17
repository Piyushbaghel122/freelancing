"use client";

import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
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

const navigate = useNavigate();

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
        navigate({ to: "/dashboard" });
    }
 }


    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0a] to-[#0a0a0a] p-4 font-sans text-white overflow-hidden relative">
            {/* Decorative background blurs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl z-10"
            >
                    <div className="mb-8 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
                        >
                            Create an Account
                        </motion.h1>
                        <p className="text-gray-400 mt-2 text-sm">Join our network of elite freelancers</p>
                    </div>

                    <form onSubmit={submitRegister} className="space-y-5">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-400 transition-colors">
                                <User size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Username"
                                value={formdata.username}
                                onChange={(e) => setformdata({...formdata, username: e.target.value})}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:bg-white/10 focus:border-indigo-500/50 transition-all text-white placeholder-gray-500"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-400 transition-colors">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={formdata.email}
                                onChange={(e) => setformdata({...formdata, email: e.target.value})}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:bg-white/10 focus:border-indigo-500/50 transition-all text-white placeholder-gray-500"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-400 transition-colors">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={formdata.password}
                                onChange={(e) => setformdata({...formdata, password: e.target.value})}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:bg-white/10 focus:border-indigo-500/50 transition-all text-white placeholder-gray-500"
                            />
                        </div>

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }} 
                                animate={{ opacity: 1, height: 'auto' }} 
                                className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                            >
                                {error}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-400 text-sm">
                        Already have an account?{' '}
                        <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                            Log in here
                        </Link>
                    </p>
                </motion.div>
        </div>
    )
}

