import { useState } from "react";
import {
  BatteryStyle,
  Container,
  InnerCircle,
  InnerSpinner,
  Mobile,
  MobileFrame,
  NetWorkStyle,
  OuterSpinner,
  TeamMemberContainer,
  TeamMembersContainer,
  Time,
  WifiStyle,
} from "./styles";
import phone from "./x.png";
import { members } from "../../../static/teamData";
import { BiWifi2 } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { BsBatteryHalf } from "react-icons/bs";

export default function NewTeam() {
  const [selectedId, setSelectedId] = useState(null);
  const date = new Date();
  const formattedTime = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Container>
      <Mobile>
        <TeamMembersContainer>
          <Time>{formattedTime}</Time>
          <BiWifi2 size={15} style={WifiStyle} />
          <GiNetworkBars size={10} style={NetWorkStyle} />
          <BsBatteryHalf size={15} style={BatteryStyle} />
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
        <MobileFrame src={phone} zIndex={selectedId ? "9" : "1"} />
      </Mobile>
    </Container>
  );
}
