import { motion, useReducedMotion } from "framer-motion";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function ReactCourse() {
    const lessons = [
        "Սկիզբ React-ի հետ",
        "Կոմպոնենտների ըմբռնում",
        "Props-երի օգտագործում կոմպոնենտներում",
        "Ձևավորում և մեդիա",
        "Ներածություն Hooks-երին",
        "Աշխատանք Effects-ի հետ",
        "Դինամիկ արտապատկերում",
        "Routing React-ում",
        "Կլաս կոմպոնենտներ React-ում",
        "Կյանքի ցիկլի մեթոդներ (Lifecycle Methods)",
        "State-ի կառավարում React-ում",
        "Բարձր մակարդակի կոմպոնենտներ (HOCs)",
        "Սխալների կառավարում React-ում",
        "Լրացուցիչ Hooks․ useState և useEffect-ից դուրս",
        "Արտադրողականության օպտիմիզացում React-ում",
    ];

    const reduceMotion = useReducedMotion();

    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col items-center text-center px-4 sm:px-6 py-10 pt-24 overflow-hidden">
            {/* Background animation */}
            <CodeAnimation />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl">
                <motion.h1
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 sm:mb-12 text-yellow-400"
                >
                    React Դասընթաց ⚛️
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                    {lessons.map((lesson, index) => (
                        <motion.div
                            key={index}
                            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.35,
                                delay: reduceMotion ? 0 : Math.min(index * 0.02, 0.3),
                            }}
                            className="bg-zinc-900/70 border border-yellow-400/30 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                        >
                            <h2 className="text-sm sm:text-base md:text-lg font-bold text-yellow-300">
                                {lesson}
                            </h2>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
