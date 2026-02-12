import { motion } from "framer-motion";
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
        "Արտադրողականության օպտիմիզացում React-ում"
    ];

    return (
        <div className="relative flex flex-col items-center justify-center text-center h-[75vh] px-6 py-10 mb-10">
            <CodeAnimation />
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-extrabold text-center mb-16 text-yellow-400"
            >
                React Դասընթաց ⚛️
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
                {lessons.map((lesson, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-zinc-900/70 border border-yellow-400/30 p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-500 hover:scale-105"
                    >
                        <h2 className="text-lg font-bold text-yellow-300">{lesson}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
