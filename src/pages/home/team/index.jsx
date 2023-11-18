import React, { useState } from "react";
import {
  Container,
  Header,
  Number,
  Title,
  Line,
} from "./styles";
import theme from "../../../styles/theme";
import useBreakpoint from "../../../utils/useMediaQuery";
import { toggleline, toggleLayers, togglecircle } from "./animation";
import Slider from "./slider";
import { members } from "../../../static/teamData";
import NewTeam from "../newTeam";

export default function Team() {
  const isSmallSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  const [teamMembers, setTeamMembers] = useState(members);
  return (
    <Container id="about-us">
      <Header>
        <Number>01.</Number>
        <Title>Meet The Team</Title>
        <Line></Line>
      </Header>
      {isSmallSmallScreen ? <Slider teamMembers={teamMembers} /> : <NewTeam />}
    </Container>
  );
}
