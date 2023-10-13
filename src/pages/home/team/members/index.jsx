import React from "react";
import { Container, MembersLayout } from "./styles";
import Member from "./member";
import { DrawingContainer } from "../styles";

const members = ["hadi", "imad", "hashem", "bassel"];
export default function Members() {
  return (
    <Container>
      {members.map((member) => (
        <Member />
      ))}
    </Container>
  );
}
