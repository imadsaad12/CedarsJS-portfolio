import React from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  Hand,
  Code,
  Title,
  InspireContainer,
  Inspire,
  TitleContainer,
} from "./styles.js";
import hand from "../../../static/hand.png";
import code from "../../../static/code.png";
import Comet from "../../../styles/reusable/Comet.jsx";
import Star from "../../../styles/reusable/Star.jsx";
import Stars from "../../../styles/reusable/Stars.jsx";
import MultiLayer from "../../../styles/reusable/MultiLayer.jsx";
import { Light } from "../../../styles/reusable/styles.js";
export default function Intro() {
  return (
    <Container id="home">
      <Star left={"10%"} top={"10%"} blur={"2px"} />
      <Star left={"55%"} top={"5%"} blur={"0px"} />
      <Star left={"50%"} top={"40%"} blur={"2px"} />
      <Star left={"15%"} top={"80%"} blur={"0px"} />
      <Star left={"80%"} top={"10%"} blur={"2px"} />
      <MultiLayer />
      <Comet left={"50%"} top={"4%"} />
      {/* <Comet left={"30%"} top={"4%"} /> */}
      {/* <Comet left={"10%"} top={"10%"} /> */}
      <Comet left={"20%"} top={"20%"} />
      <Comet left={"40%"} top={"12%"} />
      <Comet left={"60%"} top={"14%"} />
      <Comet left={"80%"} top={"11%"} />
      {/* <Comet left={"80%"} top={"4%"} /> */}
      <Comet left={"2%"} top={"4%"} />
      <Comet left={"20%"} top={"10%"} />
      <Comet left={"20%"} top={"10%"} />
      <Light
        styles={{
          right: "0px",
          top: "200px",
          width: "70px",
          height: "70px",
          blurwidth: "50px",
        }}
      />
      <LeftContainer>
        <Stars bottom={null} top={"0"} width={"100%"} height={"50%"} />
        <Stars top={null} bottom={"0"}  width={"100%"} height={"50%"}  />
        <Light
          styles={{
            left: "0px",
            bottom: "0px",
            width: "200px",
            height: "200px",
            blurwidth: "150px",
          }}
        />

        <TitleContainer>
          <Title>We Develop</Title>
          <Title>We Design</Title>
          <InspireContainer>
            <Title>We</Title>
            <Inspire>Inspire</Inspire>
          </InspireContainer>
        </TitleContainer>
      </LeftContainer>
      <RightContainer>
        <Stars bottom={null} top={"0"}  width={"100%"} height={"50%"} />
        <Stars top={null} bottom={"0"}  width={"100%"} height={"50%"} />
        <Hand src={hand} />
        <Code src={code} />
        <Light
          styles={{
            left: "100px",
            bottom: "0px",
            width: "300px",
            height: "300px",
            blurwidth: "100px",
          }}
        />
      </RightContainer>
    </Container>
  );
}
