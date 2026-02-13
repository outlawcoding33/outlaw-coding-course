import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function GitHubCourse() {
    const navigate = useNavigate();

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
        <section
            className="
        relative w-full
        overflow-hidden
        h-[calc(100dvh-80px)] sm:h-[calc(100dvh-96px)]
        px-4 sm:px-6
        pt-5 sm:pt-6 pb-5 sm:pb-6
      "
        >
            <CodeAnimation />

            <div className="relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col">
                {/* Back */}
                <div className="w-full flex justify-start mb-3 sm:mb-4">
                    <button
                        type="button"
                        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/courses"))}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/70 border border-yellow-400/40 text-yellow-300 hover:text-yellow-200 hover:shadow-yellow-400/20 shadow transition"
                    >
                        <span className="text-xl leading-none">←</span>
                        <span className="text-sm font-semibold">Հետ</span>
                    </button>
                </div>

                {/* Title */}
                <motion.h2
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    GitHub Դասընթաց 🧠
                </motion.h2>

                {/* Content area */}
                <div className="flex-1 min-h-0">
                    {/* ✅ Mobile scroll, Desktop no scroll */}
                    <div className="h-full overflow-y-auto sm:overflow-hidden overflow-x-hidden pr-1">
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
                </div>
            </div>
        </section>
    );
}
