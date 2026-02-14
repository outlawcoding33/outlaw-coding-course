import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function ReactCourse() {
    const lessons = [
        { title: "Սկիզբ React-ի հետ", desc: "Ինչ է React-ը և ինչպես է աշխատում։" },
        { title: "Կոմպոնենտների ըմբռնում", desc: "Functional և reusable կոմպոնենտներ։" },
        { title: "Props-երի օգտագործում կոմպոնենտներում", desc: "Տվյալների փոխանցում ծնողից երեխա։" },
        { title: "Ձևավորում և մեդիա", desc: "CSS, Tailwind և մեդիա ինտեգրում։" },
        { title: "Ներածություն Hooks-երին", desc: "useState, useEffect հիմունքներ։" },
        { title: "Աշխատանք Effects-ի հետ", desc: "Lifecycle և side effect կառավարում։" },
        { title: "Դինամիկ արտապատկերում", desc: "Conditional rendering և map մեթոդ։" },
        { title: "Routing React-ում", desc: "React Router և էջերի անցում։" },
        { title: "Կլաս կոմպոնենտներ React-ում", desc: "Class syntax և state կառավարում։" },
        { title: "Կյանքի ցիկլի մեթոդներ", desc: "Mount, update և unmount փուլեր։" },
        { title: "State-ի կառավարում React-ում", desc: "Local state և state flow։" },
        { title: "Բարձր մակարդակի կոմպոնենտներ (HOCs)", desc: "Component wrapping և վերօգտագործում։" },
        { title: "Սխալների կառավարում React-ում", desc: "Error boundary և try/catch մոտեցում։" },
        { title: "Լրացուցիչ Hooks", desc: "useRef, useMemo, useCallback և այլ։" },
        { title: "Արտադրողականության օպտիմիզացում", desc: "Re-render նվազեցում և memoization։" },
    ];

    const reduceMotion = useReducedMotion();
    const navigate = useNavigate();

    const items = [...lessons, { title: "Քննություն ✅", desc: "Սկսել React քննությունը։", exam: true }];

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

            <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col">
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

                <motion.h1
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4"
                >
                    React Դասընթաց ⚛️
                </motion.h1>

                <div className="flex-1 min-h-0">
                    <div className="nice-scroll h-full overflow-y-auto sm:overflow-hidden overflow-x-hidden pr-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-2">
                            {items.map((lesson, index) => {
                                const isExam = lesson.exam;

                                return (
                                    <motion.button
                                        key={lesson.title + index}
                                        type="button"
                                        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.28,
                                            delay: reduceMotion ? 0 : Math.min(index * 0.03, 0.22),
                                        }}
                                        className={`
                      text-left rounded-2xl shadow-lg transition-all duration-300
                      active:scale-[0.99] hover:shadow-yellow-400/30 hover:scale-[1.01]
                      border p-4
                      ${isExam
                                                ? "bg-yellow-500/15 border-yellow-400/70"
                                                : "bg-zinc-900/70 border-yellow-400/30"
                                            }
                    `}
                                        onClick={() => {
                                            if (isExam) {
                                                alert("Քննությունը շուտով 🧠✅");
                                            }
                                        }}
                                    >
                                        <h2 className="text-sm sm:text-base font-bold text-yellow-300 mb-2 leading-snug">
                                            {lesson.title}
                                        </h2>

                                        <p className="text-zinc-300 text-xs sm:text-sm leading-snug">
                                            {lesson.desc}
                                        </p>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
