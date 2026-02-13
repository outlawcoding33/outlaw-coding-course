import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <section
      className="
        relative w-full px-4 sm:px-6
        pt-5 sm:pt-6 pb-5 sm:pb-6
        overflow-hidden
        h-[calc(100dvh-80px)] sm:h-[calc(100dvh-96px)]
      "
    >
      <CodeAnimation />

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col">
        {/* Back */}
        <div className="w-full flex justify-start mb-3 sm:mb-4">
          <button
            type="button"
            onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/70 border border-yellow-400/40 text-yellow-300 hover:text-yellow-200 hover:shadow-yellow-400/20 shadow transition"
          >
            <span className="text-xl leading-none">←</span>
            <span className="text-sm font-semibold">Հետ</span>
          </button>
        </div>

        {/* Title center */}
        <h2 className="w-full text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 sm:mb-5">
          Դարձիր Web Ծրագրավորող 💻
        </h2>

        {/* Grid area */}
        <div className="flex-1 min-h-0">
          {/* ✅ Mobile-ում scroll, Desktop-ում չէ */}
          <div className="h-full overflow-y-auto sm:overflow-hidden overflow-x-hidden pr-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {courses.map((course, index) => (
                <Link
                  to={course.path}
                  key={index}
                  className="
                    bg-zinc-900/60 border border-yellow-400/40
                    p-5 lg:p-6
                    rounded-2xl shadow-lg
                    hover:shadow-yellow-400/30 transition-all duration-300
                    hover:scale-[1.01] active:scale-[0.99]
                  "
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-yellow-400 font-semibold mb-2">
                    {course.title}
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-snug mb-4 line-clamp-2">
                    {course.desc}
                  </p>

                  <div className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-4 py-2 inline-block transition text-sm">
                    Սկսել
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* ⬆️ էստեղ հանեցինք overflow-hidden-ը ու դրեցինք overflow-y-auto mobile-ի համար */}
        </div>
      </div>
    </section>
  );
}
