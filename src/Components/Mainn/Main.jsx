import CodeAnimation from "../Animation/CodeAnimation";

export default function Courses() {
    return (
        <section
            className="
        relative w-full overflow-hidden
        h-[calc(100dvh-80px)] sm:h-[calc(100dvh-96px)]
        px-4 sm:px-6
        py-6 sm:py-10
        flex items-center justify-center text-center
      "
        >
            {/* Եթե ուզում ես՝ mobile-ում animation-ը չլինի, սա hidden md:block արա */}
            <CodeAnimation />

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 sm:mb-6">
                    Դարձիր Web Ծրագրավորող 💻
                </h2>

                <p className="text-zinc-300 text-base sm:text-lg md:text-xl">
                    Սկսիր քո ճանապարհը ժամանակակից վեբ ծրագրավորման աշխարհում՝
                    սովորելով ամենապահանջված տեխնոլոգիաները։
                </p>
            </div>
        </section>
    );
}
