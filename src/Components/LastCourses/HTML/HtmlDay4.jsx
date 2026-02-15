import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../Animation/CodeAnimation";

export default function HtmlDay4() {
    const navigate = useNavigate();

    const topics = [
        { title: "Թեմա 1 — HTML Աղյուսակներ (Tables)", to: "/html/day4/topic1" },
        { title: "Թեմա 2 — HTML Ցուցակներ (Lists)", to: "/html/day4/topic2" },
        { title: "Թեմա 3 — HTML Lists + Tables միասին", to: "/html/day4/topic3" },
        { title: "Թեմա 4 — Block և Inline տարրեր", to: "/html/day4/topic4" },
    ];

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

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
                        Օր — 04 : Ցուցակներ և Աղյուսակներ
                    </h1>

                    {/* INTRO */}
                    <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
                        {/* Topics as buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {topics.map((t, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => navigate(t.to)}
                                    className="
                    text-left bg-zinc-900/80 border border-yellow-400/30
                    p-4 sm:p-6 rounded-2xl text-yellow-300 text-sm sm:text-lg font-semibold
                    hover:scale-[1.02] hover:shadow-yellow-400/30 transition-all duration-300
                  "
                                >
                                    {t.title}
                                </button>
                            ))}
                        </div>

                        {/* Assignment line */}
                        <div className="mt-6 text-zinc-200 text-sm sm:text-base font-semibold flex items-center gap-2">
                            <span className="text-zinc-300">▶</span>
                            <span>Առաջադրանք — Ստեղծիր Ռեստորանի Մենյուի Էջ</span>
                        </div>

                        <div className="mt-4 text-zinc-200 text-sm sm:text-base font-semibold">
                            Ահա քո Օր-4 առաջադրանքը։
                        </div>

                        {/* Pills */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-md bg-pink-600 text-white text-xs sm:text-sm font-bold">
                                Առաջադրանք — Օր 4
                            </span>
                            <span className="px-3 py-1 rounded-md bg-green-500 text-black text-xs sm:text-sm font-extrabold">
                                @outlawcoding
                            </span>
                        </div>

                        {/* Preview card (Restaurant Menu) */}
                        <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
                            {/* Phone-safe scale trick: keeps desktop-like layout */}
                            <div className="w-full overflow-hidden">
                                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                                    <div className="relative bg-white rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full">
                                        <div className="p-5 sm:p-7 text-zinc-900">
                                            <h1 className="text-2xl sm:text-3xl font-extrabold">
                                                Indian Spice Delight
                                            </h1>

                                            <h3 className="mt-3 text-lg sm:text-xl font-bold">Menu</h3>

                                            {/* Table */}
                                            <div className="mt-3 overflow-hidden rounded-lg border border-zinc-200">
                                                <table className="w-full text-sm">
                                                    <thead className="bg-zinc-100">
                                                        <tr>
                                                            <th className="text-left p-3 font-bold border-b border-zinc-200">Ապրանք</th>
                                                            <th className="text-left p-3 font-bold border-b border-zinc-200">Նկարագրություն</th>
                                                            <th className="text-left p-3 font-bold border-b border-zinc-200">Գին</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b border-zinc-200">
                                                            <td className="p-3 font-semibold">Paneer Tikka</td>
                                                            <td className="p-3 text-zinc-700">
                                                                Թանդուրի համեմունքներով թխված պանիր՝ համեղ սոուսով։
                                                            </td>
                                                            <td className="p-3 font-semibold">$8.99</td>
                                                        </tr>
                                                        <tr className="border-b border-zinc-200">
                                                            <td className="p-3 font-semibold">Chana Masala</td>
                                                            <td className="p-3 text-zinc-700">
                                                                Սիսեռի կծու ու բուրավետ ճաշ՝ ավանդական համերով։
                                                            </td>
                                                            <td className="p-3 font-semibold">$7.99</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-3 font-semibold">Palak Paneer</td>
                                                            <td className="p-3 text-zinc-700">
                                                                Սպանախի սոուս + պանիր՝ նուրբ և հագեցնող տարբերակ։
                                                            </td>
                                                            <td className="p-3 font-semibold">$9.99</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* Special Offers */}
                                            <h4 className="mt-5 text-base sm:text-lg font-extrabold">
                                                Special Offers
                                            </h4>

                                            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                                                <li>15% զեղչ՝ առաջին օնլայն պատվերի համար։</li>
                                                <li>Lunch կոմբոներ՝ 11:00-ից 15:00 (աշխատանքային օրերին)։</li>
                                            </ul>

                                            <p className="mt-4 text-sm text-zinc-700 leading-relaxed">
                                                Indian Spice Delight-ում պատրաստում ենք իսկական հնդկական բուսակերական ուտեստներ։
                                                <b> Բացահայտիր մեր համերը։</b>
                                            </p>

                                            <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                                                Ամրագրելու համար զանգիր՝{" "}
                                                <a
                                                    href="tel:+11234567890"
                                                    className="text-blue-600 underline font-semibold"
                                                >
                                                    +1 123-456-7890
                                                </a>
                                            </p>
                                        </div>

                                        {/* Tag callouts like the screenshot */}
                                        <div className="absolute top-6 right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<h1> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute top-[110px] right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<h3> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute top-[190px] right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<th> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute top-[250px] right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<tr> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute top-[290px] right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<td> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-[130px] right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<ul> tag"}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-6 right-4 flex items-center gap-2">
                                            <div className="w-14 h-[2px] bg-sky-300" />
                                            <span className="px-2 py-1 rounded bg-sky-200 text-sky-900 text-xs font-bold">
                                                {"<a> tag"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                                Հուշում․ Phone-ում preview-ը “մինիմում” scale-ով փոքրանում ա, որ layout-ը նույնը մնա ու չկոտրվի։
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
