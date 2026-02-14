import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function HtmlDay1() {
    const navigate = useNavigate();

    // ✅ Topics now have routes (links)
    const topics = [
        { title: "Թեմա 1 — Ներածություն HTML-ին", to: "/src/Components/LastCourses/HTML/Day1/InfoHtml1.jsx" },
        { title: "Թեմա 2 — HTML կառուցվածք", to: "/src/Components/LastCourses/HTML/Day1/InfoHtml2.jsx" },
        { title: "Թեմա 3 — Վերնագրեր (Headings)", to: "/src/Components/LastCourses/HTML/Day1/InfoHtml3.jsx" },
        { title: "Թեմա 4 — Պարբերություններ (Paragraphs)", to: "/src/Components/LastCourses/HTML/Day1/InfoHtml4.jsx" },
    ];

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section className="relative w-full h-dvh overflow-hidden">
            <CodeAnimation />

            <div className="relative z-10 h-full flex flex-col max-w-6xl mx-auto px-4 sm:px-6">
                {/* Back */}
                <div className="pt-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 rounded-full bg-zinc-900/70 border border-yellow-400/40 text-yellow-300 hover:shadow-yellow-400/20 transition text-sm sm:text-base"
                    >
                        ← Հետ
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto nice-scroll pt-4 pb-6 pr-2">
                    <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
                        Օր 01 : Ներածություն HTML-ին
                    </h1>

                    {/* INTRO */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* Topics as buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {topics.map((t, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => navigate(t.to)} // ✅ link here
                                    className="text-left bg-zinc-900/80 border border-yellow-400/30
                    p-4 sm:p-6 rounded-2xl text-yellow-300 text-base sm:text-lg font-semibold
                    hover:scale-[1.02] hover:shadow-yellow-400/30 transition-all duration-300"
                                >
                                    {t.title}
                                </button>
                            ))}
                        </div>

                        {/* Assignment line */}
                        <div className="mt-6 text-zinc-200 text-sm sm:text-base font-semibold flex items-center gap-2">
                            <span className="text-zinc-300">▶</span>
                            <span>Առաջադրանք — Անձնական Պրոֆիլի Էջ</span>
                        </div>

                        <div className="mt-4 text-zinc-200 text-sm sm:text-base font-semibold">
                            Ահա քո Օր-1 առաջադրանքը։
                        </div>

                        {/* Pills */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-md bg-pink-600 text-white text-xs sm:text-sm font-bold">
                                Առաջադրանք — Օր 1
                            </span>
                            <span className="px-3 py-1 rounded-md bg-green-500 text-black text-xs sm:text-sm font-extrabold">
                                @outlawcoding
                            </span>
                        </div>

                        {/* Preview card */}
                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl">
                            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                                <div className="p-5 sm:p-7 text-zinc-900">
                                    <h1 className="text-2xl sm:text-3xl font-extrabold">
                                        Outlaw Coding
                                    </h1>

                                    <h2 className="mt-4 text-xl font-bold">Իմ մասին</h2>
                                    <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                                        Բարև, ես Outlaw Coding-ն եմ՝ վեբ ծրագրավորող, ով սիրում է ստեղծել
                                        հարմար ու գեղեցիկ կայքեր։ Հիմա աշխատում եմ որպես ֆրիլանսեր և բնակվում եմ
                                        Լոս Անջելեսում։
                                    </p>

                                    <h2 className="mt-4 text-xl font-bold">Կրթություն</h2>
                                    <p className="mt-2 text-sm text-zinc-700">
                                        Համակարգչային գիտություններ, UCLA, 2015-2019
                                    </p>

                                    <h2 className="mt-4 text-xl font-bold">Աշխատանքային փորձ</h2>

                                    <h3 className="mt-3 text-base font-extrabold">
                                        Ֆրիլանսեր Վեբ Ծրագրավորող (2019 - Մինչ այսօր)
                                    </h3>
                                    <p className="mt-1 text-sm text-zinc-700">
                                        Ստեղծում եմ կայքեր՝ ուշադրություն դարձնելով դիզայնին ու հարմարավետությանը՝
                                        օգտագործելով HTML, CSS և JavaScript։
                                    </p>

                                    <h3 className="mt-3 text-base font-extrabold">
                                        Վեբ Ծրագրավորման Ինտերն՝ ABC Tech-ում (Ամառ 2018)
                                    </h3>
                                    <p className="mt-1 text-sm text-zinc-700">
                                        Մասնակցել եմ կայքի զարգացմանը, բովանդակության թարմացմանը և ֆունկցիաների
                                        իրականացմանը։
                                    </p>

                                    <h2 className="mt-4 text-xl font-bold">Հետաքրքրություններ</h2>
                                    <p className="mt-2 text-sm text-zinc-700">
                                        Սիրում եմ տեխնոլոգիաները, user experience-ը և բնության մեջ ակտիվ
                                        զբաղմունքները՝ օրինակ լուսանկարչություն ու արշավներ։
                                    </p>
                                </div>

                                {/* Tag callouts */}
                                <div className="absolute top-6 right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<h1> tag"}
                                    </span>
                                </div>

                                <div className="absolute top-[170px] right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<h2> tag"}
                                    </span>
                                </div>

                                <div className="absolute top-[330px] right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<h3> tag"}
                                    </span>
                                </div>

                                <div className="absolute bottom-6 right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<p> tag"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bottom spacer */}
                    <div className="h-6" />
                </div>
            </div>
        </section>
    );
}
