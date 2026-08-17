"use client";

import React from "react";

export default function WizardHero() {
    return (
        <div className="min-h-screen w-full bg-black flex items-center justify-center overflow-hidden font-sans">
            <h1 
                className="text-[22vw] font-light tracking-widest leading-none m-0 p-0 uppercase"
                style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #FFD700", // Ultra thin Gold outline
                }}
            >
                wizard
            </h1>
        </div>
    );
}
