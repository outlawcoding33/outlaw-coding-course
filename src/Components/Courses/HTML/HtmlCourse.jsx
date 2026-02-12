import { useEffect } from "react";
import CodeAnimation from "../../Animation/CodeAnimation";

const htmlLessons = [
    "Ներածություն HTML-ին",
    "HTML ձևավորում (Styling)",
    "HTML Մուլտիմեդիա",
    "Ցանկեր և Աղյուսակներ",
    "HTML Ձևեր (Forms)",
    "Սեմանտիկ էլեմենտներ",
    "HTML Նախագիծ՝ Անձնական բլոգ",
    "Ամնփոփումգ"

];

export default function HtmlCourse() {
    useEffect(() => {
        document.body.style.overflow = "auto";
    }, []);

    return (
<section className="relative flex flex-col items-center justify-center text-center h-[70vh] px-6 py-10 mb-10">
            <CodeAnimation />
            <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-10 z-10">
                HTML Դասընթաց 💡
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10 w-full max-w-6xl">
                {htmlLessons.map((lesson, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900/70 border border-yellow-400/30 p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-500 hover:scale-105"
                    >
                        <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-2">
                            {lesson}
                        </h3>
                        <p className="text-zinc-300 text-sm">
                            Կարդա և սովորիր այս դասում ներկայացված թեման։
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
