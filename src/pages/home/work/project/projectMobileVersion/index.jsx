import {
  Description,
  DescriptionContainer,
  Container,
  Header,
  Logo,
  Title,
  SkillsContainer,
  Skill,
} from "./styles";
import test from "../../../../../static/testLogo.png";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectsMobileVersion() {
  return (
    <>
      {[1, 2, 2, 2, 2].map(() => {
        return (
          <Container>
            <Header>
              <Logo src={test} />
              <BiLinkExternal
                size={25}
                style={{ opacity: "0.7", marginBottom: "3px" }}
              />
            </Header>
            <DescriptionContainer>
              <Title>Ramadan juices</Title>
              <Description>
                Building a custome multisite compatib WordPress plugin to build
                global each search with Algolia
              </Description>
            </DescriptionContainer>
            <SkillsContainer>
              <Skill>React</Skill>
              <Skill>Strapi</Skill>
              <Skill>PostgreSQL</Skill>
              <Skill></Skill>
            </SkillsContainer>
          </Container>
        );
      })}
    </>
  );
}
