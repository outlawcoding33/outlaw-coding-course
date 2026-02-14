import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Mainn/Main";
import Courses from "./Components/Courses/Courses";

import HtmlCourse from "./Components/Courses/HTML/HtmlCourse";
import CssCourse from "./Components/Courses/CSS/CssCourse";
import GitHubCourse from "./Components/Courses/GitHub/GitHubCourse";
import TailwindCourse from "./Components/Courses/Tailwind/TailwindCourse";
import ReactCourse from "./Components/Courses/React/ReactCourse";
import JsCourse from "./Components/Courses/JS/JsCourse";

import HtmlDay1 from "./Components/LastCourses/HTML/HtmlDay1";
import InfoHTML1 from "./Components/LastCourses/HTML/Day1/InfoHtml1";
import InfoHTML2 from "./Components/LastCourses/HTML/Day1/InfoHtml2";
import InfoHTML3 from "./Components/LastCourses/HTML/Day1/InfoHtml3";
import InfoHTML4 from "./Components/LastCourses/HTML/Day1/InfoHtml4";

import HtmlDay2 from "./Components/LastCourses/HTML/HtmlDay2";
import Info2Html1 from "./Components/LastCourses/HTML/Day2/Info2Html1";
import Info2Html2 from "./Components/LastCourses/HTML/Day2/Info2Html2";
import Info2Html3 from "./Components/LastCourses/HTML/Day2/Info2Html3";
import Info2Html4 from "./Components/LastCourses/HTML/Day2/Info2Html4";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* Home */}
          <Route index element={<Main />} />

          {/* Courses */}
          <Route path="courses" element={<Courses />} />
          <Route path="courses/html" element={<HtmlCourse />} />
          <Route path="courses/css" element={<CssCourse />} />
          <Route path="courses/github" element={<GitHubCourse />} />
          <Route path="courses/tailwind" element={<TailwindCourse />} />
          <Route path="courses/javascript" element={<JsCourse />} />
          <Route path="courses/react" element={<ReactCourse />} />

          {/* HTML - LastCourses */}
          <Route path="/src/Components/LastCourses/HTML/HtmlDay1.jsx" element={<HtmlDay1 />} />
          <Route path="/src/Components/LastCourses/HTML/Day1/InfoHtml1.jsx" element={<InfoHTML1 />} />
          <Route path="/src/Components/LastCourses/HTML/Day1/InfoHtml2.jsx" element={<InfoHTML2 />} />
          <Route path="/src/Components/LastCourses/HTML/Day1/InfoHtml3.jsx" element={<InfoHTML3 />} />
          <Route path="/src/Components/LastCourses/HTML/Day1/InfoHtml4.jsx" element={<InfoHTML4 />} />

          <Route path="/src/Components/LastCourses/HTML/HtmlDay2.jsx" element={<HtmlDay2 />} />
          <Route path="/src/Components/LastCourses/HTML/Day2/Info2Html1.jsx" element={<Info2Html1 />} />
          <Route path="/src/Components/LastCourses/HTML/Day2/Info2Html2.jsx" element={<Info2Html2 />} />
          <Route path="/src/Components/LastCourses/HTML/Day2/Info2Html3.jsx" element={<Info2Html3 />} />
          <Route path="/src/Components/LastCourses/HTML/Day2/Info2Html4.jsx" element={<Info2Html4 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
