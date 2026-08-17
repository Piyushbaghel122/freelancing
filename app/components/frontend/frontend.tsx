import Navbar from "./navbar/navbar";
import Scene from "../../three/Scene";
import { Link } from "@tanstack/react-router";
import MenuProvider from "../frontendDashboard/components/menuProvider";


export default function Frontend(){
    return(
        <MenuProvider>
        <main className="relative min-h-screen bg-black text-white overflow-hidden">
            <Navbar />
            <Scene />
            
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 z-10 relative pointer-events-none">
                <div className="text-center space-y-6 max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400 drop-shadow-2xl">
                        Elevate Your Craft
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light mx-auto max-w-2xl">
                        The premium network for elite freelancers and forward-thinking companies. Step into the future of work.
                    </p>
                    <div className="pt-8 flex flex-wrap justify-center gap-6 pointer-events-auto">
                        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_50px_rgba(79,70,229,0.8)] transform hover:-translate-y-1">
                             start Devepoler
                        </button>
                        <Link to="/pricing" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-medium transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                           view Pricing
                        </Link>
                    </div>
                </div>
            </div>
        </main>
        </MenuProvider>
    )
}