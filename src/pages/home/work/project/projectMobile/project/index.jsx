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
  Skill
} from "./styles";
import { BiLogoSlack, BiTime } from "react-icons/bi";
import { TbFileDescription } from "react-icons/tb";


export default function Project({ index, activeIndex, setactiveIndex }) {
  const handleActiveIndex = () => {
    if (activeIndex.includes(index)) {
      const updatedIndexes = activeIndex.filter((existingItem) => existingItem !== index);
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
          <LogoContainer>
            <BiLogoSlack />
          </LogoContainer>
          <NameContainer>
            <Name>Ramadan Juice</Name>
            <TimeContainer>
              <BiTime />
              <Time>10/22/2023</Time>
              <Dash />
              <Time>10/22/2024</Time>
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
                <TbFileDescription size="35px"/>
                <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur nulla debitis
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
