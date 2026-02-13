import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function TailwindCourse() {
    const tailwindLessons = [
        { id: 1, title: "Tailwind ներածություն և Layout-ի ձևավորում", description: "" },
        { id: 2, title: "Տարածություն (Spacing)", description: "" },
        { id: 3, title: "Վեբ դիզայն Tailwind CSS-ով", description: "" },
        { id: 4, title: "Flex և Grid", description: "" },
        { id: 5, title: "Responsive դասեր և Modal", description: "" },
        { id: 6, title: "Կարգավորումներ, ֆունկցիաներ և հրահանգներ", description: "" },
        { id: 7, title: "Tailwind Նախագիծ․ Պորտֆոլիո կայք", description: "" },
        { id: 8, title: "Tailwind Նախագիծ․ Landing էջ", description: "" },
    ];

    const reduceMotion = useReducedMotion();

    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col items-center text-center px-4 sm:px-6 py-10 pt-24 overflow-hidden">
            {/* Background */}
            <CodeAnimation />

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-8 sm:mb-12"
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Tailwind CSS Դասընթաց 💨
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {tailwindLessons.map((lesson, index) => (
                        <motion.div
                            key={lesson.id}
                            className="bg-zinc-900/70 border border-yellow-400/30 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.35,
                                delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.3),
                            }}
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-2 sm:mb-3">
                                {lesson.title}
                            </h3>

                            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
                                {lesson.description || "Շուտով կավելացնենք այս դասի նյութերը։"}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
