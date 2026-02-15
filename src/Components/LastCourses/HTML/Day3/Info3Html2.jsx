import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function Info3Html2() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const colors = [
        { name: "Tomato", bg: "#ff6347" },
        { name: "Orange", bg: "#ffa500" },
        { name: "DodgerBlue", bg: "#1e90ff" },
        { name: "MediumSeaGreen", bg: "#3cb371" },
        { name: "Gray", bg: "#808080" },
        { name: "SlateBlue", bg: "#6a5acd" },
        { name: "Violet", bg: "#ee82ee" },
        { name: "LightGray", bg: "#d3d3d3" },
    ];

    const codeBg = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Background Color</title>
</head>
<body>

  <h1 style="background-color: DodgerBlue;">OutlawCoding</h1>
  <p style="background-color: Yellow;">
    Մենք օգնում ենք սովորել Web ծրագրավորում խորությամբ։
  </p>

</body>
</html>`;

    const codeText = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Text Color</title>
</head>
<body>

  <h1 style="color: DodgerBlue;">OutlawCoding</h1>
  <p style="color: MediumSeaGreen;">
    Մենք օգնում ենք սովորել Web ծրագրավորում խորությամբ։
  </p>

</body>
</html>`;

    const codeBorder = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Border Color</title>
</head>
<body>

  <p style="border: 2px solid Tomato; padding: 8px;">OutlawCoding</p>
  <p style="border: 2px solid DodgerBlue; padding: 8px;">OutlawCoding</p>
  <p style="border: 2px solid Violet; padding: 8px;">OutlawCoding</p>

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
                        Թեմա 2 — HTML Գույներ (Colors)
                    </h1>

                    {/* Intro */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                            HTML-ում գույնը կարելի է տալ տարբեր ձևերով՝ color name-ով (օր․ Tomato),
                            HEX (#ff6347), RGB, HSL և այլն։ Սովորաբար սկսում ենք color name-երից,
                            հետո անցնում ենք ավելի ճշգրիտ ձևերին։
                        </p>
                    </div>

                    {/* Card 1: HTML COLORS */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <div className="text-zinc-200 text-sm sm:text-base mb-3">
                            👉 Օրինակ՝ HTML color names
                        </div>

                        <div className="mt-2 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-4">
                                                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
                                                    HTML COLORS
                                                </h2>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4 space-y-3">
                                                {colors.map((c) => (
                                                    <div
                                                        key={c.name}
                                                        className="rounded-md py-2 text-center font-extrabold"
                                                        style={{
                                                            backgroundColor: c.bg,
                                                            color: c.name === "LightGray" ? "#111" : "#111",
                                                        }}
                                                    >
                                                        {c.name}
                                                    </div>
                                                ))}
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

                    {/* Section: Background Color */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 Background Color (Ֆոնի գույն)
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li>Ֆոնի գույնը տալիս ենք `background-color`-ով։</li>
                            <li>Կարող ես օգտագործել color name կամ HEX/RGB։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    CHANGING BACKGROUND COLOR
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeBg}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4 space-y-3">
                                                    <div className="rounded-md px-3 py-2 font-bold" style={{ backgroundColor: "#1e90ff" }}>
                                                        OutlawCoding
                                                    </div>
                                                    <div className="rounded-md px-3 py-2 text-black" style={{ backgroundColor: "#facc15" }}>
                                                        Մենք օգնում ենք սովորել Web ծրագրավորում խորությամբ։
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Output-ը նշանակում է՝ “ինչը վերջում երևում է էջում”։
                            </div>
                        </div>
                    </div>

                    {/* Section: Text Color */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 Text Color (Տեքստի գույն)
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li>Տեքստի գույնը տալիս ենք `color`-ով։</li>
                            <li>Օգտագործվում է վերնագրերի, պարբերությունների, հղումների վրա։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    CHANGING TEXT COLOR
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeText}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4 space-y-2">
                                                    <div className="font-bold" style={{ color: "#1e90ff" }}>
                                                        OutlawCoding
                                                    </div>
                                                    <div style={{ color: "#3cb371" }}>
                                                        Մենք օգնում ենք սովորել Web ծրագրավորում խորությամբ։
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                text color-ը չի փոխում background-ը, միայն տառերի գույնն ա փոխում։
                            </div>
                        </div>
                    </div>

                    {/* Section: Border Color */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                            👉 Border Color (Շրջագծի գույն)
                        </h2>

                        <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
                            <li>Շրջագիծը տալիս ենք `border`-ով, օրինակ՝ `2px solid Tomato`։</li>
                            <li>Կարող ես տարբեր գույներով border անել նույն էլեմենտի վրա։</li>
                        </ul>

                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                                        <div className="p-5 sm:p-7 text-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                                                    CHANGING BORDER COLOR
                                                </h3>
                                                <span className="text-white/70 font-semibold">@outlawcoding</span>
                                            </div>

                                            <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                                                <div className="text-white/80 text-sm mb-2">index.html</div>
                                                <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
                                                    {codeBorder}
                                                </pre>
                                            </div>

                                            <div className="mt-4 border-t border-white/15 pt-4">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                                                    OUTPUT
                                                </div>

                                                <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4 space-y-2">
                                                    <div className="rounded px-3 py-2" style={{ border: "2px solid #ff6347" }}>
                                                        OutlawCoding
                                                    </div>
                                                    <div className="rounded px-3 py-2" style={{ border: "2px solid #1e90ff" }}>
                                                        OutlawCoding
                                                    </div>
                                                    <div className="rounded px-3 py-2" style={{ border: "2px solid #ee82ee" }}>
                                                        OutlawCoding
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Border-ի գույնը չի ազդում text-ի վրա, առանձին բան ա։
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
