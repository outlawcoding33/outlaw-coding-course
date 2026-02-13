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
    <section className="relative w-full min-h-[100dvh] px-4 sm:px-6 py-10 pt-24 overflow-hidden">
      {/* Background */}
      <CodeAnimation />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 sm:mb-6">
          Դարձիր Web Ծրագրավորող 💻
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {courses.map((course, index) => (
            <Link
              to={course.path}
              key={index}
              className="bg-zinc-900/60 border border-yellow-400/40 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-semibold mb-2 sm:mb-3">
                {course.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base mb-4">
                {course.desc}
              </p>

              <div className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-4 py-2 inline-block transition">
                Սկսել
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
