import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function JsCourse() {
    const lessons = [
        { title: "Ներածություն JavaScript-ին", desc: "Ի՞նչ է JavaScript-ը և որտեղ է օգտագործվում։" },
        { title: "Ինչպես է աշխատում JavaScript-ը", desc: "Engine, execution context և call stack։" },
        { title: "Փոփոխականներ և հաստատուններ", desc: "Տվյալների պահպանում ծրագրում։" },
        { title: "Տվյալների տիպեր", desc: "String, Number, Boolean, Null և այլ տիպեր։" },
        { title: "Տիպերի փոխակերպումներ", desc: "Implicit և explicit type conversion։" },
        { title: "Var, Let և Const", desc: "Փոփոխականների հայտարարում և տարբերությունները։" },
        { title: "Օպերատորներ", desc: "Արտահայտություններ և հաշվարկներ JS-ում։" },
        { title: "Պայմաններ", desc: "if, else և switch կառավարման կառուցվածքներ։" },
        { title: "Ցիկլեր", desc: "for, while և do-while կրկնություններ։" },
        { title: "Զանգվածներ (Arrays)", desc: "Տվյալների հավաքածու և մեթոդներ։" },
        { title: "Տողեր (Strings)", desc: "Տեքստի մշակման մեթոդներ։" },
        { title: "Օբյեկտներ (Objects)", desc: "Key-value կառուցվածք և հատկություններ։" },
        { title: "Ֆունկցիաներ", desc: "Reusable կոդ և parameter-ներ։" },
        { title: "Ամսաթվեր (Dates)", desc: "Date օբյեկտ և ժամանակի կառավարում։" },
        { title: "Math մեթոդներ և հատկություններ", desc: "Հաշվարկային գործիքներ JS-ում։" },
        { title: "Hoisting հասկացությունը", desc: "Ինչպես են հայտարարությունները բարձրացվում։" },
        { title: "Scope և ES6 հնարավորություններ", desc: "Block scope և նոր սինտաքս։" },
        { title: "JSON և Arrow Function", desc: "Տվյալների փոխանակում և կարճ ֆունկցիաներ։" },
        { title: "Կլասներ (Classes)", desc: "Օբյեկտային մոտեցում JS-ում։" },
        { title: "Getter և Setter", desc: "Տվյալների վերահսկվող մուտք և փոփոխում։" },
        { title: "Set օբյեկտ", desc: "Յուրահատուկ արժեքների հավաքածու։" },
        { title: "Map օբյեկտ", desc: "Key-value կառուցվածք լայն հնարավորություններով։" },
        { title: "Ռեկուրսիա (Recursion)", desc: "Ֆունկցիայի ինքն իրեն կանչում։" },
        { title: "Prototype", desc: "Ժառանգականություն JS-ում։" },
        { title: "DOM մանիպուլյացիա", desc: "HTML-ի փոփոխում JavaScript-ով։" },
        { title: "Try...Catch...Finally", desc: "Սխալների կառավարում։" },
        { title: "Մոդուլներ (Modules)", desc: "Կոդի բաժանում և import/export։" },
        { title: "Լռելյայն պարամետրեր", desc: "Default parameter-ներ ֆունկցիաներում։" },
        { title: "Template Literals", desc: "Տեքստի ժամանակակից ձևավորում։" },
        { title: "Rest և Spread օպերատորներ", desc: "Տվյալների տարածում և միավորում։" },
        { title: "Destructuring assignment", desc: "Արժեքների արագ քանդում օբյեկտներից։" },
        { title: "setTimeout() ֆունկցիա", desc: "Ժամանակային ուշացում ծրագրում։" },
        { title: "Callback ֆունկցիա", desc: "Ֆունկցիա որպես արգումենտ։" },
        { title: "Promise և Promise chaining", desc: "Asynchronous ծրագրավորում։" },
        { title: "Async / Await", desc: "Ժամանակակից async սինտաքս։" },
        { title: "setInterval() ֆունկցիա", desc: "Կրկնվող գործողություններ ժամանակի ընթացքում։" },
        { title: "Փակման ֆունկցիաներ (Closures)", desc: "Scope-ի խորացված հասկացություն։" },
        { title: "Regex և Debugging", desc: "Տեքստի որոնում և սխալների հայտնաբերում։" },
        { title: "Օբյեկտային ծրագրավորում (OOP)", desc: "Class, inheritance և encapsulation։" },
        { title: "Իվենթներ (Events)", desc: "User interaction և event handling։" },
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

            <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col">
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
                    transition={{ duration: 0.65 }}
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 sm:mb-6"
                >
                    JavaScript Դասընթաց ⚡
                </motion.h1>

                <div className="flex-1 min-h-0">
                    <div className="nice-scroll h-full overflow-y-auto overflow-x-hidden pr-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-2">
                            {lessons.map((lesson, index) => (
                                <motion.div
                                    key={index}
                                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: reduceMotion ? 0 : Math.min(index * 0.015, 0.25),
                                    }}
                                    className="bg-zinc-900/70 border border-yellow-400/30 p-4 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    <h2 className="text-sm sm:text-base md:text-lg font-bold text-yellow-300 mb-2">
                                        {lesson.title}
                                    </h2>
                                    <p className="text-zinc-300 text-xs sm:text-sm leading-snug">
                                        {lesson.desc}
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
