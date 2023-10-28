import React from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  Hand,
  Light,
  Code,
  Title,
  InspireContainer,
  Inspire,
  TitleContainer,
  Star,
  Stars,
  Planet,
  MultiLayer,
  Comet,
  Stars2
} from "./styles.js";
import hand from "./hand.png";
import code from "./code.png";
import star from "./star.png";
import stars from "./stars.png";

import comet from "./comet.png";

import multilayer from "./multilayer.png";

export default function Intro() {
  return (
    <Container id="home">
      <Star src={star} left={"10%"} top={"10%"} blur={"2px"}/>
      <Star src={star} left={"55%"} top={"2%"} blur={"0px"}/>
      <Star src={star} left={"50%"} top={"40%"} blur={"2px"}/>

      <Star src={star} left={"15%"} top={"80%"} blur={"0px"}/>
      <Star src={star} left={"80%"} top={"10%"} blur={"2px"}/>
      {/* <Stars2 src={stars}/> */}

      
      {/* <Planet/> */}
      <MultiLayer src= {multilayer}/>
      <Comet src={comet} left={"50%"} top={"4%"} />
      <Comet src={comet} left={"30%"} top={"4%"} />

      <Comet src={comet} left={"10%"} top={"10%"} />

      <Comet src={comet} left={"20%"} top={"20%"} />
      <Comet src={comet} left={"40%"} top={"12%"} />
      <Comet src={comet} left={"60%"} top={"14%"} />
      <Comet src={comet} left={"80%"} top={"11%"} />
      <Comet src={comet} left={"80%"} top={"4%"} />
      <Comet src={comet} left={"2%"} top={"4%"} />
      {/* <Comet src={comet} left={"20%"} top={"10%"} />
      <Comet src={comet} left={"20%"} top={"10%"} /> */}

      <Light right={"0px"} top={"100px"} left={null} bottom={null}  width={"70px"} height={"70px"} blurwidth={"50px"}/>
      <LeftContainer>
      <Stars src={stars} left={"0"} bottom={null} right={null} top={"0"}/>
      <Stars src={stars} left={"0"} top={null} right={null} bottom={"0"}/>

      <Light left={"0"} top={null} right={null} bottom={"0"}  width={"200px"} height={"200px"} blurwidth={"150px"}/>

        <TitleContainer>

          {/* <Border/> */}
          <Title>We Develop</Title>
          <Title>We Design</Title>
          <InspireContainer>
            <Title>We</Title>
            <Inspire>Inspire</Inspire>
          </InspireContainer>
        </TitleContainer>
      </LeftContainer>
      <RightContainer>
      <Stars src={stars}  bottom={null}  top={"0"}/>
      <Stars src={stars}  top={null}  bottom={"0"}/>
        <Hand src={hand} />
        <Code src={code} />

        <Light right={null} top={null} left={"100px"} bottom={0}  width={"300px"} height={"300px"} blurwidth={"100px"}/>
      </RightContainer>
    </Container>
  );
}
