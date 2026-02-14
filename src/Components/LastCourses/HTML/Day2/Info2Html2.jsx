import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function Info2Html2() {
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
                    <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
                        Թեմա 2 — HTML Text Formatting
                    </h1>

                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* intro bullets */}
                        <ul className="space-y-2 text-zinc-200 text-sm sm:text-base">
                            <li className="flex gap-2">
                                <span className="text-yellow-400">•</span>
                                <span>
                                    HTML-ում կան տարբեր element-ներ, որոնք օգտագործվում են տեքստը ձևավորելու ու հատուկ իմաստ տալու համար։
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-yellow-400">•</span>
                                <span>Տեքստի ձևավորումը կարող է ցույց տալ տարբեր տեսակի ազդեցություններ (effect)։</span>
                            </li>
                        </ul>

                        {/* list of tags like image */}
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-200 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;b&gt;</span>
                                <span>— Bold text</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;strong&gt;</span>
                                <span>— Important text</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;i&gt;</span>
                                <span>— Italic text</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;em&gt;</span>
                                <span>— Emphasized text</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;mark&gt;</span>
                                <span>— Marked text</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;small&gt;</span>
                                <span>— Smaller text</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;del&gt;</span>
                                <span>— Deleted text</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;ins&gt;</span>
                                <span>— Inserted text</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;sub&gt;</span>
                                <span>— Subscript text</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">•</span>
                                <span className="font-mono text-pink-300">&lt;sup&gt;</span>
                                <span>— Superscript text</span>
                            </div>
                        </div>

                        <div className="mt-5 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>

                        {/* Example card */}
                        <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                            <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                <div className="text-zinc-100 font-extrabold tracking-wide">
                                    HTML TEXT FORMATTING
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
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-pink-300">&lt;b&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/b&gt;</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-pink-300">&lt;strong&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/strong&gt;</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-pink-300">&lt;i&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/i&gt;</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-pink-300">&lt;em&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/em&gt;</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-pink-300">&lt;mark&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/mark&gt;</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-pink-300">&lt;small&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/small&gt;</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-pink-300">&lt;del&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/del&gt;</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-pink-300">&lt;ins&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/ins&gt;</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-zinc-100">H</span>
                                            <span className="text-pink-300">&lt;sub&gt;</span>
                                            <span className="text-zinc-100">2</span>
                                            <span className="text-pink-300">&lt;/sub&gt;</span>
                                            <span className="text-zinc-100">O</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">
                                                {"    "}
                                                &lt;p&gt;
                                            </span>
                                            <span className="text-zinc-100">10</span>
                                            <span className="text-pink-300">&lt;sup&gt;</span>
                                            <span className="text-zinc-100">2</span>
                                            <span className="text-pink-300">&lt;/sup&gt;</span>
                                            <span className="text-zinc-100"> = 100</span>
                                            <span className="text-pink-300">&lt;/p&gt;</span>
                                        </div>

                                        <div>
                                            <span className="text-pink-300">  &lt;/body&gt;</span>
                                        </div>
                                        <div>
                                            <span className="text-pink-300">&lt;/html&gt;</span>
                                        </div>
                                    </div>

                                    {/* Side callouts (desktop only) */}
                                    <div className="hidden md:block">
                                        <div className="absolute left-[-130px] top-[70px] text-zinc-300 text-xs font-semibold">
                                            Bold Text
                                        </div>
                                        <div className="absolute left-[-130px] top-[102px] text-zinc-300 text-xs font-semibold">
                                            Strong Text
                                        </div>
                                        <div className="absolute left-[-130px] top-[134px] text-zinc-300 text-xs font-semibold">
                                            Italic Text
                                        </div>
                                        <div className="absolute left-[-130px] top-[166px] text-zinc-300 text-xs font-semibold">
                                            Emphasized
                                        </div>
                                        <div className="absolute left-[-130px] top-[198px] text-zinc-300 text-xs font-semibold">
                                            Marked Text
                                        </div>
                                        <div className="absolute left-[-130px] top-[230px] text-zinc-300 text-xs font-semibold">
                                            Small Text
                                        </div>
                                        <div className="absolute left-[-130px] top-[262px] text-zinc-300 text-xs font-semibold">
                                            Deleted Text
                                        </div>
                                        <div className="absolute left-[-130px] top-[294px] text-zinc-300 text-xs font-semibold">
                                            Inserted
                                        </div>
                                        <div className="absolute left-[-130px] top-[326px] text-zinc-300 text-xs font-semibold">
                                            Sub text
                                        </div>
                                        <div className="absolute left-[-130px] top-[358px] text-zinc-300 text-xs font-semibold">
                                            Sup text
                                        </div>
                                    </div>
                                </div>

                                {/* Output */}
                                <div className="mt-5">
                                    <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                                        Արդյունք
                                    </div>

                                    <div className="mt-3 rounded-xl border border-zinc-700/60 bg-white p-5 text-zinc-900 space-y-2">
                                        <div className="font-bold">OutlawCoding</div>
                                        <div className="font-extrabold">OutlawCoding</div>
                                        <div className="italic">OutlawCoding</div>
                                        <div className="italic">OutlawCoding</div>
                                        <div className="inline-block px-1" style={{ background: "yellow" }}>
                                            OutlawCoding
                                        </div>
                                        <div className="text-xs">OutlawCoding</div>
                                        <div className="line-through">OutlawCoding</div>
                                        <div className="underline">OutlawCoding</div>
                                        <div>
                                            H<sub>2</sub>O
                                        </div>
                                        <div>
                                            10<sup>2</sup> = 100
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-2" />
                    </div>

                    <div className="h-6" />
                </div>
            </div>
        </section>
    );
}
