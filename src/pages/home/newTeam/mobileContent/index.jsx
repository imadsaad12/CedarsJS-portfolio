import React from "react";
import {
  BatteryStyle,
  NetWorkStyle,
  OuterSpinner,
  TeamMemberContainer,
  TeamMembersContainer,
  Time,
  Title,
  WifiStyle,
} from "./styles";
import { members } from "../../../../static/teamData";
import { BiWifi2 } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { BsBatteryHalf } from "react-icons/bs";

export default function MobileContent({ setSelectedMember, selectedMember }) {
  const date = new Date();
  const formattedTime = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <>
      <Title>Meet Our Team</Title>
      <TeamMembersContainer>
        <Time>{formattedTime}</Time>
        <BiWifi2 size={15} style={WifiStyle} />
        <GiNetworkBars size={10} style={NetWorkStyle} />
        <BsBatteryHalf size={15} style={BatteryStyle} />
        {members.map(({ id, zIndex, top, left, image, ...rest }) => (
          <TeamMemberContainer
            zIndex={zIndex}
            top={top}
            left={left}
            onClick={() => setSelectedMember({ ...rest, image, id })}
            isClicked={selectedMember?.id === id}
            backgroundImage={image}
          >
            {/* <OuterSpinner isClicked={selectedMember?.id === id} /> */}
          </TeamMemberContainer>
        ))}
      </TeamMembersContainer>
    </>
  );
}
