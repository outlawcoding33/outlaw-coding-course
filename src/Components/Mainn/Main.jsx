import { useEffect } from "react";
import CodeAnimation from "../Animation/CodeAnimation";

export default function Courses() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
        return () => {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        };
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 z-10 -translate-y-20">
            <CodeAnimation />
            <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">
                Դարձիր Web Ծրագրավորող 💻
            </h2>
            <p className="text-zinc-300 text-xl max-w-2xl">
                Սկսիր քո ճանապարհը ժամանակակից վեբ ծրագրավորման աշխարհում՝
                սովորելով ամենապահանջված տեխնոլոգիաները։
            </p>
        </section>
    );
}
