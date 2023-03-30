import React, { useState } from "react";
import styled, { css } from "styled-components";

// 사이즈
const SIZES = {
  sm: css`
    --button-font-size: 1rem;
    --button-padding: 8px 12px;
    --button-radius: 50px;
    --button-width: 150px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 50px;
    --button-width: 200px;
  `,
  lg: css`
    --button-font-size: 28px;
    --button-padding: 15px 18px;
    --button-radius: 50px;
    --button-width: 250px;
  `,
};

// 사용 용도
const USEAGES = {
  pupple: css`
    --button-bg-color: #9b9cb6;
    --button-hover-bg-color: #6a6c92;
    --button-color: #000000;
  `,
  sign_in: css`
    --button-bg-color: #000000;
    --button-hover-bg-color: #414250;
    --button-color: #ffffff;
  `,
};

const Button = ({ size, children, textColor, onClick }) => {
  const sizeStyle = SIZES[size];
  const colorStyle = USEAGES[textColor];

  return (
    <StyledButton
      sizeStyle={sizeStyle}
      colorStyle={colorStyle}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.colorStyle} // change colorStyle to textColor
  margin: 0;
  border: none;
  width: var(--button-width, 200px);
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 50px);
  background: var(--button-bg-color, #000000);
  color: var(--button-color, #ffffff);
  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #808080);
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default Button;
