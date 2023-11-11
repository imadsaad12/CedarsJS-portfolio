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
import Stars from "../../../../styles/reusable/Stars.jsx";
import MultiLayer from "../../../../styles/reusable/MultiLayer.jsx";
import { Light } from "../../../../styles/reusable/styles.js";
import useBreakpoint from "../../../../utils/useMediaQuery";
import theme from "../../../../styles/theme";
export default function IntroDesktop() {
  const isSmallSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  return (
    <>
      <Star left={"10%"} top={"10%"} blur={"2px"} />
      <Star left={"55%"} top={"5%"} blur={"0px"} />
      <Star left={"50%"} top={"40%"} blur={"2px"} />
      <Star left={"15%"} top={"80%"} blur={"0px"} />
      <Star left={"80%"} top={"10%"} blur={"2px"} />
      <MultiLayer />
      <Comet left={"50%"} top={"4%"} />
      {/* <Comet left={"30%"} top={"4%"} /> */}
      {/* <Comet left={"10%"} top={"10%"} /> */}
      <Comet left={"15%"} top={"80%"} />
      <Comet left={"40%"} top={"80%"} />
      <Comet left={"60%"} top={"80%"} />
      <Comet left={"80%"} top={"22%"} />
      {/* <Comet left={"80%"} top={"4%"} /> */}
      <Comet left={"2%"} top={"4%"} />
      <Light
        styles={{
          right: "100px",
          top: "150px",
          width: "70px",
          height: "70px",
          blurwidth: "50px",
        }}
      />
      <LeftContainer>
        {/* <Stars bottom={null} top={"0"} width={"100%"} height={"50%"} />
        <Stars top={null} bottom={"0"}  width={"100%"} height={"50%"}  /> */}
        <Light
          styles={{
            left: "350px",
            bottom: "300px",
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
        {/* <Stars bottom={null} top={"0"}  width={"100%"} height={"50%"} />
        <Stars top={null} bottom={"0"}  width={"100%"} height={"50%"} /> */}
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
