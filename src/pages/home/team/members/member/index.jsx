import React from "react";
import hadi from "../../../../../static/hadi.jpg";
import { Container, Image, ImageWrapper ,MemberWrapper} from "./styles";
export default function Member({handlemember,member}) {
  return (
    <Container>
      <MemberWrapper onClick={()=>{handlemember(member.id)}}>
        <ImageWrapper>
          <Image src={hadi} />
        </ImageWrapper>
      </MemberWrapper>
    </Container>
  );
}
