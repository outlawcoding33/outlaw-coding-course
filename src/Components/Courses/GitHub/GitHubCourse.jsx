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
        <section className="relative flex flex-col items-center justify-center text-center h-[70vh] px-6 py-10 mb-10 w-full">
            <CodeAnimation />

            <motion.h2
                className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                GitHub Դասընթաց 🧠
            </motion.h2>

            <div className=" cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl">
                {gitLessons.map((lesson, index) => (
                    <motion.div
                        key={lesson.id}
                        className="bg-zinc-900/70 border border-yellow-400/30 rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/20 transition duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                            {lesson.title}
                        </h3>
                        <p className="text-zinc-300 leading-relaxed text-lg">
                            {lesson.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
