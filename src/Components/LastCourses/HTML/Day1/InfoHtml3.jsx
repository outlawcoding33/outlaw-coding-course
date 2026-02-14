import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function InfoHTML3() {
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
                        Թեմա 3 — HTML Վերնագրեր (Headings)
                    </h1>

                    {/* bullets like image */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <ul className="space-y-2 text-zinc-200 text-sm sm:text-base">
                            <li className="flex gap-2">
                                <span className="text-yellow-400">•</span>
                                <span>
                                    HTML heading-ները գրվում են <b className="text-yellow-300">&lt;h1&gt;</b>-ից մինչև{" "}
                                    <b className="text-yellow-300">&lt;h6&gt;</b> tag-երով։
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-yellow-400">•</span>
                                <span>
                                    <b className="text-yellow-300">&lt;h1&gt;</b>-ը ամենակարևոր վերնագիրն է, իսկ{" "}
                                    <b className="text-yellow-300">&lt;h6&gt;</b>-ը ամենաքիչ կարևոր (ամենափոքր) վերնագիրը։
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
                                    HTML HEADINGS
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
                                                &lt;h1&gt;
                                            </span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/h1&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;h2&gt;
                                            </span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/h2&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;h3&gt;
                                            </span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/h3&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;h4&gt;
                                            </span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/h4&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;h5&gt;
                                            </span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/h5&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;h6&gt;
                                            </span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/h6&gt;</span>
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

                                <div className="mt-3 rounded-xl border border-zinc-700/60 bg-white p-5 text-zinc-900">
                                    <div className="text-2xl font-extrabold">OutlawCoding</div>
                                    <div className="mt-3 text-xl font-bold">OutlawCoding</div>
                                    <div className="mt-3 text-lg font-semibold">OutlawCoding</div>
                                    <div className="mt-3 text-base font-semibold">OutlawCoding</div>
                                    <div className="mt-3 text-sm font-semibold">OutlawCoding</div>
                                    <div className="mt-3 text-xs font-semibold">OutlawCoding</div>
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
