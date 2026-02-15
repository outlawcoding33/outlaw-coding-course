import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CodeAnimation from "../../../Animation/CodeAnimation";

export default function Info3Html4() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 1) Syntax
  const codeSyntax = `<img src="url" alt="այլընտրանքային տեքստ" />`;

  // 2) src example
  const codeSrc = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Images</title>
</head>
<body>

  <h2>Նկարներ HTML-ում</h2>

  <img
    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=60"
    alt="Laptop և կոդ"
    width="320"
  />

</body>
</html>`;

  // 3) alt example
  const codeAlt = `<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ALT</title>
</head>
<body>

  <h2>ALT Attribute</h2>

  <!-- Պատկերացրու՝ link-ը սխալ է կամ նկարն չի բացվում -->
  <img
    src="https://example.com/not-found.png"
    alt="Եթե նկարն չի բացվում, սա կերևա որպես տեքստ"
    width="320"
  />

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
            Թեմա 4 — HTML Նկարներ (Images)
          </h1>

          {/* Intro */}
          <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
            <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>Նկարները էջը դարձնում են ավելի գեղեցիկ ու հասկանալի։</li>
              <li>Նկարը դնում ենք <b>&lt;img&gt;</b> tag-ով։</li>
              <li><b>src</b>-ը նկարի հասցեն է (URL կամ ֆայլի ուղի)։</li>
              <li><b>alt</b>-ը “այլընտրանքային տեքստ” է՝ SEO + accessibility, նաև եթե նկարը չի բացվում։</li>
              <li><b>&lt;img&gt;</b>-ը self-closing է՝ փակվում է <b>/&gt;</b>-ով։</li>
            </ul>
          </div>

          {/* 1) Images Syntax */}
          <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
              👉 HTML Images — Syntax
            </h2>

            <div className="mt-2 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
              <div className="w-full overflow-hidden">
                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                  <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                    <div className="p-5 sm:p-7 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                          HTML IMAGES SYNTAX
                        </h3>
                        <span className="text-white/70 font-semibold">@outlawcoding</span>
                      </div>

                      <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                        <div className="text-white/80 text-sm mb-2">imageSyntax.html</div>
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

          {/* 2) src attribute */}
          <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
              👉 src Attribute
            </h2>

            <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li><b>src</b>-ը ցույց է տալիս՝ որտեղից բեռնվի նկարը։</li>
              <li>Կարող ես նաև տալ <b>width</b> / <b>height</b>, որ չափերը կարգավորվեն։</li>
            </ul>

            <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
              <div className="w-full overflow-hidden">
                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                  <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                    <div className="p-5 sm:p-7 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                          HTML IMAGE SRC TAG
                        </h3>
                        <span className="text-white/70 font-semibold">@outlawcoding</span>
                      </div>

                      <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                        <div className="text-white/80 text-sm mb-2">index.html</div>
                        <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
{codeSrc}
                        </pre>
                      </div>

                      <div className="mt-4 border-t border-white/15 pt-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                          OUTPUT
                        </div>

                        <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4">
                          <div className="text-white text-sm mb-2">Նկարներ HTML-ում</div>
                          <img
                            alt="Laptop և կոդ"
                            className="w-[320px] max-w-full rounded-md border border-white/20"
                            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=60"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                OUTPUT-ը ցույց է տալիս՝ բրաուզերում ինչ ա երևում։
              </div>
            </div>
          </div>

          {/* 3) alt attribute */}
          <div className="bg-zinc-900/80 border border-yellow-400/30 p-4 sm:p-6 rounded-2xl mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
              👉 alt Attribute
            </h2>

            <ul className="text-zinc-300 list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li><b>alt</b>-ը նկարագրություն է նկարի համար (accessibility + SEO)։</li>
              <li>Եթե նկարը չի բացվում, բրաուզերը կարող է ցույց տալ alt-ը։</li>
              <li>Screen reader-ները alt-ով “կարդում են” նկարն՝ տեսողության խնդիր ունեցող մարդկանց համար։</li>
            </ul>

            <div className="mt-4 bg-black/40 p-3 sm:p-4 rounded-2xl overflow-hidden">
              <div className="w-full overflow-hidden">
                <div className="origin-top-left scale-[0.88] max-[380px]:scale-[0.80] sm:scale-100">
                  <div className="relative rounded-xl shadow-xl overflow-hidden w-[760px] sm:w-full bg-[#1f2937] border border-white/10">
                    <div className="p-5 sm:p-7 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                          IMAGE ALT ATTRIBUTE
                        </h3>
                        <span className="text-white/70 font-semibold">@outlawcoding</span>
                      </div>

                      <div className="rounded-lg border border-white/15 bg-black/20 p-4">
                        <div className="text-white/80 text-sm mb-2">index.html</div>
                        <pre className="text-green-200 text-[13px] whitespace-pre leading-relaxed">
{codeAlt}
                        </pre>
                      </div>

                      <div className="mt-4 border-t border-white/15 pt-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-600 text-white text-sm font-extrabold">
                          OUTPUT
                        </div>

                        <div className="mt-3 rounded-lg border border-white/20 bg-black/25 p-4">
                          <div className="text-white text-sm mb-2">ALT Attribute</div>

                          {/* Fake "broken image" preview like screenshot */}
                          <div className="rounded-md border border-white/20 bg-black/30 p-3">
                            <div className="text-white/80 text-xs mb-2">
                              [Նկարն այստեղ չի բացվել]
                            </div>
                            <div className="text-white text-sm">
                              Եթե նկարն չի բացվում, սա կերևա որպես տեքստ
                            </div>
                          </div>

                          <div className="mt-3 text-white/70 text-xs">
                            (Օրինակ ենք անում, որ հասկանաս alt-ի իմաստը)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-zinc-400 text-xs sm:text-sm">
                Alt-ը միշտ գրի՝ նույնիսկ եթե նկարը բացվում է։
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
