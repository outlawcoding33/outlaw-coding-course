import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    // ✅ 16-րդը՝ քննություն
    const items = [...lessons, "Քննություն ✅"];

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
                        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/courses"))}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/70 border border-yellow-400/40 text-yellow-300 hover:text-yellow-200 hover:shadow-yellow-400/20 shadow transition"
                    >
                        <span className="text-xl leading-none">←</span>
                        <span className="text-sm font-semibold">Հետ</span>
                    </button>
                </div>

                {/* Title */}
                <motion.h1
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-3 sm:mb-4"
                >
                    React Դասընթաց ⚛️
                </motion.h1>

                {/* Content */}
                <div className="flex-1 min-h-0">
                    {/* Mobile: scroll, Desktop: no scroll */}
                    <div
                        className="
              nice-scroll h-full
              overflow-y-auto sm:overflow-hidden
              overflow-x-hidden pr-2
            "
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        {/* ✅ Desktop grid: միշտ 4x4 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pb-2">
                            {items.map((lesson, index) => {
                                const isExam = lesson.includes("Քննություն");

                                return (
                                    <motion.button
                                        key={lesson + index}
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
                                                // եթե ուզում ես՝ այստեղ տանի /courses/react/exam կամ բացի modal
                                                // navigate("/courses/react/exam");
                                                alert("Քննությունը շուտով 🧠✅");
                                            }
                                        }}
                                    >
                                        <h2 className={`text-xs sm:text-sm md:text-base font-bold leading-snug ${isExam ? "text-yellow-300" : "text-yellow-300"}`}>
                                            {lesson}
                                        </h2>
                                        {isExam && (
                                            <p className="text-zinc-300 text-[11px] sm:text-xs mt-2">
                                                Սկսել React քննությունը։
                                            </p>
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Եթե մի օր items-ը պակաս լինի 16-ից՝ այս placeholder-ները լրացնում են 4x4-ը */}
                        {items.length < 16 && (
                            <div className="hidden md:grid grid-cols-4 gap-3 sm:gap-4">
                                {Array.from({ length: 16 - items.length }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl border border-yellow-400/10 bg-zinc-900/20 p-4 opacity-40"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
