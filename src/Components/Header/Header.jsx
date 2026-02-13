import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, X, Menu } from "lucide-react";
import CodeAnimation from "../Animation/CodeAnimation";

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirm: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const resetForm = () => {
        setFormData({
            username: "",
            email: "",
            password: "",
            confirm: "",
            agree: false,
        });
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.agree) {
            alert("Խնդրում ենք հաստատել համաձայնությունը ✅");
            return;
        }
        if (!usernameRegex.test(formData.username)) {
            alert("Օգտանունը պետք է լինի 3-16 սիմվոլ (a-z, 0-9, _) ձևաչափով։");
            return;
        }
        if (!isLogin && !emailRegex.test(formData.email)) {
            alert("Ներմուծեք վավեր էլ․ փոստ։");
            return;
        }
        if (!passwordRegex.test(formData.password)) {
            alert("Գաղտնաբառը պետք է պարունակի առնվազն 8 նիշ, մեկ մեծատառ, թիվ և հատուկ նշան։");
            return;
        }
        if (!isLogin && formData.password !== formData.confirm) {
            alert("Գաղտնաբառերը չեն համընկնում։");
            return;
        }

        localStorage.setItem(
            "userData",
            JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password,
            })
        );

        alert(isLogin ? "Մուտքը հաջողվեց 🚀" : "Գրանցումը հաջողվեց ✅");
        setShowModal(false);
        resetForm();
    };

    const openAuthModal = () => {
        setShowModal(true);
        setMobileMenuOpen(false);
    };

    const goCourses = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className="relative min-h-screen bg-black/90 text-yellow-400 font-sans overflow-x-hidden">


            {/* HEADER */}
            <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-zinc-900 to-black shadow-xl">
                <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg sm:text-2xl font-bold text-yellow-400 tracking-widest hover:text-yellow-300 transition"
                    >
                        ⚡ Outlaw Coding
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-yellow-300 font-extrabold text-lg lg:text-2xl">
                        <Link
                            to="/courses"
                            className="hover:text-yellow-200 transition"
                        >
                            Դասեր
                        </Link>

                        <button
                            onClick={openAuthModal}
                            className="cursor-pointer text-lg lg:text-2xl rounded-2xl px-4 py-2 bg-zinc-900/60 border border-yellow-400/40 shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.03]"
                        >
                            Մուտք
                        </button>
                    </nav>

                    {/* Mobile burger */}
                    <button
                        onClick={() => setMobileMenuOpen((v) => !v)}
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/60 border border-yellow-400/30 hover:border-yellow-400/60 transition"
                        aria-label="Open menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden overflow-hidden border-t border-yellow-400/10"
                        >
                            <div className="px-4 pb-4 pt-3 flex flex-col gap-3">
                                <Link
                                    to="/courses"
                                    onClick={goCourses}
                                    className="w-full text-left rounded-xl px-4 py-3 bg-zinc-900/50 border border-yellow-400/20 hover:border-yellow-400/50 transition text-yellow-200 font-bold"
                                >
                                    Դասեր
                                </Link>

                                <button
                                    onClick={openAuthModal}
                                    className="w-full text-left rounded-xl px-4 py-3 bg-yellow-500 hover:bg-yellow-600 transition text-black font-extrabold"
                                >
                                    Մուտք
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* MAIN */}
            <main className="pt-20 sm:pt-24 overflow-x-hidden relative bg-transparent">


                <Outlet />
            </main>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative bg-zinc-900/80 border border-yellow-400/30 rounded-2xl p-6 sm:p-8 w-full max-w-md text-center shadow-2xl overflow-hidden"
                    >
                        <button
                            onClick={() => {
                                setShowModal(false);
                                resetForm();
                            }}
                            className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-200 transition"
                        >
                            <X size={24} />
                        </button>

                        {/* Եթե էս animation-ը ծանր ա մոբայլի վրա՝ hidden sm:block արա */}
                        <CodeAnimation />

                        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-5 z-10 relative">
                            {isLogin ? "Մուտք" : "Գրանցվել"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-3 text-left z-10 relative">
                            <input
                                type="text"
                                name="username"
                                placeholder="Օգտանուն"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded bg-zinc-800 text-green-400/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            {!isLogin && (
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Էլ․ փոստ"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded bg-zinc-800 text-green-400/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            )}

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Գաղտնաբառ"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded bg-zinc-800 text-green-400/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-11"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-yellow-400 hover:text-yellow-200"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            {!isLogin && (
                                <input
                                    type="password"
                                    name="confirm"
                                    placeholder="Կրկնել գաղտնաբառը"
                                    value={formData.confirm}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded bg-zinc-800 text-green-400/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            )}

                            <label className="flex items-center gap-2 mt-1 select-none">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    className="accent-yellow-400 w-5 h-5"
                                />
                                <span className="text-sm text-zinc-300">Համաձայն եմ պայմաններին</span>
                            </label>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition mt-2"
                            >
                                {isLogin ? "Մուտք գործել" : "Գրանցվել"}
                            </button>
                        </form>

                        <p className="mt-4 text-zinc-400 text-sm">
                            {isLogin ? "Դեռ հաշիվ չունե՞ս" : "Արդեն գրանցվա՞ծ ես"}{" "}
                            <button
                                type="button"
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    resetForm();
                                }}
                                className="text-yellow-400 hover:underline"
                            >
                                {isLogin ? "Գրանցվել" : "Մուտք գործել"}
                            </button>
                        </p>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
