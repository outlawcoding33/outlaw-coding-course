import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function TailwindCourse() {
    const tailwindLessons = [
        {
            id: 1,
            title: "Tailwind ներածություն և Layout-ի ձևավորում",
            description:
                "Ինչ է Tailwind-ը, utility դասեր և հիմնական layout կառուցվածք։",
        },
        {
            id: 2,
            title: "Տարածություն (Spacing)",
            description:
                "Margin, padding և spacing scale համակարգ Tailwind-ում։",
        },
        {
            id: 3,
            title: "Վեբ դիզայն Tailwind CSS-ով",
            description:
                "Ժամանակակից UI կառուցում utility-first մոտեցմամբ։",
        },
        {
            id: 4,
            title: "Flex և Grid",
            description:
                "Flexbox և Grid դասավորություն Tailwind դասերով։",
        },
        {
            id: 5,
            title: "Responsive դասեր և Modal",
            description:
                "Responsive breakpoints և Modal բաղադրիչի ստեղծում։",
        },
        {
            id: 6,
            title: "Կարգավորումներ, ֆունկցիաներ և հրահանգներ",
            description:
                "Tailwind config, custom theme և plugin-ների օգտագործում։",
        },
        {
            id: 7,
            title: "Tailwind Նախագիծ․ Պորտֆոլիո կայք",
            description:
                "Գործնական նախագիծ՝ անձնական պորտֆոլիո կայքի ստեղծում։",
        },
        {
            id: 8,
            title: "Tailwind Նախագիծ․ Landing էջ",
            description:
                "Landing էջ՝ հերո, սերվիս, կոնտակտ բաժիններով։",
        },
    ];

    const reduceMotion = useReducedMotion();
    const navigate = useNavigate();

    return (
        <section
            className="
        relative w-full overflow-hidden
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
                        onClick={() =>
                            window.history.length > 1
                                ? navigate(-1)
                                : navigate("/courses")
                        }
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/70 border border-yellow-400/40 text-yellow-300 hover:text-yellow-200 hover:shadow-yellow-400/20 shadow transition"
                    >
                        <span className="text-xl leading-none">←</span>
                        <span className="text-sm font-semibold">Հետ</span>
                    </button>
                </div>

                {/* Title */}
                <motion.h2
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 sm:mb-6"
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Tailwind CSS Դասընթաց 💨
                </motion.h2>

                <div className="flex-1 min-h-0">
                    <div
                        className="nice-scroll h-full overflow-y-auto sm:overflow-hidden overflow-x-hidden pr-2"
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-2">
                            {tailwindLessons.map((lesson, index) => (
                                <motion.div
                                    key={lesson.id}
                                    className="
                    bg-zinc-900/70 border border-yellow-400/30
                    p-4 rounded-2xl shadow-lg
                    hover:shadow-yellow-400/30 transition-all duration-300
                    hover:scale-[1.01] active:scale-[0.99]
                  "
                                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.28,
                                        delay: reduceMotion ? 0 : Math.min(index * 0.05, 0.22),
                                    }}
                                >
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-400 mb-2">
                                        {lesson.title}
                                    </h3>

                                    <p className="text-zinc-300 leading-snug text-xs sm:text-sm">
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
