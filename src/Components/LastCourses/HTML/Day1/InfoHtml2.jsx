import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function InfoHTML2() {
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
                    <div className="mb-5">
                        <h1 className="text-left text-2xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400">
                            Թեմա 2 — HTML-ի կառուցվածքը
                        </h1>

                        <div className="mt-3 flex items-center gap-2 text-yellow-300 font-bold">
                            <span className="text-lg">👉</span>
                            <span>HTML-ի կառուցվածք</span>
                        </div>
                    </div>

                    {/* Example */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <div className="text-zinc-300 text-sm sm:text-base font-semibold mb-3">
                            Օրինակ՝
                        </div>

                        {/* Big example card like image */}
                        <div className="border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                            <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                <div className="text-zinc-100 font-extrabold tracking-wide">
                                    HTML-ի բազային կառուցվածք
                                </div>
                                <div className="text-zinc-400 text-xs sm:text-sm">@outlawcoding</div>
                            </div>

                            <div className="p-4 sm:p-6">
                                <div className="relative rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                                    {/* file line */}
                                    <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                                        <span className="text-orange-400">▣</span>
                                        <span>index.html</span>
                                    </div>

                                    {/* code block */}
                                    <div className="font-mono text-[11px] sm:text-sm text-zinc-200 leading-relaxed">
                                        <div>
                                            <span className="text-pink-300">&lt;!DOCTYPE html&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;html&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">  &lt;head&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;title&gt;
                                            </span>
                                            <span className="text-zinc-100">Ներածություն HTML-ին</span>
                                            <span className="text-pink-300">&lt;/title&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">  &lt;/head&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">  &lt;body&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;h1&gt;
                                            </span>
                                            <span className="text-zinc-100">Ի՞նչ է HTML-ը։</span>
                                            <span className="text-pink-300">&lt;/h1&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-zinc-100">
                                                HTML-ը նկարագրում է վեբ էջի կառուցվածքը
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

                                    {/* Left callouts */}
                                    <div className="hidden md:block">
                                        {/* Doctype */}
                                        <div className="absolute left-[-190px] top-[52px] flex items-center gap-2">
                                            <span className="text-zinc-300 text-xs font-semibold">
                                                Doctype element
                                            </span>
                                            <span className="w-14 h-[2px] bg-zinc-300/60" />
                                            <span className="w-2 h-2 rounded-full bg-zinc-300/60" />
                                        </div>

                                        {/* Head tag */}
                                        <div className="absolute left-[-150px] top-[95px] flex items-center gap-2">
                                            <span className="text-zinc-300 text-xs font-semibold">
                                                Head tag
                                            </span>
                                            <span className="w-10 h-[2px] bg-zinc-300/60" />
                                            <span className="w-2 h-2 rounded-full bg-zinc-300/60" />
                                        </div>

                                        {/* Heading tag */}
                                        <div className="absolute left-[-170px] top-[205px] flex items-center gap-2">
                                            <span className="text-zinc-300 text-xs font-semibold">
                                                Heading tag
                                            </span>
                                            <span className="w-10 h-[2px] bg-zinc-300/60" />
                                            <span className="w-2 h-2 rounded-full bg-zinc-300/60" />
                                        </div>

                                        {/* Paragraph tag */}
                                        <div className="absolute left-[-185px] top-[245px] flex items-center gap-2">
                                            <span className="text-zinc-300 text-xs font-semibold">
                                                Paragraph tag
                                            </span>
                                            <span className="w-10 h-[2px] bg-zinc-300/60" />
                                            <span className="w-2 h-2 rounded-full bg-zinc-300/60" />
                                        </div>

                                        {/* Sup text */}
                                        <div className="absolute left-[-140px] top-[285px] flex items-center gap-2">
                                            <span className="text-zinc-300 text-xs font-semibold">
                                                Sup Text
                                            </span>
                                            <span className="w-10 h-[2px] bg-zinc-300/60" />
                                            <span className="w-2 h-2 rounded-full bg-zinc-300/60" />
                                        </div>
                                    </div>

                                    {/* Right callout (Title tag) */}
                                    <div className="hidden md:flex absolute right-[-170px] top-[130px] items-center gap-2">
                                        <span className="w-10 h-[2px] bg-zinc-300/60" />
                                        <span className="w-2 h-2 rounded-full bg-zinc-300/60" />
                                        <span className="text-zinc-300 text-xs font-semibold">
                                            Title tag
                                        </span>
                                    </div>

                                    {/* Small label on top-left like "HTML tag" */}
                                    <div className="absolute top-[56px] right-6 hidden md:flex items-center gap-2">
                                        <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                            {"<html> tag"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Output section */}
                            <div className="border-t border-yellow-400/15 p-4 sm:p-6">
                                <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                                    Արդյունք
                                </div>

                                <div className="mt-3 rounded-xl border border-zinc-700/60 bg-white p-5 text-zinc-900">
                                    <div className="text-2xl sm:text-3xl font-extrabold">
                                        Ի՞նչ է HTML-ը։
                                    </div>
                                    <div className="mt-2 text-sm sm:text-base text-zinc-700">
                                        HTML-ը նկարագրում է վեբ էջի կառուցվածքը
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
