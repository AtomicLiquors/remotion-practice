import React from "react";
import styled from "styled-components";
import { AbsoluteFill } from "remotion";

const Circle = styled.div`
    height: 14px;
    width: 14px;
    border-radius: 7px;
    background-color: #ccc;
`;


export const Dot: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Circle/>
      
    </AbsoluteFill>
  );
};