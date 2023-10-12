import React from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineIosShare } from "react-icons/md";

import {
  DetailsContainer,
  SubTitle,
  Title,
  DescriptionContainer,
  Description,
  TitleContainer,
  SkillsList,
  Skill,
  SkillsContainer,
  IconsContainer,
} from "../styles";

const skills = ["ReactJs", "TypeScript","StyledCmpts"];

export default function ProjectDetails() {
  return (
    <DetailsContainer>
      <TitleContainer>
        <SubTitle>Featured Project</SubTitle>
        <Title>Ramadan Juice</Title>
      </TitleContainer>

      <DescriptionContainer>
        <Description>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </Description>
      </DescriptionContainer>
      <SkillsContainer>
        <SkillsList>
          {skills.map((skill) => (
            <Skill>{skill}</Skill>
          ))}
        </SkillsList>
        <IconsContainer>
          <FiGithub />
          <MdOutlineIosShare />
        </IconsContainer>
      </SkillsContainer>
    </DetailsContainer>
  );
}
