import { useState, useRef } from "react";
import {
  Container,
  Mobile,
  MobileFrame,
  SwipeContainer,
  Swipe,
  AnimatedIcon,
} from "./styles";

import phone from "../../../static/phoneFrame.png";
import MemberInfo from "./memberinfo";
import Background from "./background/inde";
import MobileContent from "./mobileContent";
import DescriptiveArrow from "./descriptiveArrow";

export default function NewTeam() {
  const divRef = useRef(null);
  let startY = 0;

  const handleMouseDown = (e) => {
    startY = e.clientY;
  };

  const handleMouseUp = (e) => {
    const endY = e.clientY;
    const deltaY = endY - startY;

    if (deltaY < -50) {
      setSelectedMember(null);
    }
  };

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <Container>
      <Background />
      <DescriptiveArrow selectedMember={selectedMember} />
      <MemberInfo selectedMember={selectedMember} />
      <Mobile>
        <MobileContent
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}
        />
        <MobileFrame
          src={phone}
          zIndex={selectedMember ? "9" : "1"}
          ref={divRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
        {selectedMember && (
          <SwipeContainer>
            <AnimatedIcon />
            <Swipe>Swipe Up</Swipe>
          </SwipeContainer>
        )}
      </Mobile>
    </Container>
  );
}
