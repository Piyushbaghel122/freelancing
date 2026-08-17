"use client";

import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
interface FormData {
    email : string ;
    password : string}

export default function LoginUser(){
    const { LoginUser: loginApi, error, loading } = useAuth();
    const [formdata , setformdata] = useState<FormData>({
            email : "",
            password : ""
    })

    const navigate = useNavigate();

    const submitLogin = async (e : React.FormEvent) => {
        e.preventDefault();
        const response = await loginApi(formdata.email , formdata.password);
        if(response){
            setformdata({
                email : "",
                password : ""
            });
            navigate({ to: "/dashboard" });
        }else{
            console.error("Login failed");
        }
    }
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0a0a0a] to-[#0a0a0a] p-4 font-sans text-white overflow-hidden relative">
            {/* Decorative background blurs */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

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
                            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400"
                        >
                            Log In
                        </motion.h1>
                        <p className="text-gray-400 mt-2 text-sm">Access your elite dashboard</p>
                    </div>

                    <form onSubmit={submitLogin} className="space-y-5">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-purple-400 transition-colors">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={formdata.email}
                                onChange={(e) => setformdata({...formdata, email: e.target.value})}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:bg-white/10 focus:border-purple-500/50 transition-all text-white placeholder-gray-500"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-purple-400 transition-colors">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={formdata.password}
                                onChange={(e) => setformdata({...formdata, password: e.target.value})}
                                required
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none focus:bg-white/10 focus:border-purple-500/50 transition-all text-white placeholder-gray-500"
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
                            className="w-full py-3.5 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                            ) : (
                                "Log In"
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-400 text-sm">
                        Don&apos;t have an account yet?{' '}
                        <Link href="/register" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                            Sign up here
                        </Link>
                    </p>
                </motion.div>
        </div>
    )
}