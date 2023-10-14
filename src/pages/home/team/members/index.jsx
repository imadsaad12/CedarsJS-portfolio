import React from "react";
import { Container, MembersLayout } from "./styles";
import Member from "./member";
import { DrawingContainer } from "../styles";

export default function Members({ teamMembers, handlemember }) {
  return (
    <Container>
      <MembersLayout>
        {teamMembers.map((member) => (
          <Member handlemember={handlemember} member={member} />
        ))}
      </MembersLayout>
    </Container>
  );
}
