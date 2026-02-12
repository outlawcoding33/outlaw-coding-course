import React from "react";
import { motion } from "framer-motion";
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

    return (
        <section className="relative h-[80vh] w-full flex flex-col items-center justify-start text-center px-6 py-16">
            <CodeAnimation />
            <motion.h2
                className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Tailwind CSS Դասընթաց 💨
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
                {tailwindLessons.map((lesson, index) => (
                    <motion.div
                        key={lesson.id}
                        className="bg-zinc-900/70 border border-yellow-400/30 p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-500 hover:scale-105"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
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
