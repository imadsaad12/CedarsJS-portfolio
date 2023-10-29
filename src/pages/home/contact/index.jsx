import React from "react";
import { Container, Header, Number, Title, Line } from "./styles";
import GIT from "./GITComponent";
import Stars from "../../../styles/reusable/Stars";

export default function Contact() {
  return (
    <Container id="contact">
              <Stars left={"0"} top={"0"} width={"50%"} height={"50%"} />
        <Stars left={"0"} bottom={"0"}  width={"50%"} height={"50%"}  />
        <Stars right={"0"} top={"0"} width={"50%"} height={"50%"} />
        <Stars right={"0"} bottom={"0"}  width={"50%"} height={"50%"}  />
      <Header>
        <Number>04.</Number>
        <Title>What’s Next?</Title>
        <Line />
      </Header>
      <GIT />
    </Container>
  );
}
