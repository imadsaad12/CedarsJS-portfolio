import React, { useEffect, useState, useRef } from "react";
import starsvertical from "../../../../static/starsvertical.png";
import earth from "../../../../static/earth.png";
import overlay from "../../../../static/overlay.png";

import {
  Stars,
  Earth,
  Letter,
  OverlayLight,
  Light,
  DescriptionContainer,
  Border,
  Description,
  DescriptionContainer2,
  Border2,
} from "./styles";
export default function IntroMobile() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Earth src={earth} scrolled={scrolled} />
      <OverlayLight src={overlay} scrolled={scrolled} />
      <DescriptionContainer scrolled={scrolled}>
        <Border />
        <Description>
          A talented group of developers, shaping web and mobile apps through
          design, development, and inspiration.
        </Description>
      </DescriptionContainer>
      <DescriptionContainer2 scrolled={scrolled}>
        <Border2 />
        <Description>
          Our team is at the forefront of technology, constantly embracing the
          latest advancements.
        </Description>
      </DescriptionContainer2>
      {["C", "E", "D", "A", "R", "S", "J", "S"].map((letter, index) => (
        <Letter
          top={`${index * 1.1}em`}
          left={`${(index + 1) * 10.5}%`}
          scrolled={scrolled}
        >
          {letter}
        </Letter>
      ))}
      <Stars src={starsvertical} />
      <Light
        styles={{
          bottom: "0",
          width: "150%",
          height: "150px",
          blurwidth: "100px",
        }}
      />
    </>
  );
}
