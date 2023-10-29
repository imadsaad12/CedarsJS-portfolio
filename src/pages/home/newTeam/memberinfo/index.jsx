import React from "react";
import Experience from "./experience";
import Info from "./info";
import Links from "./Links";
import AnimatedLines from "./animatedLines";
export default function MemberInfo({ selectedMember }) {
  return (
    <>
      {selectedMember && (
        <>
          <AnimatedLines />
          <Links {...selectedMember} />
          <Info {...selectedMember} />
          <Experience {...selectedMember} />
        </>
      )}
    </>
  );
}
