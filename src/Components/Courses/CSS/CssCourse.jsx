import { useEffect } from "react";
import CodeAnimation from "../../Animation/CodeAnimation";

const cssLessons = [
    "Ներածություն",
    "Գույներ, ֆոներ, սահմաններ և չափեր",
    "Տուփի մոդել ",
    "Տեքստի ձևավորում",
    "Տառատեսակներ ",
    "Տեսողական էֆեկտներ",
    "Ձևեր և դասավորություն ",
    "Ցուցակներ, փոփոխականներ և ֆունկցիաներ",
    "Տուփերի չափեր և Object Fit",
    "Ցուցադրում և դիրքավորում ",
    "Անիմացիաներ և անցումներ ",
    "Հարմարվող դիզայն ",
    "Սյուներ և Flexbox մոդել",
    "Ցանցային դասավորություն ",
    "CSS Թեստ/Քվիզ",
    "YouTube կլոն ինտերֆեյս",
    "Նավբար, Հերո և Սերվիս բաժիններ",
    "Կոնտակտ, Թեստիմոնիալ և Footer բաժիններ",
    "Ամփոփում",
    "Քննություն"
];

export default function CssCourse() {
    useEffect(() => {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto"; 
    }, []);
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-start text-center px-6 py-16">
            <CodeAnimation />
            <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-10 z-10">
                CSS Դասընթաց 🎨
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 z-10 w-full max-w-7xl">
                {cssLessons.map((lesson, index) => (
                    <div
                        key={index}
                        className=" cursor-pointer bg-zinc-900/70 border border-yellow-400/30 p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-500 hover:scale-105"
                    >
                        <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-2">
                            {lesson}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
