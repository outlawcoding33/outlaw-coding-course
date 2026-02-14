import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-black/90 text-yellow-400 font-sans overflow-x-hidden">
            {/* HEADER */}
            <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-zinc-900 to-black shadow-xl">
                <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg sm:text-2xl font-bold tracking-widest hover:text-yellow-300 transition"
                    >
                        ⚡ Outlaw Coding
                    </Link>

                    {/* Desktop nav (ONLY Courses) */}
                    <nav className="hidden md:flex items-center gap-8 font-bold text-lg">
                        <Link to="/courses" className="hover:text-yellow-200 transition">
                            Դասեր
                        </Link>
                    </nav>

                    {/* Mobile burger */}
                    <button
                        onClick={() => setMobileMenuOpen((v) => !v)}
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/60 border border-yellow-400/30"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile dropdown (ONLY Courses) */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden border-t border-yellow-400/10"
                        >
                            <div className="px-4 pb-4 pt-3 flex flex-col gap-3">
                                <Link
                                    to="/courses"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 bg-zinc-900/50 border border-yellow-400/20 rounded-xl"
                                >
                                    Դասեր
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <main className="pt-20 sm:pt-24">
                <Outlet />
            </main>
        </div>
    );
}
