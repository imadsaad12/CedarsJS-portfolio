import React from "react";
import ProjectDetails from "./components/ProjectDetails";
import ProjectImage from "./components/ProjectImage";
import { ProjectContainer } from "./styles";

export default function Project() {
  return (
    <ProjectContainer>
      <ProjectImage />
      <ProjectDetails />
    </ProjectContainer>
  );
}
