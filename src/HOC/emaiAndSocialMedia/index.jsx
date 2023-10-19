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
          <IconContainer style={{ top: 20 }}>
            <CiFacebook size={30} />
          </IconContainer>
          <IconContainer style={{ top: 75 }}>
            <BiLogoInstagram size={30} />
          </IconContainer>
          <IconContainer style={{ top: 130 }}>
            <FaLinkedin size={25} />
          </IconContainer>
        </SubContainer>
        <Line />
      </SocialMediaContainer>
    </>
  );
}
