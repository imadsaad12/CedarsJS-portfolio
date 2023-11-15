import React from "react";
import {
  LeftContainer,
  RightContainer,
  Hand,
  Code,
  Title,
  InspireContainer,
  Inspire,
  TitleContainer,
} from "./styles.js";
import hand from "../../../../static/hand.png";
import code from "../../../../static/code.png";
import Comet from "../../../../styles/reusable/Comet.jsx";
import Star from "../../../../styles/reusable/Star.jsx";
import MultiLayer from "../../../../styles/reusable/MultiLayer.jsx";
import { Light } from "../../../../styles/reusable/styles.js";

export default function IntroDesktop() {
  return (
    <>
      <Star left={"10%"} top={"10%"} blur={"2px"} />
      <Star left={"55%"} top={"5%"} blur={"0px"} />
      <Star left={"50%"} top={"40%"} blur={"2px"} />
      <Star left={"15%"} top={"80%"} blur={"0px"} />
      <Star left={"80%"} top={"10%"} blur={"2px"} />
      <MultiLayer />
      <Comet left={"50%"} top={"4%"} />
      <Comet left={"15%"} top={"80%"} />
      <Comet left={"40%"} top={"80%"} />
      <Comet left={"60%"} top={"80%"} />
      <Comet left={"80%"} top={"22%"} />
      <Comet left={"2%"} top={"4%"} />
      <Light
        styles={{
          right: "100px",
          top: "150px",
          width: "70px",
          height: "70px",
        }}
      />
      <LeftContainer>
        <Light
          styles={{
            left: "20px",
            bottom: "200px",
            width: "200px",
            height: "200px",
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
        <Hand src={hand} />
        <Code src={code} />
        <Light
          styles={{
            left: "200px",
            bottom: "100px",
            width: "300px",
            height: "300px",
            blurwidth: "100px",
          }}
        />
      </RightContainer>
    </>
  );
}
