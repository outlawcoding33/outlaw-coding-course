import React from "react";
import { motion } from "framer-motion";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function GitHubCourse() {
    const gitLessons = [
        {
            id: 1,
            title: "Git-ի հիմունքներ 🧩",
            description:
                "Իմացիր Git-ի հիմնական հրամանները՝ init, add, commit, status, log։ Սովորիր, թե ինչպես կարելի է պահպանել քո նախագծերի տարբերակները։",
        },
        {
            id: 2,
            title: "Ճյուղավորում և միավորում 🌿",
            description:
                "Սովորիր ինչպես ստեղծել նոր ճյուղեր (branches), աշխատել անկախ կոդով և միավորել փոփոխությունները (merge) հիմնական նախագծի մեջ։",
        },
    ];

    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col items-center text-center px-4 sm:px-6 py-10 pt-24 overflow-hidden">
            {/* Background animation */}
            <CodeAnimation />

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    GitHub Դասընթաց 🧠
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
                    {gitLessons.map((lesson, index) => (
                        <motion.div
                            key={lesson.id}
                            className="bg-zinc-900/70 border border-yellow-400/30 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-yellow-400/20 transition duration-300"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.45 }}
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-3">
                                {lesson.title}
                            </h3>
                            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
                                {lesson.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
