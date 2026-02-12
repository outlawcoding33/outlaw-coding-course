import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-yellow-400 px-6">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Մեր Մասին
      </motion.h1>

      <motion.p
        className="text-lg text-zinc-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Մենք՝ <span className="text-yellow-500 font-semibold">CodeMaster</span>-ում,
        հավատում ենք, որ յուրաքանչյուր ոք կարող է դառնալ հզոր ծրագրավորող՝ ճիշտ ուղեցույցով և միջավայրով։
        Սովորիր, զարգացիր և ստեղծիր ապագան՝ մեկ տող կոդով։
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
