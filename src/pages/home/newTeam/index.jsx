import { useState } from "react";
import {
  Container,
  InnerCircle,
  InnerSpinner,
  Mobile,
  MobileFrame,
  OuterSpinner,
  TeamMemberContainer,
  TeamMembersContainer,
} from "./styles";
import phone from "./x.png";
import { members } from "../../../static/teamData";
import { BiWifi2 } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { BsBatteryHalf } from "react-icons/bs";

export default function NewTeam() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container>
      <Mobile>
        <TeamMembersContainer>
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
        <MobileFrame src={phone} zIndex={selectedId ? "9" : "1"} />
      </Mobile>
    </Container>
  );
}
