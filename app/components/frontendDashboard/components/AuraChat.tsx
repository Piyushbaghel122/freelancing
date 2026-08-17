"use client";
import { Plus, Monitor, GitBranch, ChevronDown, Mic, ArrowUp } from "lucide-react";


export default function AuraChat() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 font-sans h-full flex flex-col justify-end pb-8 z-20 relative pointer-events-auto">
      
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto mb-6 flex flex-col gap-4">
        {/* Messages will go here */}
      </div>

      {/* Chat Input (Matching Screenshot Design) */}
      <div className="bg-white rounded-3xl p-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] flex flex-col gap-2 relative border border-gray-200">
        <input 
          type="text" 
          placeholder="Ask a question with /plan" 
          className="w-full bg-transparent border-none text-gray-800 placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-0 text-[15px]"
        />
        
        <div className="flex items-center justify-between px-2 mt-1">
          <div className="flex items-center gap-4 text-gray-500">
            <button className="hover:text-black transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-1.5 hover:text-black transition-colors text-[13px] font-medium">
              <Monitor className="w-4 h-4" />
              project
              <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-1.5 hover:text-black transition-colors text-[13px] font-medium">
              <GitBranch className="w-4 h-4" />
              main
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-black transition-colors">
              <Mic className="w-4 h-4" />
            </button>
            <button className="bg-[#b4c8f5] hover:bg-[#9db5e8] text-white p-2 rounded-full transition-colors flex items-center justify-center h-8 w-8 shadow-sm">
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}