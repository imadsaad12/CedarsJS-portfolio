import React from "react";
import { Container, Header, Number, Title, Line } from "./styles";
import GIT from "./GITComponent";

export default function Contact() {
  return (
    <Container id="contact">
      <Header>
        <Number>IV.</Number>
        <Title>What’s Next?</Title>
        <Line />
      </Header>
      <GIT /> 
    </Container>
  );
}
