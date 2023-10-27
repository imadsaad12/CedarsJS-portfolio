import React from "react";
import { Container, Line } from "./styles";

export default function AnimatedLines() {
  return (
    <Container>
      <Line height={"80px"} />
      <Line height={"60px"} />
      <Line height={"50px"} />
      <Line height={"50px"} />
      <Line height={"75px"} />
    </Container>
  );
}
