import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, X } from "lucide-react";
import CodeAnimation from "../Animation/CodeAnimation";

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
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
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
            alert(
                "Գաղտնաբառը պետք է պարունակի առնվազն 8 նիշ, մեկ մեծատառ, թիվ և հատուկ նշան։"
            );
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
        setFormData({
            username: "",
            email: "",
            password: "",
            confirm: "",
            agree: false,
        });
    };

    const menuItems = [
        { title: "Դասեր", path: "/courses" },
        { title: "Մուտք", action: () => setShowModal(true) },
    ];

    return (
        <div className="relative min-h-screen bg-black/90 text-yellow-400 font-sans overflow-hidden">
            <header className="flex justify-between items-center px-10 py-6 bg-gradient-to-r from-black via-zinc-900 to-black shadow-xl fixed top-0 left-0 w-full z-50">
                <Link
                    to="/"
                    className="text-2xl font-bold text-yellow-400 tracking-widest hover:text-yellow-300 transition"
                >
                    ⚡ Outlaw Coding
                </Link>

                <nav className="flex gap-10 text-yellow-300 font-extrabold text-2xl ">
                    {menuItems.map((item, i) => (
                        <div key={i}>
                            {item.path ? (
                                <Link className=" border-yellow-400/40  shadow-lg hover:shadow-yellow-400/30   hover:scale-105" to={item.path}>{item.title}</Link>
                            ) : (
                                <button
                                    onClick={item.action}
                                    className="hover:text-yellow-400  cursor-pointer  text-2xl rounded-4xl w-[120px] h-[40px] 
                                    bg-zinc-900/60 border border-yellow-400/40  shadow-lg hover:shadow-yellow-400/30 transition-all duration-500 hover:scale-105">
                                    {item.title}
                                </button>
                            )}
                        </div>
                    ))}
                </nav>
            </header>

            <main className="pt-28 min-h-screen overflow-y-auto relative bg-transparent">
                <Outlet />
            </main>

            {showModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative bg-zinc-900/80 border border-yellow-400/30 rounded-2xl p-8 w-full max-w-md text-center shadow-2xl"
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-200 transition"
                        >
                            <X size={26} />
                        </button>

                        <CodeAnimation />
                        <h2 className=" text-3xl font-bold text-yellow-400 mb-6 z-10 relative">
                            {isLogin ? "Մուտք" : "Գրանցվել"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4 text-left z-10 relative">
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Օգտանուն"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded bg-zinc-800 text-green-400/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            {!isLogin && (
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Էլ․ փոստ"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded bg-zinc-800 text-green-400/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>
                            )}

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Գաղտնաբառ"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded bg-zinc-800 text-green-400/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-yellow-400 cursor-pointer"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </span>
                            </div>

                            {!isLogin && (
                                <div>
                                    <input
                                        type="password"
                                        name="confirm"
                                        placeholder="Կրկնել գաղտնաբառը"
                                        value={formData.confirm}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded bg-zinc-800 text-green-400/80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>
                            )}

                            <div className="flex items-center space-x-2 mt-2">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    className="accent-yellow-400 w-5 h-5"
                                />
                                <label className="text-sm text-zinc-300">
                                    Համաձայն եմ պայմաններին
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition mt-3"
                            >
                                {isLogin ? "Մուտք գործել" : "Գրանցվել"}
                            </button>
                        </form>

                        <p className="mt-4 text-zinc-400 text-sm">
                            {isLogin ? "Դեռ հաշիվ չունե՞ս" : "Արդեն գրանցվա՞ծ ես"}{" "}
                            <span
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-yellow-400 hover:underline cursor-pointer"
                            >
                                {isLogin ? "Գրանցվել" : "Մուտք գործել"}
                            </span>
                        </p>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
