import { useMenu } from "./menuProvider";
import { Plus, MessageSquare, Briefcase, FileEdit } from "lucide-react";

export default function Header() {
    const { isMenuOpen, closeMenu } = useMenu();

    return (
        <>
            {/* Menu Toggle Button */}
            {!isMenuOpen && (
                <button
                    onClick={openMenu}
                    className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-black border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-900 transition-colors shadow-lg"
                >
                    <span className="text-sm font-semibold font-sans">N</span>
                </button>
            )}

            {/* Overlay for mobile/when menu is open */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                    onClick={closeMenu}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-[#18181c] border-r border-gray-800/50 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } flex flex-col shadow-2xl`}
            >
                {/* New Chat Button */}
                <div className="p-5 pt-8">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#d1bcf5] hover:bg-[#bda4ff] text-indigo-950 font-semibold py-2.5 rounded-xl transition-colors shadow-sm">
                        <Plus className="w-4 h-4" />
                        <span className="text-sm">New Chat</span>
                    </button>
                </div>

                {/* Navigation Sections */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-8">
                    {/* Personal */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 px-2">Personal</h3>
                        <div className="space-y-1">
                            <button onClick={closeMenu} className="w-full flex items-center gap-3 text-gray-300 hover:text-white hover:bg-[#25252b] px-3 py-2 rounded-lg transition-colors">
                                <MessageSquare className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-medium">wizard</span>
                            </button>
                        </div>
                    </div>

                    {/* Work */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 px-2">Work</h3>
                        <div className="space-y-1">
                            <button onClick={closeMenu} className="w-full flex items-center text-gray-300 hover:text-white hover:bg-[#25252b] border border-gray-300 rounded-lg px-3 py-2 transition-colors">
                                <Briefcase className="w-4 h-4 text-gray-400 shrink-0" />
                                <div className="flex flex-row w-full justify-around items-center">
                                    <div className="flex flex-col items-center text-xs font-medium leading-tight">
                                        <span>my</span>
                                        <span>project</span>
                                    </div>
                                    <div className="flex flex-col items-center text-xs font-medium leading-tight">
                                        <span>choose your</span>
                                        <span>project</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Drafts */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 px-2">Drafts</h3>
                        <div className="space-y-1">
                            <button onClick={closeMenu} className="w-full flex items-center gap-3 text-gray-300 hover:text-white hover:bg-[#25252b] px-3 py-2 rounded-lg transition-colors">
                                <FileEdit className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-medium">chat message</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Status */}
                <div className="p-5 mt-auto">
                    <div className="bg-[#222227] border border-gray-800/60 rounded-xl px-4 py-3 flex items-center gap-3 shadow-inner">
                        <div className="w-2 h-2 rounded-full bg-[#d1bcf5] shadow-[0_0_8px_#d1bcf5]"></div>
                        <span className="text-[11px] font-semibold text-gray-300">Aether v2.4 Active</span>
                    </div>
                </div>
            </aside>
        </>
    );
}

