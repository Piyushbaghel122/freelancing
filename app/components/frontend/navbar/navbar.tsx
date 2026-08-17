"use client";
import { useState } from "react";
import { Link } from "@tanstack/react-router";


export default function Navbar() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const submitLoading = () => {
        setLoading(true);
        setError(null);

        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }

    return (
        <>
        {/* Full Page Loading Overlay */}
        {loading && (
            <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
                <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
            </div>
        )}

        <header className="relative z-20 py-6 bg-white border-b border-gray-300 shadow-xl">
        <nav className="flex items-center justify-between px-8">
          <div className="">
            <h1 className="text-3xl font-bold text-blue-600">wizard</h1>
          </div>
          <div className="flex justify-center space-x-8 text-gray-600 font-medium">
            <Link to="/" href="#piyushkumar" className="hover:text-blue-600 transition-colors"><p>Home</p></Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors"><p>About</p></Link>
            <Link to="/services" className="hover:text-blue-600 transition-colors"><p>Services</p></Link>
          </div>
          <div className="flex justify-end space-x-4">
            <Link to="/register">
                <button onClick={submitLoading} className="px-6 py-2.5 font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Register
                </button>
            </Link>
            <Link to="/login">
                <button onClick={submitLoading} className="px-6 py-2.5 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                    Login
                </button>
            </Link>
          </div>
        </nav>
      </header>
      </>
    );
}
