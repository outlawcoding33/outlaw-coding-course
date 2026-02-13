import CodeAnimation from "../../Animation/CodeAnimation";

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
    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col items-center text-center px-4 sm:px-6 py-10 pt-24 overflow-hidden">
            {/* Background animation */}
            <CodeAnimation />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-8">
                    CSS Դասընթաց 🎨
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                    {cssLessons.map((lesson, index) => (
                        <button
                            key={index}
                            type="button"
                            className="text-center bg-zinc-900/70 border border-yellow-400/30 p-5 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                        >
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-yellow-400">
                                {lesson}
                            </h3>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
