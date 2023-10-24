import React from "react";
import { Container, MembersLayout } from "./styles";
import Member from "./member";

export default function Members({ teamMembers, handlemember }) {
  console.log(teamMembers)
  const activeId = teamMembers.find((member) => member.isClicked);

  return (
    <Container>
      <MembersLayout>
        {teamMembers.map((member) => (
          <Member
            handlemember={handlemember}
            member={member}
            activeId={activeId?.id}
          />
        ))}
      </MembersLayout>
    </Container>
  );
}
