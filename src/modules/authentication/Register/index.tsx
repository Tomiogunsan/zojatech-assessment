import AuthLayout from "@components/Layout/AuthLayout";
import { AuthPaths } from "@constants/path";
import { useState } from "react";

import { Link } from "react-router-dom";

import RegisterOptions from "./components/RegisterOptions";
import RegisterWithEmail from "./components/RegisterWithEmail";

const Register = () => {
  const [registerWithEmail, setRegisterWithEmail] = useState(false);

  return (
    <AuthLayout bottomText>
      <div className="p-[50px] w-full grid gap-y-2 h-max">
        <h3 className="text-[24px] leading-6 font-semibold">
          Register your account
        </h3>

        {registerWithEmail ? (
          <RegisterWithEmail />
        ) : (
          <RegisterOptions onClick={() => setRegisterWithEmail(true)} />
        )}
        <p className="text-[#84919A] text-[13px] leading-5 mt-[10px]">
          By clicking the button above, you agree to our{" "}
          <span className="text-[#ff8600]">Terms of Service</span> and{" "}
          <span className="text-[#ff8600]">Privacy Policy.</span>
        </p>
        <p className="text-[14px] leading-6 text-[#5B6871] pt-[32px]">
          Already have an account?{" "}
          <span className="text-[#ff8600] cursor-pointer">
            <Link to={`/${AuthPaths.LOGIN}`}>Login</Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
