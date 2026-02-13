import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function JsCourse() {
    const lessons = [
        "Ներածություն JavaScript-ին",
        "Ինչպես է աշխատում JavaScript-ը",
        "Փոփոխականներ և հաստատուններ",
        "Տվյալների տիպեր",
        "Տիպերի փոխակերպումներ",
        "Var, Let և Const",
        "Օպերատորներ",
        "Պայմաններ",
        "Ցիկլեր",
        "Զանգվածներ (Arrays)",
        "Տողեր (Strings)",
        "Օբյեկտներ (Objects)",
        "Ֆունկցիաներ",
        "Ամսաթվեր (Dates)",
        "Math մեթոդներ և հատկություններ",
        "Hoisting հասկացությունը",
        "Scope և ES6 հնարավորություններ",
        "JSON և Arrow Function",
        "Կլասներ (Classes)",
        "Getter և Setter",
        "Set օբյեկտ",
        "Map օբյեկտ",
        "Ռեկուրսիա (Recursion)",
        "Prototype",
        "DOM մանիպուլյացիա",
        "Try...Catch...Finally",
        "Մոդուլներ (Modules)",
        "Լռելյայն պարամետրեր",
        "Template Literals",
        "Rest և Spread օպերատորներ",
        "Destructuring assignment",
        "setTimeout() ֆունկցիա",
        "Callback ֆունկցիա",
        "Promise և Promise chaining",
        "Async / Await",
        "setInterval() ֆունկցիա",
        "Փակման ֆունկցիաներ (Closures)",
        "Regex և Debugging",
        "Օբյեկտային ծրագրավորում (OOP)",
        "Իվենթներ (Events)",
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

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col">
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

                {/* Title (մի քիչ կոմպակտ, որ վերև լինի) */}
                <motion.h1
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-3 sm:mb-5"
                >
                    JavaScript Դասընթաց ⚡
                </motion.h1>

                {/* ✅ Scroll only here, not body */}
                <div className="flex-1 min-h-0">
                    <div className="nice-scroll h-full overflow-y-auto overflow-x-hidden pr-2 [scrollbar-gutter:stable]">

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 pb-2">
                            {lessons.map((lesson, index) => (
                                <motion.div
                                    key={index}
                                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: reduceMotion ? 0 : Math.min(index * 0.015, 0.25),
                                    }}
                                    className="bg-zinc-900/70 border border-yellow-400/30 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    <h2 className="text-sm sm:text-base md:text-lg font-bold text-yellow-300">
                                        {lesson}
                                    </h2>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
