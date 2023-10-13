import React, { useState } from "react";
import {
  Container,
  Header,
  Number,
  Title,
  Line,
  MembersLayout,
  DrawingContainer,
  LinesContainer,
  LineContainer,
  Circle,
} from "./styles";
import Members from "./members";
import MemberDetails from "./memberdetails";
export default function Team() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, isClicked: true },
    { id: 2, isClicked: false },
    { id: 3, isClicked: false },
    { id: 4, isClicked: false },
  ]);
  return (
    <Container id="about-us">
      <Header>
        <Number>II.</Number>
        <Title>Meet The Team</Title>
        <Line></Line>
      </Header>
      <MembersLayout>
        <Members />
        <LinesContainer>
          {teamMembers.map(({ isClicked }) => (
            <LineContainer>
              <DrawingContainer isClicked={isClicked} />
              <Circle />
            </LineContainer>
          ))}
        </LinesContainer>
        <MemberDetails />
      </MembersLayout>
    </Container>
  );
}
