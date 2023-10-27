import { useState, useRef } from "react";
import {
  BatteryStyle,
  Container,
  Mobile,
  MobileFrame,
  NetWorkStyle,
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
  Time,
  WifiStyle,
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
        setSelectedId(null);
        // Perform your desired action here
      }
    }
  };
  const [selectedId, setSelectedId] = useState(null);
  const date = new Date();
  const formattedTime = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Container>
      {!selectedId && (
        <ClickContainer>
          <ClickText>
            Click To View <br />
            Member Info
          </ClickText>
          <Arrow src={arrow} />
        </ClickContainer>
      )}
      {selectedId && <MemberInfo />}
      <Mobile>
        <TeamMembersContainer>
          <Time>{formattedTime}</Time>
          <BiWifi2 size={15} style={WifiStyle} />
          <GiNetworkBars size={10} style={NetWorkStyle} />
          <BsBatteryHalf size={15} style={BatteryStyle} />
          {members.map(({ id, zIndex, top, left, image }) => (
            <TeamMemberContainer
              zIndex={zIndex}
              top={top}
              left={left}
              onClick={() => setSelectedId(id)}
              isClicked={selectedId === id}
              backgroundImage={image}
            >
              <OuterSpinner isClicked={selectedId === id} />
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
