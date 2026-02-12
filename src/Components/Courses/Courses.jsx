import { useEffect } from "react";
import { Link } from "react-router-dom";
import CodeAnimation from "../Animation/CodeAnimation";

const courses = [
  { title: "HTML", desc: "Սովորիր Web կառուցվածքի հիմքերը՝ ստեղծելով կայքի կմախքը։", path: "/courses/html" },
  { title: "CSS", desc: "Ձևավորիր էջերդ գույներով, ստվերներով և անիմացիաներով՝ պրոֆեսիոնալ տեսքի համար։", path: "/courses/css" },
  { title: "Git & GitHub", desc: "Սովորիր վերահսկել կոդի տարբերակները և համագործակցել GitHub հարթակում։", path: "/courses/github" },
  { title: "Tailwind CSS", desc: "Ստեղծիր արագ, արձագանքող և ժամանակակից դիզայն՝ օգտագործելով utility-first մեթոդ։", path: "/courses/tailwind" },
  { title: "JavaScript", desc: "Ավելացրու ինտերակտիվություն և լոգիկա քո կայքերին։", path: "/courses/javascript" },
  { title: "React", desc: "Սովորիր ժամանակակից Front-End framework՝ ստեղծելու հզոր վեբ հավելվածներ։", path: "/courses/react" },
];

export default function Courses() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[80vh]  px-4 relative z-10">
      <CodeAnimation />

      <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6 z-10">
        Դարձիր Web Ծրագրավորող 💻
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 z-10">
        {courses.map((course, index) => (
          <Link
            to={course.path}
            key={index}
            className="bg-zinc-900/60 border border-yellow-400/40 p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-500 hover:scale-105"
          >
            <h3 className="text-2xl text-yellow-400 font-semibold mb-3">
              {course.title}
            </h3>
            <p className="text-zinc-300 mb-5">{course.desc}</p>
            <div className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-4 py-2 inline-block transition">
              Սկսել
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
