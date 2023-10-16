import React from "react";
import { Container, MembersLayout } from "./styles";
import Member from "./member";

export default function Members({ teamMembers, handlemember }) {
  const activeId = teamMembers.find((member) => member.isClicked).id;

  return (
    <Container>
      <MembersLayout>
        {teamMembers.map((member) => (
          <Member
            handlemember={handlemember}
            member={member}
            activeId={activeId}
          />
        ))}
      </MembersLayout>
    </Container>
  );
}
