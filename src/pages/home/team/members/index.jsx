import React from "react";
import { Container,MembersLayout } from "./styles";
import Member from "./member";

const members = ["hadi", "imad", "hashem", "bassel"];
export default function Members() {
  return (
    <Container>
        <MembersLayout>
      {members.map((member) => (
        <Member />
      ))}
      </MembersLayout>
    </Container>
  );
}
