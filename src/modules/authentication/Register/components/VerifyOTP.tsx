import AuthLayout from "@components/Layout/AuthLayout";
import { AuthPaths } from "@constants/path";
import { useOTP } from "hooks/auth/useOTP";
import { useResendOtp } from "hooks/auth/useResendOtp";
import InputToken from "input-token";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { verifyOtp } = useOTP();
  const { resendOtp } = useResendOtp();
  const email = localStorage.getItem("email") as string;

  const handleOTP = async () => {
    const payload = { otp: value };

    await verifyOtp(payload);

    navigate(`/${AuthPaths.VERIFIED}`);
  };

  const handleResendOTP = async () => {
    const payload = { email: email };
    await resendOtp(payload);
 
  };
  return (
    <AuthLayout>
      <div className="p-[68px] grid gap-y-4 ">
        <h3 className="text-[24px] leading-6 font-semibold">
          Verify your email
        </h3>
        <p className="text-[13px] leading-5 text-[#5B6871]">
          A four digit OTP code has been sent to your email{" "}
          <span className="text-[#ff8600] ">{email}</span>
        </p>
        <InputToken
          name="verificationCode"
          length={4}
          className="w-[50px] h-[50px] rounded-[10px] border-[1px] text-center text-[24px] border-[#ff8600] "
          onChange={(e) => {
            setValue(e);
            console.log(value);
          }}
        />
        <Button type="submit" className="w-1/2 mt-8" onClick={handleOTP}>
          Confirm code
        </Button>
        <p className="text-[14px] leading-6 text-[#5B6871] pt-[32px]">
          Didn’t get the mail?{" "}
          <span
            className="text-[#ff8600] cursor-pointer"
            onClick={handleResendOTP}
          >
            Resend
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default VerifyOTP;
