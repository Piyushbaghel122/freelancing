"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    openMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export default function MenuProvider({ children }: { children: ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);
    const openMenu = () => setIsMenuOpen(true);

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu, openMenu }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
}
