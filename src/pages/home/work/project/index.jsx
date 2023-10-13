import React from "react";
import ProjectDetails from "./components/ProjectDetails";
import ProjectImage from "./components/ProjectImage";
import {
  MainTitle,
  ProjectContainer,
  SmallDescription,
  SmallDescriptionContainer,
  SmallScreenContainer,
  SmallTitle,
} from "./styles";
import useBreakpoint from "../../../../utils/useMediaQuery";
import theme from "../../../../styles/theme";

export default function Project() {
  const isSmallSmallScreen = useBreakpoint(theme.breakingPoints.sm);
  return (
    <>
      {isSmallSmallScreen ? (
        <SmallScreenContainer>
          <SmallTitle>Feature Project</SmallTitle>
          <MainTitle>Ramadan Juices</MainTitle>
          <ProjectImage />
          <SmallDescriptionContainer>
            <SmallDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ea
              quibusdam, id odio, eum sint recusandae neque sit ullam tempora
            </SmallDescription>
          </SmallDescriptionContainer>
        </SmallScreenContainer>
      ) : (
        <ProjectContainer>
          <ProjectImage />
          <ProjectDetails />
        </ProjectContainer>
      )}
    </>
  );
}
