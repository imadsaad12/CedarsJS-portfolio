import React from "react";
import { Container, Header, Number, Title, Line } from "./styles";
import GIT from "./GITComponent";

export default function Contact() {
  return (
    <Container id="contact">
      <Header>
        <Number>04.</Number>
        <Title>What’s Next?</Title>
        <Line />
      </Header>
      <GIT />
    </Container>
  );
}
