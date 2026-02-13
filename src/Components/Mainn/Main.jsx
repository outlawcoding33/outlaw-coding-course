import CodeAnimation from "../Animation/CodeAnimation";

export default function Courses() {
    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 py-16 z-10 overflow-hidden">
            {/* Եթե ուզում ես՝ mobile-ում animation-ը չլինի, սա hidden md:block արա */}
            <CodeAnimation />

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-6">
                Դարձիր Web Ծրագրավորող 💻
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl">
                Սկսիր քո ճանապարհը ժամանակակից վեբ ծրագրավորման աշխարհում՝
                սովորելով ամենապահանջված տեխնոլոգիաները։
            </p>
        </section>
    );
}
