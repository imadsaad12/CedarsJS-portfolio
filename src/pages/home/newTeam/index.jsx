import { useState, useRef } from "react";
import {
  Container,
  InnerCircle,
  InnerSpinner,
  Mobile,
  MobileFrame,
  OuterSpinner,
  TeamMemberContainer,
  TeamMembersContainer,
  SwipeContainer,
  Swipe,
  AnimatedIcon,
  Title,
  ClickContainer,
  Arrow,
  ClickText,
} from "./styles";
import arrow from "./arrow.png";

import phone from "./x.png";
import { members } from "../../../static/teamData";
import { BiWifi2 } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { BsBatteryHalf } from "react-icons/bs";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import MemberInfo from "./memberinfo";

export default function NewTeam() {
  const divRef = useRef(null);
  let startX = 0;
  let startY = 0;

  const handleMouseDown = (e) => {
    startX = e.clientX;
    startY = e.clientY;
  };

  const handleMouseUp = (e) => {
    const endX = e.clientX;
    const endY = e.clientY;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    // Determine the swipe direction based on deltaX and deltaY
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > 50) {
        console.log("Mouse swiped right");
        // Perform your desired action here
      } else if (deltaX < -50) {
        console.log("Mouse swiped left");
        // Perform your desired action here
      }
    } else {
      // Vertical swipe
      if (deltaY > 50) {
        console.log("Mouse swiped down");
        // Perform your desired action here
      } else if (deltaY < -50) {
        console.log("Mouse swiped up");
        setSelectedId(null);
        // Perform your desired action here
      }
    }
  };
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container>
      {!selectedId &&
      <ClickContainer>
        <ClickText>
          Click To View <br />
          Member Info
        </ClickText>
        <Arrow src={arrow} />
      </ClickContainer>
}
      {selectedId && <MemberInfo />}
      <Mobile>
        <TeamMembersContainer>
          <Title>Meet Our Team</Title>

          <BiWifi2
            size={15}
            style={{
              color: "white",
              position: "absolute",
              zIndex: "10",
              right: "55",
              top: "21",
            }}
          />
          <GiNetworkBars
            size={10}
            style={{
              color: "white",
              position: "absolute",
              zIndex: "10",
              right: "43",
              top: "23",
            }}
          />
          <BsBatteryHalf
            size={15}
            style={{
              color: "white",
              position: "absolute",
              zIndex: "10",
              right: "22",
              top: "21",
            }}
          />
          {members.map(({ id, zIndex, top, left, image }, index) => (
            <TeamMemberContainer
              zIndex={zIndex}
              top={top}
              left={left}
              onClick={() => setSelectedId(id)}
              isClicked={selectedId === id}
              backgroundImage={image}
            >
              {index % 2 === 0 ? <OuterSpinner /> : <InnerSpinner />}
            </TeamMemberContainer>
          ))}
        </TeamMembersContainer>
        <MobileFrame
          src={phone}
          zIndex={selectedId ? "9" : "1"}
          ref={divRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
        {selectedId && (
          <SwipeContainer>
            <AnimatedIcon />
            <Swipe>Swipe Up</Swipe>
          </SwipeContainer>
        )}
      </Mobile>
    </Container>
  );
}
