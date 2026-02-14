import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function Info2Html1() {
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
                    <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
                        Թեմա 1 — HTML Styles
                    </h1>

                    {/* MAIN CARD */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* Intro sentence */}
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                            HTML-ում <span className="text-yellow-300 font-semibold">style</span> attribute-ը օգտագործվում է
                            element-ին inline ձևով style տալու համար (օր.՝ գույն, ֆոն, չափ, font և այլն)։
                        </p>

                        {/* ===================== 1) STYLE ATTRIBUTE ===================== */}
                        <div className="mt-6">
                            <div className="flex items-center gap-2 text-yellow-300 font-extrabold text-lg sm:text-xl">
                                <span>👉</span>
                                <span>HTML Style Attribute</span>
                            </div>

                            <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>
                                        <b className="text-yellow-300">style</b> attribute-ը տալիս է CSS հատկություններ հենց tag-ի մեջ։
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>
                                        Գրելու ձևը՝{" "}
                                        <span className="font-mono text-yellow-300">property: value;</span>
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>

                            {/* Example card: HTML STYLE SYNTAX */}
                            <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                                <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                    <div className="text-zinc-100 font-extrabold tracking-wide">
                                        HTML STYLE SYNTAX
                                    </div>
                                    <div className="text-zinc-400 text-xs sm:text-sm">@outlawcoding</div>
                                </div>

                                <div className="p-4 sm:p-6">
                                    <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                                        <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                                            <span className="text-orange-400">▣</span>
                                            <span>styleSyntax.html</span>
                                        </div>

                                        <div className="font-mono text-[11px] sm:text-sm text-zinc-200 leading-relaxed">
                                            <span className="text-pink-300">&lt;tagname</span>{" "}
                                            <span className="text-yellow-200">style</span>
                                            <span className="text-zinc-400">=</span>
                                            <span className="text-green-300">"property: value;"</span>
                                            <span className="text-pink-300">&gt;</span>
                                            <span className="text-zinc-100">OutlawCoding</span>
                                            <span className="text-pink-300">&lt;/tagname&gt;</span>
                                        </div>

                                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] sm:text-xs">
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> Style attribute
                                            </div>
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> property (CSS property)
                                            </div>
                                            <div className="text-zinc-400">
                                                <span className="text-yellow-300">—</span> value (CSS value)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===================== 2) BACKGROUND COLOR ===================== */}
                        <div className="mt-8">
                            <div className="flex items-center gap-2 text-yellow-300 font-extrabold text-lg sm:text-xl">
                                <span>👉</span>
                                <span>Background Color</span>
                            </div>

                            <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>
                                        CSS-ում <b className="text-yellow-300">background-color</b> property-ն փոխում է ֆոնի գույնը։
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>

                            {/* Example card: CHANGING BG COLOR */}
                            <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                                <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                    <div className="text-zinc-100 font-extrabold tracking-wide">
                                        CHANGING BG COLOR
                                    </div>
                                    <div className="text-zinc-400 text-xs sm:text-sm">@outlawcoding</div>
                                </div>

                                <div className="p-4 sm:p-6">
                                    <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                                        <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                                            <span className="text-orange-400">▣</span>
                                            <span>index.html</span>
                                        </div>

                                        <div className="font-mono text-[11px] sm:text-sm text-zinc-200 leading-relaxed">
                                            <div>
                                                <span className="text-pink-300">&lt;!DOCTYPE html&gt;</span>
                                            </div>
                                            <div>
                                                <span className="text-pink-300">&lt;html&gt;</span>
                                            </div>
                                            <div>
                                                <span className="text-pink-300">  &lt;body</span>{" "}
                                                <span className="text-yellow-200">style</span>
                                                <span className="text-zinc-400">=</span>
                                                <span className="text-green-300">"background-color: royalblue;"</span>
                                                <span className="text-pink-300">&gt;</span>
                                            </div>
                                            <div>
                                                <span className="text-pink-300">
                                                    {"    "}
                                                    &lt;h2&gt;
                                                </span>
                                                <span className="text-zinc-100">Welcome to OutlawCoding</span>
                                                <span className="text-pink-300">&lt;/h2&gt;</span>
                                            </div>
                                            <div>
                                                <span className="text-pink-300">
                                                    {"    "}
                                                    &lt;p&gt;
                                                </span>
                                                <span className="text-zinc-100">
                                                    This is an example of using a style attribute to change the background.
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

                                    {/* Output */}
                                    <div className="mt-5">
                                        <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                                            Արդյունք
                                        </div>

                                        <div
                                            className="mt-3 rounded-xl border border-zinc-700/60 p-5"
                                            style={{ backgroundColor: "royalblue" }}
                                        >
                                            <div className="text-white text-lg sm:text-xl font-extrabold">
                                                Welcome to OutlawCoding
                                            </div>
                                            <div className="mt-2 text-white/90 text-sm sm:text-base">
                                                This is an example of using a style attribute to change the background.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===================== 3) TEXT COLOR ===================== */}
                        <div className="mt-8">
                            <div className="flex items-center gap-2 text-yellow-300 font-extrabold text-lg sm:text-xl">
                                <span>👉</span>
                                <span>Text Color</span>
                            </div>

                            <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>
                                        CSS-ում <b className="text-yellow-300">color</b> property-ն փոխում է տեքստի գույնը։
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>

                            {/* Example card: CHANGING TEXT COLOR */}
                            <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                                <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                    <div className="text-zinc-100 font-extrabold tracking-wide">
                                        CHANGING TEXT COLOR
                                    </div>
                                    <div className="text-zinc-400 text-xs sm:text-sm">@outlawcoding</div>
                                </div>

                                <div className="p-4 sm:p-6">
                                    <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                                        <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                                            <span className="text-orange-400">▣</span>
                                            <span>index.html</span>
                                        </div>

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
                                                    &lt;h2
                                                </span>{" "}
                                                <span className="text-yellow-200">style</span>
                                                <span className="text-zinc-400">=</span>
                                                <span className="text-green-300">"color: limegreen;"</span>
                                                <span className="text-pink-300">&gt;</span>
                                                <span className="text-zinc-100">Welcome to OutlawCoding</span>
                                                <span className="text-pink-300">&lt;/h2&gt;</span>
                                            </div>
                                            <div>
                                                <span className="text-pink-300">
                                                    {"    "}
                                                    &lt;p
                                                </span>{" "}
                                                <span className="text-yellow-200">style</span>
                                                <span className="text-zinc-400">=</span>
                                                <span className="text-green-300">"color: #cbd5e1;"</span>
                                                <span className="text-pink-300">&gt;</span>
                                                <span className="text-zinc-100">
                                                    You can change text color using the style attribute.
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

                                    {/* Output */}
                                    <div className="mt-5">
                                        <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                                            Արդյունք
                                        </div>

                                        <div className="mt-3 rounded-xl border border-zinc-700/60 bg-zinc-950/30 p-5">
                                            <div
                                                className="text-lg sm:text-xl font-extrabold"
                                                style={{ color: "limegreen" }}
                                            >
                                                Welcome to OutlawCoding
                                            </div>
                                            <div className="mt-2 text-sm sm:text-base" style={{ color: "#cbd5e1" }}>
                                                You can change text color using the style attribute.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===================== 4) FONTS ===================== */}
                        <div className="mt-8">
                            <div className="flex items-center gap-2 text-yellow-300 font-extrabold text-lg sm:text-xl">
                                <span>👉</span>
                                <span>Fonts</span>
                            </div>

                            <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                                <li className="flex gap-2">
                                    <span className="text-yellow-400">•</span>
                                    <span>
                                        CSS-ում <b className="text-yellow-300">font-family</b> property-ն սահմանում է font-ը։
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>

                            {/* Example card: HTML FONT FAMILY */}
                            <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
                                <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                                    <div className="text-zinc-100 font-extrabold tracking-wide">
                                        HTML FONT FAMILY
                                    </div>
                                    <div className="text-zinc-400 text-xs sm:text-sm">@outlawcoding</div>
                                </div>

                                <div className="p-4 sm:p-6">
                                    <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                                        <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                                            <span className="text-orange-400">▣</span>
                                            <span>index.html</span>
                                        </div>

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
                                                    &lt;h2
                                                </span>{" "}
                                                <span className="text-yellow-200">style</span>
                                                <span className="text-zinc-400">=</span>
                                                <span className="text-green-300">
                                                    "font-family: 'Courier New', monospace;"
                                                </span>
                                                <span className="text-pink-300">&gt;</span>
                                                <span className="text-zinc-100">Welcome to OutlawCoding</span>
                                                <span className="text-pink-300">&lt;/h2&gt;</span>
                                            </div>
                                            <div>
                                                <span className="text-pink-300">
                                                    {"    "}
                                                    &lt;p
                                                </span>{" "}
                                                <span className="text-yellow-200">style</span>
                                                <span className="text-zinc-400">=</span>
                                                <span className="text-green-300">
                                                    "font-family: Arial, sans-serif;"
                                                </span>
                                                <span className="text-pink-300">&gt;</span>
                                                <span className="text-zinc-100">
                                                    Explore the world of coding with OutlawCoding to know more.
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

                                    {/* Output */}
                                    <div className="mt-5">
                                        <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                                            Արդյունք
                                        </div>

                                        <div className="mt-3 rounded-xl border border-zinc-700/60 bg-zinc-950/30 p-5">
                                            <div
                                                className="text-lg sm:text-xl font-extrabold text-zinc-100"
                                                style={{ fontFamily: "'Courier New', monospace" }}
                                            >
                                                Welcome to OutlawCoding
                                            </div>
                                            <div
                                                className="mt-2 text-sm sm:text-base text-zinc-300"
                                                style={{ fontFamily: "Arial, sans-serif" }}
                                            >
                                                Explore the world of coding with OutlawCoding to know more.
                                            </div>
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
