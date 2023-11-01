import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    /* margin-top: 5em; */
    /* height: 80vh; */
    height: 90vh;
    justify-content: center;

  }
  height: 85vh;
  position: relative;
`;
