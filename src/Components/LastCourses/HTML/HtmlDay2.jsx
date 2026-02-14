import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function HtmlDay2() {
    const navigate = useNavigate();

    // ✅ routes should be URL paths, not /src/... file paths
    const topics = [
        { title: "Թեմա 1 — HTML Styles", to: "/src/Components/LastCourses/HTML/Day2/Info2Html2.jsx" },
        { title: "Թեմա 2 — HTML Text Formatting", to: "/src/Components/LastCourses/HTML/Day2/Info2Html1.jsx" },
        { title: "Թեմա 3 — HTML Indentation", to: "/src/Components/LastCourses/HTML/Day2/Info2Html3.jsx" },
        { title: "Թեմա 4 — HTML Quotation", to: "/src/Components/LastCourses/HTML/Day2/Info2Html4.jsx" },
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
                        Օր 02 : HTML Styling
                    </h1>

                    {/* INTRO (like image) */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* Topics as buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {topics.map((t, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => navigate(t.to)}
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
                            <span>Առաջադրանք — Blog Post-ի Styling</span>
                        </div>

                        <div className="mt-4 text-zinc-200 text-sm sm:text-base font-semibold">
                            Ահա քո Օր-2 առաջադրանքը։
                        </div>

                        {/* Pills */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-md bg-pink-600 text-white text-xs sm:text-sm font-bold">
                                Առաջադրանք — Օր 2
                            </span>
                            <span className="px-3 py-1 rounded-md bg-green-500 text-black text-xs sm:text-sm font-extrabold">
                                @outlawcoding
                            </span>
                        </div>

                        {/* Preview card (blog) */}
                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl">
                            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                                <div className="p-5 sm:p-7 text-zinc-900">
                                    <h1 className="text-2xl sm:text-3xl font-extrabold">
                                        Բարի գալուստ իմ բլոգ!
                                    </h1>

                                    <h2 className="mt-3 text-lg sm:text-xl font-bold">
                                        Իմ առաջին գրառումը
                                    </h2>

                                    <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                                        Սա իմ առաջին բլոգային գրառումն է։ Շատ ոգևորված եմ իմ մտքերն ու գաղափարները աշխարհի հետ կիսվելու համար։
                                    </p>

                                    <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                                        Ահա մի քանի կարևոր բան, որոնք պետք է հիշել բլոգային գրառում գրելիս․
                                    </p>

                                    <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                                        <li>Օգտագործիր պարզ ու հակիրճ լեզու։</li>
                                        <li>Տեքստը բաժանիր պարբերությունների։</li>
                                        <li>Օգտագործիր վերնագրեր ու ենթավերնագրեր՝ բովանդակությունը կազմակերպելու համար։</li>
                                        <li>Ավելացրու նկարներ ու տեսանյութեր՝ գրառումը ավելի հետաքրքիր դարձնելու համար։</li>
                                    </ul>

                                    <blockquote className="mt-4 border-l-4 border-zinc-300 pl-4 text-sm text-zinc-700 italic">
                                        «Մեծ գործ անելու միակ ճանապարհը՝ սիրելն է այն, ինչ անում ես» — Սթիվ Ջոբս
                                        <sup className="ml-1 text-[10px] align-super">1</sup>
                                    </blockquote>

                                    <p className="mt-4 text-sm text-zinc-700 leading-relaxed">
                                        Ինձ համար կարևոր է կիսվել իմ գիտելիքներով ու փորձով ուրիշների հետ։
                                    </p>

                                    <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                                        Ազատ զգա՝ ներքևում մեկնաբանություն թողնելու համար (ու մի մոռացիր բաժանորդագրվել)։
                                    </p>
                                </div>


                                {/* Tag callouts (hide on phone like before) */}
                                <div className="absolute top-6 right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<h1> tag"}
                                    </span>
                                </div>

                                <div className="absolute top-[92px] right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<h2> tag"}
                                    </span>
                                </div>

                                <div className="absolute top-[145px] right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<p> tag"}
                                    </span>
                                </div>

                                <div className="absolute top-[245px] right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<ul> tag"}
                                    </span>
                                </div>

                                <div className="absolute top-[285px] right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<li> tag"}
                                    </span>
                                </div>

                                <div className="absolute top-[355px] right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<blockquote> tag"}
                                    </span>
                                </div>

                                <div className="absolute top-[390px] right-4 flex items-center gap-2">
                                    <div className="hidden sm:block w-14 h-[2px] bg-sky-300" />
                                    <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                        {"<sup> tag"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bottom spacer */}
                    <div className="h-6" />
                </div>
            </div >
        </section >
    );
}
