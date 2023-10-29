import React from "react";
import { Container, Header, Number, Title, Line } from "./styles";
import Project from "./project";

export default function Work() {
  return (
    <Container id="work">
      <Header>
        <Number>03.</Number>
        <Title>Some Things We’ve Built</Title>
        <Line />
      </Header>
      <Project />
    </Container>
  );
}
