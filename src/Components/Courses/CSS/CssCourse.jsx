import CodeAnimation from "../../Animation/CodeAnimation";
import { useNavigate } from "react-router-dom";

const cssLessons = [
    {
        title: "Ներածություն",
        desc: "Ի՞նչ է CSS-ը և ինչպես է այն ձևավորում HTML էջերը։",
    },
    {
        title: "Գույներ, ֆոներ, սահմաններ և չափեր",
        desc: "Color, background, border և չափման միավորներ։",
    },
    {
        title: "Տուփի մոդել",
        desc: "Margin, padding, border և content-ի փոխազդեցություն։",
    },
    {
        title: "Տեքստի ձևավորում",
        desc: "Տեքստի գույն, հարթեցում, տարածություն և ձևավորում։",
    },
    {
        title: "Տառատեսակներ",
        desc: "Font-family, size, weight և Google Fonts օգտագործում։",
    },
    {
        title: "Տեսողական էֆեկտներ",
        desc: "Shadow, opacity, gradient և ժամանակակից էֆեկտներ։",
    },
    {
        title: "Ձևեր և դասավորություն",
        desc: "Block, inline, inline-block և layout հիմունքներ։",
    },
    {
        title: "Ցուցակներ, փոփոխականներ և ֆունկցիաներ",
        desc: "CSS Variables և հաշվարկային ֆունկցիաներ։",
    },
    {
        title: "Տուփերի չափեր և Object Fit",
        desc: "Width, height, max/min և պատկերների կառավարում։",
    },
    {
        title: "Ցուցադրում և դիրքավորում",
        desc: "Relative, absolute, fixed և z-index։",
    },
    {
        title: "Անիմացիաներ և անցումներ",
        desc: "Transition և keyframe animation ստեղծում։",
    },
    {
        title: "Հարմարվող դիզայն",
        desc: "Media query-ներ և responsive կառուցվածք։",
    },
    {
        title: "Սյուներ և Flexbox մոդել",
        desc: "Flex container և element-ների դասավորություն։",
    },
    {
        title: "Ցանցային դասավորություն",
        desc: "CSS Grid-ով բարդ layout-ների ստեղծում։",
    },
    {
        title: "CSS Թեստ/Քվիզ",
        desc: "Ստուգում ենք գիտելիքները գործնական հարցերով։",
    },
    {
        title: "YouTube կլոն ինտերֆեյս",
        desc: "Գործնական նախագիծ՝ YouTube-ի UI կրկնօրինակում։",
    },
    {
        title: "Նավբար, Հերո և Սերվիս բաժիններ",
        desc: "Ժամանակակից landing page հատվածների ստեղծում։",
    },
    {
        title: "Կոնտակտ, Թեստիմոնիալ և Footer բաժիններ",
        desc: "Կայքի վերջնական կառուցվածքի ձևավորում։",
    },
    {
        title: "Ամփոփում",
        desc: "Վերանայում ենք CSS-ի հիմնական հասկացությունները։",
    },
    {
        title: "Քննություն",
        desc: "Վերջնական առաջադրանք և գնահատում։",
    },
];

export default function CssCourse() {
    const navigate = useNavigate();

    return (
        <section
            className="
        relative w-full overflow-hidden
        h-[calc(100dvh-80px)] sm:h-[calc(100dvh-96px)]
        px-4 sm:px-6 pt-5 sm:pt-6 pb-5 sm:pb-6
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

                {/* Title */}
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 sm:mb-6">
                    CSS Դասընթաց 🎨
                </h2>

                <div className="flex-1 min-h-0">
                    <div className="nice-scroll h-full overflow-y-auto sm:overflow-hidden overflow-x-hidden pr-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {cssLessons.map((lesson, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="
                    text-left bg-zinc-900/70 border border-yellow-400/30
                    rounded-2xl shadow-lg transition-all duration-300
                    hover:shadow-yellow-400/30 hover:scale-[1.01] active:scale-[0.99]
                    p-4
                  "
                                >
                                    <h3 className="font-semibold text-yellow-400 text-sm sm:text-base mb-2 leading-snug">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                                        {lesson.desc}
                                    </p>
                                </button>
                            ))}
                        </div>
                        <div className="h-2 sm:hidden" />
                    </div>
                </div>
            </div>
        </section>
    );
}
