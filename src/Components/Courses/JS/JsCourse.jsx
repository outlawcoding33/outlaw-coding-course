import { motion } from "framer-motion";
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
        "Իվենթներ (Events)"
    ];

    return (
        <div className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 py-10 mb-10">
            <CodeAnimation />
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-extrabold text-center mb-16 text-yellow-400"
            >
                JavaScript Դասընթաց ⚡
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
                {lessons.map((lesson, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-zinc-900/70 border border-yellow-400/30 p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-500 hover:scale-105"
                    >
                        <h2 className="text-lg font-bold text-yellow-300">{lesson}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
