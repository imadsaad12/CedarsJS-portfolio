import React from "react";
import {
  Container,
  MainContainer,
  HiddenContainer,
  Wrapper,
  LogoContainer,
  BorderContainer,
  NameContainer,
  Name,
  TimeContainer,
  Time,
  Dash,
  Border,
  HiddenWrapper,
  DescriptionContainer,
  Description,
  SkillsContainer,
  Skill,
} from "./styles";
import { BiLogoSlack, BiTime } from "react-icons/bi";
import { TbFileDescription } from "react-icons/tb";
import ramadanLogo from "../../../../../../static/ramadanJuiceLogo.png";

export default function Project({ index, activeIndex, setactiveIndex }) {
  const handleActiveIndex = () => {
    if (activeIndex.includes(index)) {
      const updatedIndexes = activeIndex.filter(
        (existingItem) => existingItem !== index
      );
      setactiveIndex(updatedIndexes);
    } else {
      // If the item is not found, append it
      setactiveIndex((prevActiveIndex) => [...prevActiveIndex, index]);
    }
  };
  return (
    <Container>
      <MainContainer onClick={handleActiveIndex}>
        <Wrapper>
          <LogoContainer
            onClick={() =>
              (window.location.href = "https://www.ramadanjuice-saida.com/")
            }
          >
            <img
              src={ramadanLogo}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
          </LogoContainer>
          <NameContainer>
            <Name>Ramadan Juice</Name>
            <TimeContainer>
              <BiTime />
              <Time>20/7/2023</Time>
              <Dash />
              <Time>20/8/2023</Time>
            </TimeContainer>
          </NameContainer>

          <BorderContainer>
            <Border index={index} activeIndex={activeIndex} />
          </BorderContainer>
        </Wrapper>
      </MainContainer>
      <HiddenContainer index={index} activeIndex={activeIndex}>
        <HiddenWrapper>
          <DescriptionContainer>
            <TbFileDescription size="30px" style={{ marginTop: "3%" }} />
            <Description>
              Crafted a lively freelance website for your juice shop, blending
              eye-catching design with user-friendly features. Showcases your
              tasty offerings with style, making it easy for customers to
              explore and engage. The perfect online hub for your vibrant juice
              business
            </Description>
          </DescriptionContainer>
          <SkillsContainer>
            <Skill>React</Skill>
            <Skill>Strapi</Skill>
            <Skill>PostgreSQL</Skill>
          </SkillsContainer>
        </HiddenWrapper>
      </HiddenContainer>
    </Container>
  );
}
