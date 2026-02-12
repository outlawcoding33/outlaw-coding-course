import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-yellow-400 px-6">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Օգնություն ❓
      </motion.h1>

      <motion.p
        className="text-zinc-300 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Եթե դժվարանում ես գտնել ուղին, միշտ կարող ես դիմել մեզ։
        Մենք կօգնենք քեզ հասկանալ յուրաքանչյուր դասընթացի կառուցվածքը և հաջորդ քայլերը։
      </motion.p>

      <Link
        to="/"
        className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition"
      >
        Վերադառնալ Գլխավոր
      </Link>
    </div>
  );
}
