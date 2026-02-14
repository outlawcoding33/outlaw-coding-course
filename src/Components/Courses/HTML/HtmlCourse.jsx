import CodeAnimation from "../../Animation/CodeAnimation";
import { useNavigate } from "react-router-dom";

const htmlLessons = [
    {
        title: "Ներածություն HTML-ին",
        desc: "Ծանոթացում HTML լեզվին, կառուցվածքին և ինչպես է աշխատում բրաուզերում։",
        link: "/src/Components/LastCourses/HTML/HtmlDay1.jsx",
    },
    {
        title: "HTML ձևավորում (Styling)",
        desc: "Ի՞նչ է style ատրիբուտը, ինչպես ձևավորել տեքստ, գույն և ֆոն։",
        link: "/src/Components/LastCourses/HTML/HtmlDay2.jsx",

    },
    {
        title: "HTML Մուլտիմեդիա",
        desc: "Նկարներ, վիդեո և աուդիո ավելացնել կայքում ճիշտ ձևով։",
    },
    {
        title: "Ցանկեր և Աղյուսակներ",
        desc: "Ordered/Unordered list-եր և տվյալների աղյուսակների կառուցում։",
    },
    {
        title: "HTML Ձևեր (Forms)",
        desc: "Input-ներ, textarea, button և տվյալների հավաքում օգտատերից։",
    },
    {
        title: "Սեմանտիկ էլեմենտներ",
        desc: "Header, section, article և SEO-ի համար ճիշտ կառուցվածք։",
    },
    {
        title: "HTML Նախագիծ՝ Անձնական բլոգ",
        desc: "Գործնական նախագիծ՝ ստեղծում ենք փոքր բլոգի էջ։",
    },
    {
        title: "Ամփոփում",
        desc: "Վերանայում ենք սովորածը և պատրաստվում հաջորդ փուլին։",
    },
];

export default function HtmlCourse() {
    const navigate = useNavigate();

    return (
        <section
            className="
        relative w-full
        overflow-hidden
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
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 sm:mb-6">
                    HTML Դասընթաց 💡
                </h2>

                {/* Grid */}
                <div className="flex-1 min-h-0">
                    <div className="h-full overflow-y-auto sm:overflow-hidden overflow-x-hidden pr-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                            {htmlLessons.map((lesson, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => navigate(lesson.link)}
                                    className="text-left bg-zinc-900/70 border border-yellow-400/30 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-yellow-400 mb-2">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                                        {lesson.desc}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
