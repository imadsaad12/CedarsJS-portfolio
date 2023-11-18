import React from "react";
import Comet from "../../../../../styles/reusable/Comet.jsx";
import Star from "../../../../../styles/reusable/Star.jsx";
import MultiLayer from "../../../../../styles/reusable/MultiLayer.jsx";
import { Light } from "../../../../../styles/reusable/styles.js";
export default function Space() {
  return (
    <>
      <Star left={"10%"} top={"10%"} blur={"2px"} />
      <Star left={"55%"} top={"5%"} blur={"0px"} />
      <Star left={"50%"} top={"40%"} blur={"2px"} />
      <Star left={"15%"} top={"80%"} blur={"0px"} />
      <Star left={"80%"} top={"10%"} blur={"2px"} />
      <MultiLayer />
      <Comet left={"50%"} top={"4%"} />
      <Comet left={"15%"} top={"80%"} />
      <Comet left={"40%"} top={"80%"} />
      <Comet left={"60%"} top={"80%"} />
      <Comet left={"80%"} top={"22%"} />
      <Comet left={"2%"} top={"4%"} />
      <Light
        styles={{
          right: "100px",
          top: "150px",
          width: "70px",
          height: "70px",
        }}
      />
    </>
  );
}
