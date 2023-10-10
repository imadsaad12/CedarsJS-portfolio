import { HashRouter, Routes, Route } from "react-router-dom";
import { HOME } from "./URLs";
import Home from "../pages/home";
import HOC from "../HOC";
// import Home from "../pages/home";
// import HOC from "../HOC";
 
export default function ApplicationRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path={HOME} element={HOC(Home)} />
      </Routes>
    </HashRouter>
  );
}
