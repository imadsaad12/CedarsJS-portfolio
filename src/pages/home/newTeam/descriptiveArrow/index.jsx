import React from "react";
import { Arrow, ClickContainer, ClickText } from "./styles";
import arrow from "../../../../static/arrow.png";

export default function DescriptiveArrow({ selectedMember }) {
  return (
    <>
      {!selectedMember && (
        <ClickContainer>
          <ClickText>
            Click To View <br />
            Member Info
          </ClickText>
          <Arrow src={arrow} />
        </ClickContainer>
      )}
    </>
  );
}
