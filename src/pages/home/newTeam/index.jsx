import React, { useState } from "react";
import {
  Container,
  Image,
  Mobile,
  TeamMemberContainer,
  TeamMembersContainer,
} from "./styles";
import phone from "./x.png";
import imad from "../../../static/imad.jpg";
export default function NewTeam() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container>
      <Mobile>
        <TeamMembersContainer>
          <TeamMemberContainer zIndex="2" top="10%" left="0" />
          <TeamMemberContainer zIndex="3" top="10%" left="45%" />
          <TeamMemberContainer zIndex="4" top="39%" left="0" />
          <TeamMemberContainer zIndex="5" top="39%" left="45%" />
          <TeamMemberContainer
            zIndex="6"
            top="70%"
            left="0"
            isClicked={isClicked}
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
          <TeamMemberContainer zIndex="7" top="70%" left="45%">
            {/* <Image src={imad} /> */}
          </TeamMemberContainer>
        </TeamMembersContainer>
        <img
          src={phone}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: isClicked ? "9" : "1",
            // transition: "all 1s ease-in-out",
          }}
        />
      </Mobile>
    </Container>
  );
}
