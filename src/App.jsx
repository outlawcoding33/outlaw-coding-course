import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Mainn/Main";
import Courses from "./Components/Courses/Courses";
import Login from "./Components/LogIn/LogIn";
import Header from "./Components/Header/Header";
import HtmlCourse from "./Components/Courses/HTML/HtmlCourse";
import CssCourse from "./Components/Courses/CSS/CssCourse";
import GitHubCourse from "./Components/Courses/GitHub/GitHubCourse";
import TailwindCourse from "./Components/Courses/Tailwind/TailwindCourse";
import ReactCourse from "./Components/Courses/React/ReactCourse";
import JsCourse from "./Components/Courses/JS/JsCourse";
import "./index.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="courses" element={<Courses />} />
          <Route path="login" element={<Login />} />

          <Route path="courses/html" element={<HtmlCourse />} />
          <Route path="courses/css" element={<CssCourse />} />
          <Route path="courses/github" element={<GitHubCourse />} />
          <Route path="courses/tailwind" element={<TailwindCourse />} />
          <Route path="courses/javascript" element={<JsCourse />} />
          <Route path="courses/react" element={<ReactCourse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
