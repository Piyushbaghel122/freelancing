"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Settings, Briefcase, Mail, Shield, LogOut, Camera } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("overview");
    const { GetMe, LogoutUser, UploadAvatar } = useAuth();
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [userData, setUserData] = useState<any>(null);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await GetMe();
            if (data) {
                setUserData(data);
            }
        };
        fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogout = async () => {
        await LogoutUser();
        navigate({ to: "/login" });
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const res = await UploadAvatar(file);
        if (res && res.avatar_url) {
            setUserData((prev: any) => ({
                ...prev,
                user: {
                    ...prev?.user,
                    avatar_url: res.avatar_url
                }
            }));
        }
        setIsUploading(false);
    };

    const tabs = [
        { id: "overview", label: "Overview", icon: User },
        { id: "projects", label: "My Projects", icon: Briefcase },
        { id: "settings", label: "Settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mt-4 md:mt-12">
                {/* Sidebar */}
                <div className="w-full md:w-72 flex-shrink-0">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="relative group">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/20 overflow-hidden border-2 border-white/10">
                                    {userData?.user?.avatar_url ? (
                                        <img src={userData.user.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                                    ) : (
                                        <span>{userData?.user?.username?.charAt(0)?.toUpperCase() || userData?.username?.charAt(0)?.toUpperCase() || "U"}</span>
                                    )}
                                </div>
                                <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                                    <Camera size={20} className="text-white" />
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={isUploading} />
                                </label>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{userData?.user?.username || userData?.username || "Loading..."}</h3>
                                <p className="text-sm text-gray-400">Freelancer</p>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all ${
                                            isActive 
                                            ? "bg-purple-500/15 text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/10" 
                                            : "hover:bg-white/5 text-gray-400 hover:text-white border border-transparent"
                                        }`}
                                    >
                                        <Icon size={18} />
                                        <span className="font-medium">{tab.label}</span>
                                    </button>
                                );
                            })}
                        </nav>
                        
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl hover:bg-red-500/10 text-red-400 transition-all border border-transparent hover:border-red-500/30">
                                <LogOut size={18} />
                                <span className="font-medium">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl min-h-[500px]"
                    >
                        {activeTab === "overview" && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">Profile Overview</h2>
                                    <p className="text-gray-400">Manage your personal information and account status.</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <div className="flex items-center space-x-3 text-purple-400 mb-3">
                                            <User size={20} />
                                            <h4 className="font-medium">Username</h4>
                                        </div>
                                        <p className="text-gray-300 ml-8">{userData?.user?.username || userData?.username || "loading..."}</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <div className="flex items-center space-x-3 text-purple-400 mb-3">
                                            <Mail size={20} />
                                            <h4 className="font-medium">Email Address</h4>
                                        </div>
                                        <p className="text-gray-300 ml-8">{userData?.user?.email || userData?.email || "loading@example.com"}</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                                        <div className="flex items-center space-x-3 text-indigo-400 mb-3">
                                            <Shield size={20} />
                                            <h4 className="font-medium">Account Status</h4>
                                        </div>
                                        <p className="text-gray-300 ml-8 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                            Active & Verified
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {activeTab === "projects" && (
                            <div>
                                <h2 className="text-3xl font-bold mb-2">My Projects</h2>
                                <p className="text-gray-400 mb-8">View and manage your active freelancing gigs.</p>

                                <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                                    <Briefcase size={48} className="mx-auto mb-4 text-gray-500 opacity-50" />
                                    <p className="text-gray-400 text-lg">You haven&lsquo;t started any projects yet.</p>
                                    <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform">
                                        Explore Projects
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "settings" && (
                            <div>
                                <h2 className="text-3xl font-bold mb-2">Account Settings</h2>
                                <p className="text-gray-400 mb-8">Update your preferences and security details.</p>
                                
                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                                        <div>
                                            <h4 className="font-medium">Email Notifications</h4>
                                            <p className="text-sm text-gray-400">Receive alerts about new project offers.</p>
                                        </div>
                                        <div className="w-12 h-6 bg-purple-500 rounded-full relative cursor-pointer">
                                            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                                        <div>
                                            <h4 className="font-medium">Dark Mode</h4>
                                            <p className="text-sm text-gray-400">Toggle application theme.</p>
                                        </div>
                                        <div className="w-12 h-6 bg-purple-500 rounded-full relative cursor-pointer">
                                            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
