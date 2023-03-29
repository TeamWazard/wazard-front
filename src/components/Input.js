import React from "react";
import styled from "styled-components";
// input 컴포넌트 사이즈 조정 기능 추가해야함

const Input = ({ label, value, name, onChange, type, placeholder }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const InputLabel = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #f5f5f5;
  &:focus {
    outline: none;
    border-color: #9e30f4;
    box-shadow: 0 0 1px #9e30f4;
  }
`;

export default Input;
