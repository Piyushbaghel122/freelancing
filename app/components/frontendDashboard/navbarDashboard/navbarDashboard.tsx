"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useAuth from "../../../features/auth/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMenu } from "../components/menuProvider";
import { Menu, Search } from "lucide-react";

export default function NavbarDashboard(){
    const [loading , setLoading] = useState<boolean>(false);
    const [error , setError] = useState<string | null>(null);
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

    const {LogoutUser} = useAuth();
    const router = useRouter();
    const { toggleMenu } = useMenu();

    const handleLogout = async () => {
        setLoading(true);
        setError(null);
        try{
         await LogoutUser();
            setLoading(false);
            router.push("/login");
        }catch(error: any){
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <> 
        {/* Full Page Loading Overlay */}
        {loading && (
            <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111115]/80 backdrop-blur-sm">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-solid"></div>
            </div>
        )}

        <header className="py-4 bg-[#111115] border-b border-gray-800 shadow-sm relative z-40">
            <nav className="flex items-center justify-between px-6">
                
                {/* Left: Menu Toggle */}
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="p-2 bg-[#1a1a1f] border border-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

                {/* Middle: Search Bar */}
                <div className="flex-1 max-w-xl mx-8 hidden md:block">
                    <div className="relative flex items-center bg-[#1a1a1f] border border-gray-800 rounded-lg px-4 py-2.5 w-full">
                        <Search className="w-4 h-4 text-gray-500 mr-2" />
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="bg-transparent border-none text-sm text-gray-200 placeholder-gray-500 w-full focus:outline-none focus:ring-0" 
                        />
                    </div>
                </div>

                {/* Right: Profile & Client */}
                <div className="flex items-center space-x-3 relative">
                    <button 
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center space-x-3 focus:outline-none group"
                    >
                        <div className="w-9 h-9 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30 group-hover:bg-indigo-500/30 transition-colors">
                            U
                        </div>
                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors">client</span>
                    </button>

                    {/* Profile Dropdown Menu */}
                    {isProfileOpen && (
                        <div className="absolute right-0 top-12 mt-2 w-56 bg-[#1a1a1f] rounded-xl shadow-2xl py-2 border border-gray-800 z-50">
                            <div className="px-4 py-3 border-b border-gray-800">
                                <p className="text-sm text-gray-500">Signed in as</p>
                                <p className="text-sm font-semibold text-gray-200 truncate">Client User</p>
                            </div>
                            <div className="py-2">
                                <Link 
                                    href="/dashboard/profile" 
                                    className="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-[#25252b] hover:text-gray-200 transition-colors"
                                    onClick={() => setIsProfileOpen(false)}
                                >
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    Account Settings
                                </Link>
                            </div>
                            <div className="py-2 border-t border-gray-800">
                                <button 
                                    onClick={() => {
                                        setIsProfileOpen(false);
                                        handleLogout();
                                    }}
                                    className="flex items-center w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#25252b] transition-colors"
                                >
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    Sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
        </>
    )
}