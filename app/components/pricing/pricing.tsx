"use client";
import { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Image, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import Navbar from "../frontend/navbar/navbar";
import Footer from "../frontend/footer/footer";
import Reviews from "../frontend/reviews/reviews";
import Hero  from "../../three/wizard";

// 3D Eagle Component using Drei
function EagleImage() {
    const { viewport } = useThree();
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <Image 
                url="/eagle.png" 
                scale={[viewport.width * 1.05, viewport.height * 1.05]} 
                transparent
            />
        </Float>
    );
}

const tiers = [
    {
        name: "Pro+",
        description: "Ideal for growing teams and professionals.",
        monthlyPrice: "$29",
        yearlyPrice: "$24",
        features: ["Unlimited Projects", "Advanced Analytics", "1-hour Support Response time", "Custom Domains", "Team Collaboration"],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Teams",
        description: "Perfect for small teams and startups.",
        monthlyPrice: "$40",
        yearlyPrice: "$32",
        features: [
            "Everything in Pro+ plan", 
            "Single sign on", 
            "Support up to 4 Team member", 
            "Fastest response times", 
            "Dedicated infrastructure", 
            "24/7 dedicated support channel", 
            "Feature requests on demand"
        ],
        cta: "Get Started",
        popular: true
    },
    {
        name: "Ultra",
        description: "For heavy usage and advanced AI capabilities.",
        monthlyPrice: "$200",
        yearlyPrice: "$160",
        features: [
            "Everything in Pro +", 
            "40x more usage than Pro+", 
            "First access to new models", 
            "Unlimited access to 1000+ MCP servers", 
            "Custom mcp server integrations", 
            "Fastest response times", 
            "Dedicated infrastructure", 
            "24/7 dedicated support channel", 
            "Feature requests on demand"
        ],
        cta: "Get Started",
        popular: false
    }
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="w-full min-h-screen overflow-x-hidden bg-black relative font-sans">
            {/* Custom Animations */}
            <style>
                {`
                @keyframes eagleFlyIn {
                    0% { 
                        transform: scale(1.1) translateY(30px); 
                        opacity: 0; 
                        filter: blur(10px);
                    }
                    15% {
                        opacity: 1;
                        filter: blur(0px);
                    }
                    100% { 
                        transform: scale(1) translateY(0px); 
                    }
                }
                .animate-eagle-fly-in {
                    animation: eagleFlyIn 10s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }

                @keyframes flyDots {
                    0% { background-position: 0px 0px; }
                    100% { background-position: 1000px 1000px; }
                }
                @keyframes floatOrb {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                `}
            </style>

            <div className="absolute inset-0 w-full h-full fixed">
                
                {/* 3D Canvas specifically for the Eagle using Drei */}
                <div className="absolute inset-0 w-full h-full z-0 animate-eagle-fly-in pointer-events-none origin-center">
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <Suspense fallback={null}>
                            <EagleImage />
                        </Suspense>
                    </Canvas>
                </div>
                
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Base gradient overlay to darken the eagle image slightly for better UI readability */}
                    <div className="absolute inset-0 bg-black/70 z-0" />

                    {/* Soft Ambient Glowing Orbs */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div 
                            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px]"
                            style={{ animation: 'floatOrb 15s ease-in-out infinite' }}
                        />
                        <div 
                            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"
                            style={{ animation: 'floatOrb 18s ease-in-out infinite reverse' }}
                        />
                    </div>

                    {/* Angled Flying Dots Background Effect */}
                    <div className="absolute inset-0 z-10 flex justify-center items-center mix-blend-screen opacity-70">
                        <div 
                            className="absolute w-[150vw] h-[400px] opacity-80"
                            style={{
                                transform: "rotate(-35deg) scale(1.2)",
                                backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 2px, transparent 2.5px)",
                                backgroundSize: "32px 32px",
                                maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 70%)",
                                WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 70%)",
                                animation: "flyDots 40s linear infinite"
                            }}
                        />
                        <div 
                            className="absolute w-[150vw] h-[600px] opacity-50"
                            style={{
                                transform: "rotate(-35deg) scale(1.2)",
                                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1.5px)",
                                backgroundSize: "20px 20px",
                                maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 80%)",
                                WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 80%)",
                                animation: "flyDots 60s linear infinite"
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-50">
                <Navbar />

                <div className="relative flex flex-col items-center pt-40 pb-24 px-4 min-h-screen z-50">
                    
                    {/* Header Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-center max-w-3xl mb-12"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6">
                            Choose Your Destiny
                        </h1>
                        <p className="text-lg md:text-xl text-white/60">
                            Experience the raw power of the eagle with simple, transparent pricing.
                        </p>
                    </motion.div>

                    {/* Billing Toggle */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex items-center gap-4 mb-16 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-full"
                    >
                        <button 
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'}`}
                        >
                            Monthly
                        </button>
                        <button 
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'}`}
                        >
                            Annually <span className="text-indigo-400 ml-1">-20%</span>
                        </button>
                    </motion.div>

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 1 + index * 0.2 }}
                                className={`relative p-[1px] rounded-3xl overflow-hidden ${tier.popular ? 'transform md:-translate-y-4 shadow-2xl shadow-indigo-500/20' : ''}`}
                            >
                                {/* Gradient Border for Popular Card */}
                                {tier.popular && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-purple-600 opacity-50 z-0" />
                                )}

                                <div className={`relative z-10 h-full flex flex-col p-8 rounded-[23px] ${tier.popular ? 'bg-black/80 backdrop-blur-2xl' : 'bg-white/5 backdrop-blur-xl border border-white/10'}`}>
                                    
                                    {tier.popular && (
                                        <div className="absolute top-0 right-8 transform -translate-y-1/2">
                                            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                                <Star size={12} className="fill-white" /> Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                        <p className="text-white/50 text-sm h-10">{tier.description}</p>
                                    </div>

                                    <div className="mb-8">
                                        <span className="text-5xl font-extrabold text-white">
                                            {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                                        </span>
                                        {tier.monthlyPrice !== "Free" && (
                                            <span className="text-white/40 ml-2">/ month</span>
                                        )}
                                        {isYearly && tier.monthlyPrice !== "Free" && (
                                            <p className="text-indigo-400 text-sm mt-2">Billed annually</p>
                                        )}
                                    </div>

                                    <button className={`w-full py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2 ${tier.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                        {tier.cta} {tier.popular && <Zap size={16} />}
                                    </button>

                                    <div className="mt-8 space-y-4 flex-grow">
                                        {tier.features.map(feature => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <Check size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                                                <span className="text-white/80 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
                
                {/* Reviews / Testimonials Section */}
                <Reviews />

                {/* Footer Section */}
                <Footer />
            </div>
            <Hero />
        </div>
    )
}