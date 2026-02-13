import CodeAnimation from "../../Animation/CodeAnimation";

const htmlLessons = [
    "Ներածություն HTML-ին",
    "HTML ձևավորում (Styling)",
    "HTML Մուլտիմեդիա",
    "Ցանկեր և Աղյուսակներ",
    "HTML Ձևեր (Forms)",
    "Սեմանտիկ էլեմենտներ",
    "HTML Նախագիծ՝ Անձնական բլոգ",
    "Ամփոփում",
];

export default function HtmlCourse() {
    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col items-center text-center px-4 sm:px-6 py-10 pt-24 overflow-hidden">
            {/* Background animation */}
            <CodeAnimation />

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-8 sm:mb-10">
                    HTML Դասընթաց 💡
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {htmlLessons.map((lesson, index) => (
                        <button
                            key={index}
                            type="button"
                            className="text-left bg-zinc-900/70 border border-yellow-400/30 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                        >
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-yellow-400 mb-2">
                                {lesson}
                            </h3>
                            <p className="text-zinc-300 text-xs sm:text-sm">
                                Կարդա և սովորիր այս դասում ներկայացված թեման։
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
