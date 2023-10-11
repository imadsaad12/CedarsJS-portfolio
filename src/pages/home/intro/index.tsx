import React from "react";
import { Container, Description, Header, SmallText, SubHeader } from "./styles";

export default function Intro() {
  return (
    <Container>
      <SmallText>Hi, we are </SmallText>
      <Header>Cedars JS.</Header>
      <SubHeader>we build things for the web.</SubHeader>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, consequatur magnam illum animi corrupti similique quod
        quaerat eius ducimus. Voluptas, nemo. Qui hic adipisci, obcaecati minima
        veniam perspiciatis aspernatur sed!
      </Description>
    </Container>
  );
}
