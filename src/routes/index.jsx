import { HashRouter, Routes, Route } from "react-router-dom";
import { HOME } from "./URLs";
import Home from "../pages/home";

export default function ApplicationRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
