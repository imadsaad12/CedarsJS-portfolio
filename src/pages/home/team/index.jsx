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
  LinesLayout,
  Circle,
} from "./styles";
import theme from "../../../styles/theme";
import useBreakpoint from "../../../utils/useMediaQuery";

import { toggleline, toggleLayers, togglecircle } from "./animation";
import Members from "./members";
import MemberDetails from "./memberdetails";
import Slider from "./slider";
export default function Team() {
  const isSmallSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      isClicked: true,
      upperHeight: 0,
      bottomHeight: 100,
      name: "Hadi Saab",
      job: "Software Developer",
    },
    {
      id: 2,
      isClicked: false,
      upperHeight: 34.5,
      bottomHeight: 65.5,
      name: "Imad Saad",
      job: "Software Developer",
    }
    ,
    {
      id: 3,
      isClicked: false,
      upperHeight: 65.5,
      bottomHeight: 34.5,
      name: "Ali Hashem",
      job: "Software Developer",
    },
    // {
    //   id: 4,
    //   isClicked: false,
    //   upperHeight: 100,
    //   bottomHeight: 0,
    //   name: "Bassel Kassem",
    //   job: "Software Developer",
    // },
  ]);

  const updatemembers = (memberid) => {
    const updatedTeamMembers = teamMembers.map((member) => {
      if (member.id === memberid) {
        // Set the specific id's isClicked to true
        return { ...member, isClicked: true };
      } else {
        // Set all other isClicked values to false
        return { ...member, isClicked: false };
      }
    });

    setTeamMembers(updatedTeamMembers);
  };

  const handlemember = (activeid) => {
    const oldid = teamMembers.find((member) => member.isClicked).id;

    toggleLayers(true);
    togglecircle(false, oldid);
    toggleline(false, oldid);
    setTimeout(() => {
      updatemembers(activeid);
      togglecircle(true, oldid);
      toggleline(true, oldid);
    }, 1000);

    setTimeout(() => {
      toggleLayers(false);
    }, 1500);
  };

  return (
    <Container id="about-us">
      <Header>
        <Number>II.</Number>
        <Title>Meet The Team</Title>
        <Line></Line>
      </Header>
      {isSmallSmallScreen ? (
        <Slider teamMembers={teamMembers}/>
      ) : (
        <MembersLayout>
          <Members teamMembers={teamMembers} handlemember={handlemember} />
          <LinesContainer>
            <LinesLayout>
              {teamMembers.map(({ isClicked, id }) => (
                <LineContainer>
                  <DrawingContainer isClicked={isClicked} id={"line" + id} />
                  <Circle isClicked={isClicked} id={"circle" + id} />
                </LineContainer>
              ))}
            </LinesLayout>
          </LinesContainer>
          <MemberDetails teamMembers={teamMembers} />
        </MembersLayout>
      )}
    </Container>
  );
}
