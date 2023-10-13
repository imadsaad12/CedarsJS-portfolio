import React from "react";
import {Container,Header,Number,Title,Line,MembersLayout} from "./styles"
import Members from "./members";
import MemberDetails from "./memberdetails";
export default function Team() {
  return (
    <Container>
      <Header>
        <Number>II.</Number>
        <Title>Meet The Team</Title>
        <Line></Line>
      </Header>
      <MembersLayout>
          <Members/>
          <MemberDetails/>
          
      </MembersLayout>
    </Container>
  );
}
