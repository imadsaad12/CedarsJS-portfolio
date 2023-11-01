import React,{useEffect, useState} from "react";
import starsvertical from "./starsvertical.png";
import earth from "./earth.png";
import overlay from "./overlay.png";
import screen from "./screen.png";

import {Stars, Earth,TitleContainer,Letter,OverlayLight ,ScreenLight} from "./styles";
export default function IntroMobile() {
  const [scrolled,setScrolled]=useState(false)
  useEffect(() => {

    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos)

      if (currentScrollPos >= 0) {
        setScrolled(true)
        // document.getElementById("navbar").style.boxShadow = "none";
      }

    };
  });

  useEffect(()=>{
    console.log("hi")

  },[])
  return (
    <>
      <Earth src={earth} scrolled={scrolled}/>
      <OverlayLight src={overlay}/>
      {/* <ScreenLight src={screen}/> */}

      <TitleContainer>
        <Letter>C</Letter>
        <Letter>E</Letter>
        <Letter>D</Letter>
        <Letter>A</Letter>
        <Letter>R</Letter>
        <Letter>S</Letter>
    </TitleContainer>
      <Stars src={starsvertical} />

    </>
  );
}
