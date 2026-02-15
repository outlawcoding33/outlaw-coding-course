import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function Info3Html3() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const codeSyntax = `<a href="https://www.google.com">Գնալ Google</a>`;

    const codeLinkTag = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Links</title>
</head>
<body>

  <h2>HTML Հղումներ</h2>
  <a href="https://www.google.com">Գնալ Google</a>

</body>
</html>`;

    const codeTarget = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Target</title>
</head>
<body>

  <h2>Target Օրինակ</h2>

  <!-- նույն էջում բացել -->
  <a href="https://www.google.com" target="_self">Google (_self)</a>

  <br />

  <!-- նոր tab-ում բացել -->
  <a href="https://www.google.com" target="_blank" rel="noreferrer">
    Google (_blank)
  </a>

</body>
</html>`;

    const codeImageLink = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Image Link</title>
</head>
<body>

  <h2>Նկարը որպես հղում</h2>

  <a href="https://www.google.com" target="_blank" rel="noreferrer">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=60"
      alt="Link image"
      width="220"
    />
  </a>

</body>
</html>`;

    const codeMailto = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mailto</title>
</head>
<body>

  <h2>Email Հղում</h2>

  <a href="mailto:outlawcoding@gmail.com">Գրել Email</a>

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
                        Թեմա 3 — HTML Հղումներ (Links)
                    </h1>

                    {/* Intro */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li>HTML հղումները ստեղծվում են <b>&lt;a&gt;</b> tag-ով։</li>
                            <li>Հղումը կարող է տանել ուրիշ կայք, ուրիշ էջ, նույն էջի հատված (anchor) և այլն։</li>
                            <li>Հիմնական attribute-ը <b>href</b>-ն է՝ որտեղ պիտի գնա հղումը։</li>
                            <li>Եթե ուզում ես բացվի նոր tab-ով՝ օգտագործում ես <b>target="_blank"</b>։</li>
                        </ul>
                    </div>

                    {/* 1) Syntax */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 HTML Links — Syntax
                        </h2>

                        <div className="mt-2 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    HTML LINK SYNTAX
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">linkSyntax.html</div>
                                                <pre className="text-green-200 text-sm whitespace-pre leading-relaxed">
                                                    {codeSyntax}
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

                    {/* 2) Link tag + Output */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 HTML Link Tag
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li><b>href</b>-ը ցույց է տալիս հասցեն (URL)։</li>
                            <li>Հղման ներսի տեքստը հենց այն է, ինչը user-ը կսեղմի։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    HTML LINK TAG
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeLinkTag}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4">
                                                    <div className="text-white text-sm leading-relaxed">
                                                        HTML Հղումներ
                                                    </div>
                                                    <a
                                                        href="https://www.google.com"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-sky-300 underline text-sm"
                                                    >
                                                        Գնալ Google
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                OUTPUT-ը նշանակում է՝ վերջում ինչն ա երևում բրաուզերում։
                            </div>
                        </div>
                    </div>

                    {/* 3) Target attribute */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 HTML Links — target Attribute
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li><b>target="_self"</b> — բացում է նույն tab-ում (default)։</li>
                            <li><b>target="_blank"</b> — բացում է նոր tab-ում։</li>
                            <li>Լավ պրակտիկա՝ _blank-ի հետ ավելացնել <b>rel="noreferrer"</b>։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    HTML TARGET LINK TAG
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeTarget}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4 space-y-2">
                                                    <div className="text-white text-sm">Target Օրինակ</div>
                                                    <a
                                                        href="https://www.google.com"
                                                        className="text-sky-300 underline text-sm block"
                                                    >
                                                        Google (_self)
                                                    </a>
                                                    <a
                                                        href="https://www.google.com"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-sky-300 underline text-sm block"
                                                    >
                                                        Google (_blank)
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                _blank-ը հիմնականում օգտագործում ենք, երբ user-ը պիտի չկորցնի քո էջը։
                            </div>
                        </div>
                    </div>

                    {/* 4) Image as link */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 Նկարը որպես հղում (Image Link)
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li>Կարող ես <b>&lt;img&gt;</b>-ը դնել <b>&lt;a&gt;</b>-ի մեջ, ու նկարը դառնա link։</li>
                            <li>Սեղմելուց կտանի դեպի href-ը։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    HTML IMAGE LINK
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeImageLink}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4">
                                                    <div className="text-white text-sm mb-2">Նկարը որպես հղում</div>
                                                    <a
                                                        href="https://www.google.com"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-block"
                                                    >
                                                        <img
                                                            alt="Link"
                                                            className="w-56 rounded-md border border-white/20"
                                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=60"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Նկարի վրա սեղմելով կգնաս link-ի հասցեով։
                            </div>
                        </div>
                    </div>

                    {/* 5) Mailto */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 Link դեպի Email (mailto)
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li><b>mailto:</b>-ն բացում է email app-ը՝ հասցեն արդեն պատրաստ։</li>
                            <li>Հարմար է “Contact” բաժիններում։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    HTML MAILTO: LINK
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeMailto}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4">
                                                    <div className="text-white text-sm mb-2">Email Հղում</div>
                                                    <a
                                                        href="mailto:outlawcoding@gmail.com"
                                                        className="text-sky-300 underline text-sm"
                                                    >
                                                        Գրել Email
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Mailto-ն աշխատում է, երբ user-ի մոտ mail app կա միացված։
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
