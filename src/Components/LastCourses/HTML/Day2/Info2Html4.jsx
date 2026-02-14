import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function Info2Html4() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const SectionTitle = ({ children }) => (
        <div className="flex items-center gap-2 text-yellow-300 font-extrabold text-lg sm:text-xl mt-6">
            <span>👉</span>
            <span>{children}</span>
        </div>
    );

    const Bullet = ({ children }) => (
        <li className="flex gap-2">
            <span className="text-yellow-400">•</span>
            <span>{children}</span>
        </li>
    );

    const ExampleCard = ({ title, file = "index.html", children }) => (
        <div className="mt-3 border border-yellow-400/25 rounded-2xl bg-zinc-950/40 overflow-hidden">
            <div className="px-4 py-3 border-b border-yellow-400/15 flex items-center justify-between">
                <div className="text-zinc-100 font-extrabold tracking-wide">{title}</div>
                <div className="text-zinc-400 text-xs sm:text-sm">@outlawcoding</div>
            </div>

            <div className="p-4 sm:p-6">
                <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-3 sm:p-4">
                    <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm mb-2">
                        <span className="text-orange-400">▣</span>
                        <span>{file}</span>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );

    const OutputBlock = ({ children }) => (
        <div className="mt-5">
            <div className="inline-block px-3 py-1 rounded-md bg-green-500 text-black font-extrabold text-xs sm:text-sm">
                Արդյունք
            </div>
            <div className="mt-3 rounded-xl border border-zinc-700/60 bg-zinc-950/30 p-5 text-zinc-200">
                {children}
            </div>
        </div>
    );

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

                {/* Scrollable */}
                <div className="flex-1 overflow-y-auto nice-scroll pt-4 pb-6 pr-2">
                    <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
                        Թեմա 4 — HTML Quotation
                    </h1>

                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* ===================== 1) q ===================== */}
                        <SectionTitle>HTML &lt;q&gt; կարճ մեջբերումների համար</SectionTitle>
                        <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                            <Bullet>
                                HTML <span className="font-mono text-yellow-300">&lt;q&gt;</span> tag-ը սահմանում է կարճ մեջբերում։
                            </Bullet>
                            <Bullet>Բրաուզերը սովորաբար ավտոմատ չակերտներ է ավելացնում մեջբերման շուրջը։</Bullet>
                        </ul>

                        <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>
                        <ExampleCard title="HTML QUOTATION">
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
                                    <span className="text-zinc-100">HTML Quote</span>
                                    <span className="text-pink-300">&lt;/h2&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">
                                        {"    "}
                                        &lt;q&gt;
                                    </span>
                                    <span className="text-zinc-100">
                                        We help developers to understand JavaScript & React in depth
                                    </span>
                                    <span className="text-pink-300">&lt;/q&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">  &lt;/body&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">&lt;/html&gt;</span>
                                </div>
                            </div>

                            <OutputBlock>
                                <div className="text-xl font-extrabold text-zinc-100">HTML Quote</div>
                                <div className="mt-3 text-zinc-200">
                                    <span className="text-zinc-200">“</span>
                                    We help developers to understand JavaScript & React in depth
                                    <span className="text-zinc-200">”</span>
                                </div>
                            </OutputBlock>
                        </ExampleCard>

                        {/* ===================== 2) blockquote ===================== */}
                        <SectionTitle>HTML &lt;blockquote&gt; մեջբերումների համար</SectionTitle>
                        <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                            <Bullet>
                                HTML <span className="font-mono text-yellow-300">&lt;blockquote&gt;</span> element-ը սահմանում է
                                հատված, որը մեջբերված է ուրիշ աղբյուրից։
                            </Bullet>
                            <Bullet>
                                Բրաուզերը սովորաբար <span className="font-mono text-yellow-300">&lt;blockquote&gt;</span>-ը
                                indentation-ով (ներս քաշած) է ցույց տալիս։
                            </Bullet>
                        </ul>

                        <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>
                        <ExampleCard title="HTML <BLOCKQUOTE>">
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
                                    <span className="text-zinc-100">HTML blockquote</span>
                                    <span className="text-pink-300">&lt;/h2&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">
                                        {"    "}
                                        &lt;blockquote{" "}
                                    </span>
                                    <span className="text-yellow-200">cite</span>
                                    <span className="text-zinc-400">=</span>
                                    <span className="text-green-300">
                                        "https://www.goodreads.com/quotes/tag/web-development"
                                    </span>
                                    <span className="text-pink-300">&gt;</span>
                                </div>
                                <div>
                                    <span className="text-zinc-100">
                                        {"      "}We don't just build websites, we build websites that SELLS
                                    </span>
                                </div>
                                <div>
                                    <span className="text-pink-300">
                                        {"      "}
                                        &lt;cite&gt;
                                    </span>
                                    <span className="text-zinc-100">Christopher Dayagdag</span>
                                    <span className="text-pink-300">&lt;/cite&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">
                                        {"    "}
                                        &lt;/blockquote&gt;
                                    </span>
                                </div>
                                <div>
                                    <span className="text-pink-300">  &lt;/body&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">&lt;/html&gt;</span>
                                </div>
                            </div>

                            <OutputBlock>
                                <div className="text-xl font-extrabold text-zinc-100">HTML blockquote</div>
                                <div className="mt-3 border-l-4 border-zinc-700 pl-4 text-zinc-200 italic">
                                    “We don't just build websites, we build websites that SELLS”
                                    <div className="mt-2 text-zinc-400 not-italic">
                                        — <span className="italic">Christopher Dayagdag</span>
                                    </div>
                                </div>
                            </OutputBlock>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Նշում՝ մարդու անունը «աշխատանքի վերնագիր» չի։ <span className="font-mono">&lt;cite&gt;</span>-ը
                                սովորաբար italic է ցուցադրվում։
                            </div>
                        </ExampleCard>

                        {/* ===================== 3) abbr ===================== */}
                        <SectionTitle>HTML &lt;abbr&gt; հապավումների համար</SectionTitle>
                        <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                            <Bullet>
                                HTML <span className="font-mono text-yellow-300">&lt;abbr&gt;</span> tag-ը սահմանում է հապավում կամ
                                acronym (օր.՝ HTML, CSS, ASAP և այլն)։
                            </Bullet>
                            <Bullet>
                                Հապավումները markup անելն օգնում է բրաուզերին, թարգմանիչներին և որոնողներին հասկանալ իմաստը։
                            </Bullet>
                        </ul>

                        <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>
                        <ExampleCard title="HTML ABBREVIATION">
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
                                    <span className="text-zinc-100">HTML Abbreviation</span>
                                    <span className="text-pink-300">&lt;/h2&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">
                                        {"    "}
                                        &lt;p&gt;
                                    </span>
                                    <span className="text-pink-300">&lt;abbr </span>
                                    <span className="text-yellow-200">title</span>
                                    <span className="text-zinc-400">=</span>
                                    <span className="text-green-300">"CodingStella"</span>
                                    <span className="text-pink-300">&gt;</span>
                                    <span className="text-zinc-100">C.S</span>
                                    <span className="text-pink-300">&lt;/abbr&gt;</span>
                                    <span className="text-zinc-100"> was launched in 2022</span>
                                    <span className="text-pink-300">&lt;/p&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">  &lt;/body&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">&lt;/html&gt;</span>
                                </div>
                            </div>

                            <OutputBlock>
                                <div className="text-xl font-extrabold text-zinc-100">HTML Abbreviation</div>
                                <div className="mt-3 text-zinc-200">
                                    <span className="underline decoration-dotted underline-offset-4">C.S</span> was launched in 2022
                                </div>
                                <div className="mt-2 text-zinc-500 text-xs">
                                    * real browser-ում C.S-ի վրա hover անելուց title-ը ցույց կտա։
                                </div>
                            </OutputBlock>
                        </ExampleCard>

                        {/* ===================== 4) address ===================== */}
                        <SectionTitle>HTML &lt;address&gt; կոնտակտ ինֆոյի համար</SectionTitle>
                        <ul className="mt-3 space-y-2 text-zinc-200 text-sm sm:text-base">
                            <Bullet>
                                HTML <span className="font-mono text-yellow-300">&lt;address&gt;</span> tag-ը դրվում է հեղինակ/owner-ի
                                կոնտակտ ինֆոն ցույց տալու համար։
                            </Bullet>
                            <Bullet>
                                Կարող է լինել email, URL, ֆիզիկական հասցե, հեռախոս, social handle և այլն։
                            </Bullet>
                            <Bullet>
                                <span className="font-mono text-yellow-300">&lt;address&gt;</span>-ը սովորաբար italic է լինում, ու
                                բրաուզերը իր առաջ/հետո line-break է անում։
                            </Bullet>
                        </ul>

                        <div className="mt-4 text-zinc-300 text-sm sm:text-base font-semibold">Օրինակ՝</div>
                        <ExampleCard title="HTML ADDRESS">
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
                                    <span className="text-zinc-100">HTML Address</span>
                                    <span className="text-pink-300">&lt;/h2&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">
                                        {"    "}
                                        &lt;address&gt;
                                    </span>
                                </div>
                                <div>
                                    <span className="text-zinc-100">{"      "}Bangalore, India</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">
                                        {"    "}
                                        &lt;/address&gt;
                                    </span>
                                </div>
                                <div>
                                    <span className="text-pink-300">  &lt;/body&gt;</span>
                                </div>
                                <div>
                                    <span className="text-pink-300">&lt;/html&gt;</span>
                                </div>
                            </div>

                            <OutputBlock>
                                <div className="text-xl font-extrabold text-zinc-100">HTML Address</div>
                                <div className="mt-3 italic text-zinc-200">Bangalore, India</div>
                            </OutputBlock>
                        </ExampleCard>
                    </div>

                    <div className="h-6" />
                </div>
            </div>
        </section>
    );
}
