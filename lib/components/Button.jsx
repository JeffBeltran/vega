import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.25rem 1.5rem;
  border: solid 1px #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
