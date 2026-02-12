import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CodeAnimation from "../Animation/CodeAnimation";

export default function Login() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start text-center px-6 py-16">
      <CodeAnimation />
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Մուտք
      </motion.h1>

      <form className="bg-zinc-900/60 border border-yellow-400/40 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Օգտանուն"
          className="w-full mb-4 px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="password"
          placeholder="Գաղտնաբառ"
          className="w-full mb-6 px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition">
          Մուտք գործել
        </button>
      </form>

      <Link
        to="/"
        className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition"
      >
        Վերադառնալ Գլխավոր
      </Link>
    </div>
  );
}
