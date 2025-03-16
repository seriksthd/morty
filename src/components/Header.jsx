import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>morty </h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-bottom: 30px;
  background-color: #333;
  & > h1 {
    color: #fff;
    text-align: center;
  }
`;
