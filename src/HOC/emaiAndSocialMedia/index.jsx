import React from "react";
import {
  Email,
  EmailContainer,
  IconContainer,
  Line,
  SocialMediaContainer,
  SubContainer,
} from "./styles";
import { CiFacebook } from "react-icons/ci";
import { BiLogoInstagram } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

export default function EmailAndSocialMedia() {
  return (
    <>
      <EmailContainer>
        <Email>cedarsjs@gmail.com</Email>
        <Line />
      </EmailContainer>
      <SocialMediaContainer>
        <SubContainer>
          <IconContainer style={{ top: 60 }}>
            <CiFacebook size={25} />
          </IconContainer>
          <IconContainer style={{ top: 110 }}>
            <BiLogoInstagram size={25} />
          </IconContainer>
          <IconContainer style={{ top: 160 }}>
            <FaLinkedin size={20} />
          </IconContainer>
        </SubContainer>
        <Line />
      </SocialMediaContainer>
    </>
  );
}
