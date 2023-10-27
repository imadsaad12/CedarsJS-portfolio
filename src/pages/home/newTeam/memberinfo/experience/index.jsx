import React,{useEffect,useState} from "react";
import {CircleContainer,Circle,PercentageText} from "./styles"
export default function Experience({percentage}) {
    const [strokeDashoffset, setStrokeDashoffset] = useState(100 - percentage);

    useEffect(() => {
      setStrokeDashoffset(100 - percentage);
    }, [percentage]);
  
    return (
      <CircleContainer>
        <Circle style={{ strokeDashoffset: strokeDashoffset }} />
        <PercentageText>{percentage}%</PercentageText>
      </CircleContainer>
    );
}
