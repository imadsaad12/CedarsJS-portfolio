import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 5em;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;
export const Item = styled.div`
  width:  ${(props) => props.index==props.currentIndex?"10px":"8px"}; 
  height: ${(props) => props.index==props.currentIndex?"10px":"8px"}; ;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.primaryFontColor};
  border-radius: 50%;
  background-color: ${(props) => props.index==props.currentIndex?props.theme.colors.secondaryFontColor:null};
  transition:all 0.3s ease-in-out; 
`;
