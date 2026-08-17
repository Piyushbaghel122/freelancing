/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";


import Link from "next/link";
import { useState, useRef } from "react";

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!footerRef.current) return;
        const rect = footerRef.current.getBoundingClientRect();
        setMousePos({
            x: `${e.clientX - rect.left}px`,
            y: `${e.clientY - rect.top}px`
        });
    };

    return (
        <footer 
            ref={footerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full bg-[#030303] text-white border-t border-white/10 overflow-hidden font-sans pt-20 pb-8"
        >
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 pb-32">
                
                {/* Left Section - Logo and Aura */}
                <div className="relative flex flex-col justify-start">
                    {/* The horizontal glowing aura */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-md h-12 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 blur-[40px] opacity-70 rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 flex items-center gap-2">
                        {/* Wavy Logo Icon Placeholder */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 12C2 12 5 8 12 12C19 16 22 12 22 12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M2 17C2 17 5 13 12 17C19 21 22 17 22 17" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M2 7C2 7 5 3 12 7C19 11 22 7 22 7" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        <span className="text-3xl font-bold tracking-tight">wizard</span>
                    </div>
                </div>

                {/* Middle Section - Links */}
                <div className="flex flex-col gap-4 text-white/70 relative z-10">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms Of Service</Link>
                    <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                </div>

                {/* Right Section - Contact & Socials */}
                <div className="flex flex-col justify-between relative z-10">
                    <div>
                        <a href="mailto:Hi@Trywizard.Com" className="text-white/80 hover:text-white text-lg block mb-6">
                            Hi@Trywizard.Com
                        </a>
                        <div className="flex items-center gap-6 mb-12">
                            {/* X (Twitter) Icon */}
                            <a href="#" className="text-white/60 hover:text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white/60 hover:text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            {/* Discord Icon */}
                            <a href="#" className="text-white/60 hover:text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white/60 hover:text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <p className="text-white/50 text-sm">
                        © 2026, Wizard Inc. All Rights Reserved
                    </p>
                </div>

            </div>

            
        </footer>
    );
}
