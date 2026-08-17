"use client";

import NavbarDashboard from "./navbarDashboard/navbarDashboard";
import Scene from "@/app/three/Scene";
import AuraChat from "./components/AuraChat";
import ThemeProvider from "./components/themeProvider";
import MenuProvider from "./components/menuProvider";
import Header from "./components/MenuName";

export default function FrontendDashboard() {
  return (
  
    <ThemeProvider>
      <MenuProvider>
        <Header />
        <main className="relative min-h-screen bg-[#111115] overflow-hidden flex flex-col">
          <NavbarDashboard />
          
          <div className="relative flex-1 w-full flex flex-col">
            <div className="absolute inset-0 z-0 opacity-50">
              <Scene />
            </div>
            
            
            <div className="relative z-10 flex-1 w-full flex items-end justify-center overflow-y-auto">
              <AuraChat />
            </div>
          </div>
        </main>
      </MenuProvider>
    </ThemeProvider>
  );
}
