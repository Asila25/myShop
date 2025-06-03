import React, {  useEffect, useState, type FC } from "react";
import type { FormProps } from "antd";
import { Form, Input, Typography } from "antd";
import type { GetProps } from "antd";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSendOtpMutation, useVerifyOtpMutation } from "../../redux/api/auth.api";
import { setAuth } from "../../redux/feature/auth.slice";
import { SendOtpButton, StyledInput, SendOtpWrapper } from "./SendOtp.styled";
const { Title } = Typography;

type OTPProps = GetProps<typeof Input.OTP>;

export const VerifyOTP: FC<{ email: string }> = ({ email }) => {
  const [verifyOtp, { isLoading, isError }] = useVerifyOtpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange: OTPProps["onChange"] = (text) => {
    verifyOtp({ email, otp: text })
      .unwrap()
      .then(() => {
        dispatch(setAuth({ email }));
        navigate("/register");
      });
  };

  const sharedProps: OTPProps = {
    onChange,
  };
  return (
    <SendOtpWrapper>
      <Title level={5} >
        Enter code
      </Title>
      <Input.OTP
        disabled={isLoading}
        formatter={(str) => str.toUpperCase()}
        {...sharedProps}
      />
      {isError && (
        <p >Invalid OTP code</p>
      )}
    </SendOtpWrapper>
  );
};

type FieldType = {
  email?: string;
};
interface EmailSenderProps {
  setEmail: (p: string) => void;
  isLoading: boolean;
}

export const EmailSender: React.FC<EmailSenderProps> = ({
  setEmail,
  isLoading,
}) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setEmail(values.email || "");
  };

  return (
    <SendOtpWrapper>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Title level={5}>Enter email</Title>
        <Form.Item<FieldType>
          label=""
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <StyledInput />
        </Form.Item>
        <Form.Item label={null}>
          <SendOtpButton
            loading={isLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Submit
          </SendOtpButton>
        </Form.Item>
      </Form>
    </SendOtpWrapper>
  );
};

const OTP = () => {
  const [sendEmail, { isSuccess, isLoading }] = useSendOtpMutation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (email) {
      sendEmail({ email });
    }
  }, [email]);

  return (
    <div className="container">
      {isSuccess ? (
        <VerifyOTP email={email} />
      ) : (
        <EmailSender setEmail={setEmail} isLoading={isLoading} />
      )}
    </div>
  );
};

export default React.memo(OTP);
