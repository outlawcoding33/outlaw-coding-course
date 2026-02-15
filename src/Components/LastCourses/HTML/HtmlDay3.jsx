import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function HtmlDay3() {
    const navigate = useNavigate();

    const topics = [
        { title: "Թեմա 1 — HTML Մեկնաբանություններ (Comments)", to: "/src/Components/LastCourses/HTML/Day3/Info3Html1.jsx" },
        { title: "Թեմա 2 — HTML Գույներ (Colors)", to: "/src/Components/LastCourses/HTML/Day3/Info3Html2.jsx" },
        { title: "Թեմա 3 — HTML Հղումներ (Links)", to: "/src/Components/LastCourses/HTML/Day3/Info3Html3.jsx" },
        { title: "Թեմա 4 — HTML Նկարներ (Images)", to: "/src/Components/LastCourses/HTML/Day3/Info3Html4.jsx" },
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

            <div className="relative z-10 h-full flex flex-col max-w-6xl mx-auto px-4 sm:px-6 overflow-x-hidden">
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
                <div className="flex-1 overflow-y-auto overflow-x-hidden nice-scroll pt-4 pb-6 pr-2">
                    <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
                        Օր — 03 : HTML Մուլտիմեդիա
                    </h1>

                    {/* INTRO (topics + assignment) */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6 overflow-x-hidden">
                        {/* Topics as buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {topics.map((t, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => navigate(t.to)}
                                    className="
                    text-left bg-zinc-900/80 border border-yellow-400/30
                    p-4 sm:p-6 rounded-2xl text-yellow-300 text-sm sm:text-lg font-semibold
                    hover:scale-[1.02] hover:shadow-yellow-400/30 transition-all duration-300
                  "
                                >
                                    {t.title}
                                </button>
                            ))}
                        </div>

                        {/* Assignment line */}
                        <div className="mt-6 text-zinc-200 text-sm sm:text-base font-semibold flex items-center gap-2">
                            <span className="text-zinc-300">▶</span>
                            <span>Առաջադրանք — Ստեղծիր Պարզ Պորտֆոլիո Կայք</span>
                        </div>

                        <div className="mt-4 text-zinc-200 text-sm sm:text-base font-semibold">
                            Ահա քո Օր-3 առաջադրանքը։
                        </div>

                        {/* Pills */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-md bg-pink-600 text-white text-xs sm:text-sm font-bold">
                                Առաջադրանք — Օր 3
                            </span>
                            <span className="px-3 py-1 rounded-md bg-green-500 text-black text-xs sm:text-sm font-extrabold">
                                @outlawcoding
                            </span>
                        </div>

                        {/* Preview card (Portfolio) */}
                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            {/*
                ✅ Mobile FIX:
                - Phone-ում layout-ը չի լայնացնում էջը
                - Card-ը ունի "desktop width", բայց phone-ում scale down է լինում
              */}
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.80] max-[380px]:scale-[0.72] sm:scale-100">
                                    <div className="relative bg-white rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full">
                                        <div className="p-5 sm:p-7 text-zinc-900">
                                            <h1 className="text-2xl sm:text-3xl font-extrabold">
                                                Բարի գալուստ իմ Պորտֆոլիո կայք!
                                            </h1>

                                            <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                                                Իմ անունը Outlaw Coding է։ Ես վեբ ծրագրավորող եմ՝ փորձով HTML, CSS և JavaScript-ում։
                                                Սիրում եմ ստեղծել պարզ, հարմար և գեղեցիկ կայքեր։
                                            </p>

                                            <h2 className="mt-5 text-xl font-bold">Իմ նախագծերը</h2>

                                            <div className="mt-3">
                                                <h3 className="text-base font-extrabold">Նախագիծ 1: Օրինակ Պրոյեկտ</h3>
                                                <p className="mt-1 text-sm text-zinc-700">
                                                    Պարզ կայք՝ HTML, CSS և JavaScript օգտագործելով։ Այս տեքստը պարզապես օրինակ է։
                                                </p>

                                                <div className="mt-3 rounded-lg overflow-hidden border border-zinc-200">
                                                    <img
                                                        alt="Նախագիծ 1"
                                                        className="w-full h-40 object-cover"
                                                        loading="lazy"
                                                        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-5">
                                                <h3 className="text-base font-extrabold">Նախագիծ 2: E-Commerce Պլատֆորմ</h3>
                                                <p className="mt-1 text-sm text-zinc-700">
                                                    Օրինակ նախագիծ՝ օնլայն խանութի գաղափարով։ Նույնպես demo տեքստ է։
                                                </p>

                                                <div className="mt-3 rounded-lg overflow-hidden border border-zinc-200">
                                                    <img
                                                        alt="Նախագիծ 2"
                                                        className="w-full h-40 object-cover"
                                                        loading="lazy"
                                                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60"
                                                    />
                                                </div>
                                            </div>

                                            <h2 className="mt-6 text-xl font-bold">Կապ ինձ հետ</h2>
                                            <p className="mt-2 text-sm text-zinc-700">
                                                Եթե ուզում ես քննարկենք նախագիծ կամ հարց ունես՝ գրի՛ ինձ։
                                            </p>

                                            <div className="mt-3 text-sm text-zinc-700 space-y-1">
                                                <div>
                                                    • Email:{" "}
                                                    <a className="text-blue-600 underline" href="mailto:outlawcoding@gmail.com">
                                                        outlawcoding@gmail.com
                                                    </a>
                                                </div>
                                                <div>
                                                    • Instagram:{" "}
                                                    <a
                                                        className="text-blue-600 underline"
                                                        href="https://instagram.com/outlawcoding"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        instagram.com/outlawcoding
                                                    </a>
                                                </div>
                                            </div>

                                            <h2 className="mt-6 text-xl font-bold">Ռեսուրսներ</h2>
                                            <div className="mt-3 grid grid-cols-2 gap-3">
                                                <img
                                                    alt="Resource 1"
                                                    className="w-full h-28 object-cover rounded-lg border border-zinc-200"
                                                    loading="lazy"
                                                    src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=60"
                                                />
                                                <img
                                                    alt="Resource 2"
                                                    className="w-full h-28 object-cover rounded-lg border border-zinc-200"
                                                    loading="lazy"
                                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60"
                                                />
                                            </div>
                                        </div>

                                        {/* Tag callouts (like the image) */}
                                        <div className="absolute top-6 right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<h1> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute top-[240px] right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<img> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-[170px] right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<h2> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-6 right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<a> tag"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile note */}
                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Հուշում․ Phone-ում preview-ը փոքրանում է (scale), որ layout-ը չկոտրվի։
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
