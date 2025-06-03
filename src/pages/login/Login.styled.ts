import styled from "styled-components";

export const LoginWrapper= styled.div` display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 100px;
gap: 30px;

h3 {
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
}

input {
  width: 339px;
  border-radius: 10px;
  border: 1px solid #5d5b5b;
}
`;

export const StyledInput = styled.input`
padding: 12px 16px;
border: 1px solid #989393;
border-radius: 20px;
outline: none;

&::placeholder {
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #989393;
}

&:focus {
  border-color: #3e3f5b;
}
`;

export const SendOtpButton = styled.button`
width: 339px;
border-radius: 10px;
border-width: 1px;
background-color: #3e3f5b;
color: #ffffff;

p {
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
}

&:hover {
  opacity: 0.9;
}
`;