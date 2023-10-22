import {
  Description,
  DescriptionContainer,
  Container,
  Logo,
  Title,
  SkillsContainer,
  Skill,
  Link,
  Divider,
  Wrapper,
} from "./styles";
import test from "../../../../../static/testLogo.png";

export default function ProjectsMobileVersion() {
  return (
    <Wrapper>
      {[1, 2, 2, 2, 2].map(() => {
        return (
          <Container>
            <Logo src={test} />
            <Title>Ramadan Juices</Title>
            <Link>ramadanjuice-said.com</Link>
            <DescriptionContainer>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur nulla debitis vero laudantium cum culpa earum ipsa
              </Description>
            </DescriptionContainer>
            <Divider />
            <SkillsContainer>
              <Skill>React</Skill>
              <Skill>Strapi</Skill>
              <Skill>PostgreSQL</Skill>
            </SkillsContainer>
          </Container>
        );
      })}
    </Wrapper>
  );
}
