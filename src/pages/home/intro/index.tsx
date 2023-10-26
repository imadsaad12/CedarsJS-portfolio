import React from "react";
import { Container,LeftContainer, RightContainer ,Hand,Light,Code,Title,InspireContainer,Inspire,TitleContainer} from "./styles";
import hand from "./hand.png"
import code from "./code.png"

export default function Intro() {
  return (
    <Container id="home">
      <LeftContainer>
        <TitleContainer>

        <Title>We Develop</Title>
        <Title>We Design</Title>
        <InspireContainer>
            <Title>We</Title>
            <Inspire>Inspire</Inspire>

        </InspireContainer>
        </TitleContainer>
      </LeftContainer>
      <RightContainer>
        <Hand src={hand}/>
        <Code src={code}/>

        <Light/>
      </RightContainer>
    </Container>
  );
}
