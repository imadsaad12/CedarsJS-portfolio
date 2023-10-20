import React from "react";
import { Container, Description, Header, SmallText, SubHeader } from "./styles";

export default function Intro() {
  return (
    <Container id="home">
      <SmallText>Hi, we are </SmallText>
      <Header>Cedars JS.</Header>
      <SubHeader>we build things for the web.</SubHeader>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. quaerat eius
        ducimus. Voluptas, nemo. Qui hic adipisci, obcaecati minima veniam
      </Description>
    </Container>
  );
}
