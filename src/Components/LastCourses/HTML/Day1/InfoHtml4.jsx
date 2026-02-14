import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function InfoHTML4() {
    const navigate = useNavigate();

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
                    {/* Title */}
                    <h1 className="text-left text-2xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
                        Թեմա 4 — HTML Պարբերություններ (Paragraphs)
                    </h1>

                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* bullets */}
                        <ul className="space-y-2 text-zinc-200 text-sm sm:text-base">
                            <li className="flex gap-2">
                                <span className="text-yellow-400">•</span>
                                <span>
                                    HTML-ում <b className="text-yellow-300">&lt;p&gt;</b> element-ը սահմանում է պարբերություն։
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-yellow-400">•</span>
                                <span>
                                    Պարբերությունը սովորաբար սկսվում է նոր տողից, և բրաուզերը ավտոմատ փոքր տարածություն է թողնում
                                    պարբերությունից առաջ ու հետո։
                                </span>
                            </li>
                        </ul>

                        <div className="mt-5 text-zinc-300 text-sm sm:text-base font-semibold">
                            Օրինակ՝
                        </div>

                        {/* Example card */}
                        <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                            <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                <div className="text-zinc-100 font-extrabold tracking-wide">
                                    HTML Paragraph
                                </div>
                                <div className="text-zinc-400 text-xs sm:text-sm">@outlawcoding</div>
                            </div>

                            <div className="p-4 sm:p-6">
                                <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                                    {/* file line */}
                                    <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                                        <span className="text-orange-400">▣</span>
                                        <span>index.html</span>
                                    </div>

                                    {/* code */}
                                    <div className="font-mono text-[11px] sm:text-sm text-zinc-200 leading-relaxed">
                                        <div>
                                            <span className="text-pink-300">&lt;!DOCTYPE html&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;html&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">  &lt;body&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;h2&gt;
                                            </span>
                                            <span className="text-zinc-100">Բարի գալուստ OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/h2&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-zinc-100">
                                                Animation դասընթացների համար այցելեք իմ Ինստագրամի էջը։
                                            </span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">  &lt;/body&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;/html&gt;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Output */}
                            <div className="border-t border-yellow-400/15 p-4 sm:p-6">
                                <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                                    Արդյունք
                                </div>

                                <div className="mt-3 rounded-xl border border-zinc-700/60 bg-zinc-950/30 p-5 text-zinc-200">
                                    <div className="text-lg sm:text-xl font-extrabold">
                                        Բարի գալուստ OutlawCoding
                                    </div>
                                    <div className="mt-2 text-sm sm:text-base text-zinc-300">
                                        Animation դասընթացների համար այցելեք իմ Ինստագրամի էջը։
                                    </div>
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
