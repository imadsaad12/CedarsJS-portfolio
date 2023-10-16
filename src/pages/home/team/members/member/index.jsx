import React from "react";
import hadi from "../../../../../static/hadi.jpg";
import { Container, Image, ImageWrapper ,MemberWrapper,ColorLayer} from "./styles";
export default function Member({handlemember,member,activeId}) {
  return (
    <Container>
      <MemberWrapper onClick={()=>{handlemember(member.id)}} isClicked={member.id==activeId?true:false}>
        <ColorLayer isClicked={member.id==activeId?true:false}/>
        <ImageWrapper isClicked={member.id==activeId?true:false}>
          <Image src={hadi} />
        </ImageWrapper>
      </MemberWrapper>
    </Container>
  );
}
