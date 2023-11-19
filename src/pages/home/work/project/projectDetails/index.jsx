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
} from "./styles";

const skills = ["ReactJs", "TypeScript", "StyledCmpts"];

export default function ProjectDetails() {
  return (
    <DetailsContainer>
      <TitleContainer>
        <SubTitle>Featured Project</SubTitle>
        <Title>Ramadan Juice</Title>
      </TitleContainer>

      <DescriptionContainer>
        <Description>
          Crafted a lively freelance website for your juice shop, blending
          eye-catching design with user-friendly features. Showcases your tasty
          offerings with style, making it easy for customers to explore and
          engage. The perfect online hub for your vibrant juice business
        </Description>
      </DescriptionContainer>
      <SkillsContainer>
        <SkillsList>
          {skills.map((skill) => (
            <Skill>{skill}</Skill>
          ))}
        </SkillsList>
        <IconsContainer>
          <MdOutlineIosShare
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://www.ramadanjuice-saida.com/")
            }
          />
        </IconsContainer>
      </SkillsContainer>
    </DetailsContainer>
  );
}
