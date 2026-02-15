import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function Info3Html1() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const codeCommentSyntax = `<!-- գրիր քո մեկնաբանությունը այստեղ -->`;

    const codeHideContent = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Comments</title>
</head>
<body>

  <h1>OutlawCoding</h1>

  <!-- Այս պարբերությունը ժամանակավորապես թաքցված է -->
  <!-- <p>Մենք օգնում ենք սովորել Web ծրագրավորում խորությամբ։</p> -->

</body>
</html>`;

    const codeInlineComment = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inline Comment</title>
</head>
<body>

  <p>
    Մենք օգնում ենք սովորել Web ծրագրավորում
    <!-- սա inline comment է -->
    խորությամբ։
  </p>

</body>
</html>`;

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
                        Թեմա 1 — HTML Մեկնաբանություններ (Comments)
                    </h1>

                    {/* Intro */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                            HTML մեկնաբանությունները (comments) բրաուզերում չեն երևում, բայց շատ օգտակար են՝
                            կոդը բացատրելու, հիշեցումներ թողնելու կամ մասերը ժամանակավորապես անջատելու համար։
                        </p>
                    </div>

                    {/* Section 1: Comment Syntax */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 HTML Comment Tag
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li>Մեկնաբանությունը գրելու համար օգտագործում ենք այս շարադրանքը։</li>
                            <li>Մեկնաբանությունը բրաուզերը չի ցուցադրում։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    HTML COMMENT SYNTAX
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">commentSyntax.html</div>
                                                <pre className="text-green-200 text-sm whitespace-pre leading-relaxed">
                                                    {codeCommentSyntax}
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Phone-ում preview-ը փոքրանում է, որ layout-ը չկոտրվի։
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Hide Content */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 Թաքցնել բովանդակություն (Hide Content)
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li>Comments-ը կարող են օգտագործվել՝ ինչ-որ հատված ժամանակավորապես չցուցադրելու համար։</li>
                            <li>Սա հարմար է, երբ ուզում ես test անես, բայց չջնջես կոդը։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    HIDING THE COMMENT
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeHideContent}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4">
                                                    <div className="text-white text-base font-semibold">OutlawCoding</div>
                                                    {/* hidden paragraph won't show */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Արդյունքում երևում է միայն վերնագիրը, որովհետև պարբերությունը comment-ի մեջ է։
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Inline Comment */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 Inline Comment (Տողում comment)
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li>Կարող ես comment գրել հենց տողի մեջ՝ կոդը բացատրելու համար։</li>
                            <li>Բրաուզերում comment-ը չի երևա, բայց տեքստը կերևա։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    INLINE COMMENT
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeInlineComment}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4">
                                                    <div className="text-white text-sm leading-relaxed">
                                                        Մենք օգնում ենք սովորել Web ծրագրավորում խորությամբ։
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Comment-ը տողի մեջ է, բայց output-ում երևում է միայն իրական տեքստը։
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
