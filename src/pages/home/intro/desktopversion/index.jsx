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
import { Light } from "../../../../styles/reusable/styles.js";
import Space from "./space/index.jsx";

export default function IntroDesktop() {
  return (
    <>
      <Space />
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
