import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function Info2Html3 () {
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
                        Թեմա 3 — HTML Indentation
                    </h1>

                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* short note like image */}
                        <div className="flex items-center gap-2 text-yellow-300 font-bold">
                            <span>👉</span>
                            <span className="text-sm sm:text-base">
                                Indentation-ը նշանակում է բացատներ (spaces) կոդի տողի սկզբում։
                            </span>
                        </div>

                        <div className="mt-5 text-zinc-300 text-sm sm:text-base font-semibold">
                            Օրինակ՝
                        </div>

                        {/* BIG Example Card */}
                        <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                            <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                <div className="text-zinc-100 font-extrabold tracking-wide">
                                    HTML INDENTATION
                                </div>
                                <div className="text-zinc-400 text-xs sm:text-sm">@outlawcoding</div>
                            </div>

                            <div className="p-4 sm:p-6">
                                <div className="relative rounded-2xl border border-zinc-700/60 bg-zinc-900/40 p-4 sm:p-6">
                                    {/* file line */}
                                    <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-3">
                                        <span className="text-orange-400">▣</span>
                                        <span>index.html</span>
                                    </div>

                                    {/* left labels + arrows (desktop only) */}
                                    <div className="hidden md:block">
                                        <div className="absolute left-[-170px] top-[120px] text-zinc-200 font-semibold text-sm">
                                            Without<br />Indentation
                                        </div>
                                        <div className="absolute left-[-60px] top-[135px] text-zinc-200 text-2xl">
                                            ←
                                        </div>

                                        <div className="absolute left-[-170px] top-[285px] text-zinc-200 font-semibold text-sm">
                                            With<br />Indentation
                                        </div>
                                        <div className="absolute left-[-60px] top-[300px] text-zinc-200 text-2xl">
                                            ←
                                        </div>
                                    </div>

                                    {/* code area */}
                                    <div className="font-mono text-[11px] sm:text-sm text-zinc-200 leading-relaxed">
                                        {/* Without indentation */}
                                        <div className="text-zinc-400 mb-2">{"// Without indentation"}</div>
                                        <div>
                                            <span className="text-pink-300">&lt;!DOCTYPE html&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;html&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;body&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;h1&gt;</span>
                                            <span className="text-zinc-100">HTML without Indentation</span>
                                            <span className="text-pink-300">&lt;/h1&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;p&gt;</span>
                                            <span className="text-zinc-100">
                                                We help developers to understand JavaScript & React in depth
                                            </span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;p&gt;</span>
                                            <span className="text-zinc-100">Web dev & design resources.</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;/body&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;/html&gt;</span>
                                        </div>

                                        <div className="h-5" />

                                        {/* With indentation */}
                                        <div className="text-zinc-400 mb-2">{"// With indentation"}</div>
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
                                            <span className="text-zinc-100">HTML with Indentation</span>
                                            <span className="text-pink-300">&lt;/h1&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-zinc-100">
                                                We help developers to understand JavaScript & React in depth
                                            </span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-zinc-100">Web dev & design resources.</span>
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

                                {/* tiny helper note */}
                                <div className="mt-4 text-zinc-300 text-sm leading-relaxed">
                                    Indentation-ը պարտադիր չի, բայց կոդը շատ ավելի կարդացվող ու կարգին է դարձնում։
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* spacer */}
                    <div className="h-6" />
                </div>
            </div>
        </section>
    );
}
