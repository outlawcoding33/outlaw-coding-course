import CodeAnimation from "../../Animation/CodeAnimation";
import { useNavigate } from "react-router-dom";

const cssLessons = [
    "Ներածություն",
    "Գույներ, ֆոներ, սահմաններ և չափեր",
    "Տուփի մոդել",
    "Տեքստի ձևավորում",
    "Տառատեսակներ",
    "Տեսողական էֆեկտներ",
    "Ձևեր և դասավորություն",
    "Ցուցակներ, փոփոխականներ և ֆունկցիաներ",
    "Տուփերի չափեր և Object Fit",
    "Ցուցադրում և դիրքավորում",
    "Անիմացիաներ և անցումներ",
    "Հարմարվող դիզայն",
    "Սյուներ և Flexbox մոդել",
    "Ցանցային դասավորություն",
    "CSS Թեստ/Քվիզ",
    "YouTube կլոն ինտերֆեյս",
    "Նավբար, Հերո և Սերվիս բաժիններ",
    "Կոնտակտ, Թեստիմոնիալ և Footer բաժիններ",
    "Ամփոփում",
    "Քննություն",
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
                        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/courses"))}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/70 border border-yellow-400/40 text-yellow-300 hover:text-yellow-200 hover:shadow-yellow-400/20 shadow transition"
                    >
                        <span className="text-xl leading-none">←</span>
                        <span className="text-sm font-semibold">Հետ</span>
                    </button>
                </div>

                {/* Title */}
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-3 sm:mb-5">
                    CSS Դասընթաց 🎨
                </h2>

                {/* Grid area */}
                <div className="flex-1 min-h-0">
                    {/* ✅ Mobile: scroll (գեղեցիկ), Desktop: no scroll */}
                    <div
                        className="
              nice-scroll h-full
              overflow-y-auto sm:overflow-hidden
              overflow-x-hidden pr-2
            "
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                            {cssLessons.map((lesson, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="
                    text-center bg-zinc-900/70 border border-yellow-400/30
                    rounded-2xl shadow-lg transition-all duration-300
                    hover:shadow-yellow-400/30 hover:scale-[1.01] active:scale-[0.99]
                    px-3 py-3 sm:px-4 sm:py-4 lg:px-4 lg:py-4
                  "
                                >
                                    {/* desktop-ում տեքստը մի քիչ փոքրացնենք, որ տեղավորվի */}
                                    <h3 className="font-semibold text-yellow-400 text-sm sm:text-base lg:text-[15px] leading-snug">
                                        {lesson}
                                    </h3>
                                </button>
                            ))}
                        </div>

                        {/* փոքր ներքևի padding որ mobile scroll-ը “հարմար” լինի */}
                        <div className="h-2 sm:hidden" />
                    </div>
                </div>
            </div>
        </section>
    );
}
