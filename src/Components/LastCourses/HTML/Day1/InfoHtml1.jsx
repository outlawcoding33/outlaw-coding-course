import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";


export default function InfoHTML1() {
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
                        Թեմա 1 — Ներածություն HTML-ին
                    </h1>

                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* What is HTML */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-yellow-300 font-extrabold text-lg sm:text-xl">
                                <span>👉</span>
                                <span>Ի՞նչ է HTML-ը</span>
                            </div>

                            <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>HTML-ը վեբ էջի «կմախքն» է (կառուցվածք)։</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>HTML-ը նկարագրում է էջի բովանդակությունը՝ վերնագրեր, տեքստ, նկարներ և այլն։</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>HTML-ը բրաուզերին ասում է՝ ինչ ցույց տալ էջում և ինչ հերթականությամբ։</span>
                                </li>
                            </ul>
                        </div>

                        {/* What is an element */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-yellow-300 font-extrabold text-lg sm:text-xl">
                                <span>👉</span>
                                <span>Ի՞նչ է HTML Element-ը</span>
                            </div>

                            <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>
                                        HTML element-ը սովորաբար կազմված է՝ <b>բացվող tag</b>, <b>բովանդակություն</b>, <b>փակվող tag</b>։
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>
                                        Element-ների օրինակներ՝ heading tag-եր, image tag-եր, paragraph tag-եր, anchor tag-եր և այլն։
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">
                                Օրինակ՝
                            </div>

                            {/* Example card 1 */}
                            <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                                <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                    <div className="text-zinc-100 font-bold">HTML Element</div>
                                    <div className="text-zinc-400 text-xs sm:text-sm">@outlaw.coding</div>
                                </div>

                                <div className="p-4 sm:p-5">
                                    <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                                        <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                                            <span className="text-orange-400">▣</span>
                                            <span>index.html</span>
                                        </div>

                                        <div className="font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed">
                                            <span className="text-pink-300">&lt;tagname&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/tagname&gt;</span>
                                        </div>

                                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] sm:text-xs">
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> Սկսվող tag
                                            </div>
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> Հիմնական content
                                            </div>
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> Փակվող tag
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                                            Արդյունք
                                        </div>

                                        <div className="mt-2 rounded-xl border border-zinc-700/60 bg-zinc-950/30 p-4 text-zinc-200">
                                            OutlawCoding
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HTML Attribute */}
                        <div>
                            <div className="flex items-center gap-2 text-yellow-300 font-extrabold text-lg sm:text-xl">
                                <span>👉</span>
                                <span>HTML Attribute</span>
                            </div>

                            <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>Attribute-ը element-ին տալիս է լրացուցիչ ինֆո (օր՝ class, id, style, href)։</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>Attribute-ը գրվում է բացվող tag-ի մեջ։</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>
                                        Ամենատարածված տեսքը՝ <b>attribute="value"</b>
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">
                                Օրինակ՝
                            </div>

                            {/* Example card 2 */}
                            <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                                <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                    <div className="text-zinc-100 font-bold">HTML ATTRIBUTE</div>
                                    <div className="text-zinc-400 text-xs sm:text-sm">@outlaw.coding</div>
                                </div>

                                <div className="p-4 sm:p-5">
                                    <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                                        <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                                            <span className="text-orange-400">▣</span>
                                            <span>index.html</span>
                                        </div>

                                        <div className="font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed">
                                            <span className="text-pink-300">&lt;h1</span>{" "}
                                            <span className="text-yellow-200">class</span>
                                            <span className="text-zinc-400">=</span>
                                            <span className="text-green-300">"title"</span>
                                            <span className="text-pink-300">&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/h1&gt;</span>
                                        </div>

                                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] sm:text-xs">
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> Attribute
                                            </div>
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> Attribute Value
                                            </div>
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> Heading tag
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                                            OUTPUT
                                        </div>

                                        <div className="mt-2 rounded-xl border border-zinc-700/60 bg-zinc-950/30 p-4 text-zinc-200">
                                            OutlawCoding
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* spacer */}
                        <div className="h-2" />
                    </div>

                    <div className="h-6" />
                </div>
            </div>
        </section>
    );
}
