import React from "react";
import { LoginWrapper, SendOtpButton, StyledInput } from "./Login.styled";

const Login = () => {
  return (
    <LoginWrapper>
      <h3>Login</h3>
      <StyledInput placeholder="Phone" type="text" />
      <StyledInput placeholder="Password" type="password" />
      <SendOtpButton>
        <p>register</p>
      </SendOtpButton>
    </LoginWrapper>
  );
};

export default React.memo(Login);
