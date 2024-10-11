import EmailVerificationAndConfirmation from "@components/EmailVerificationAndConfirmation";
import AuthLayout from "@components/Layout/AuthLayout";
import { AuthPaths } from "@constants/path";
import { useNavigate } from "react-router-dom";

const ConfirmEmail = () => {
    const navigate = useNavigate()
  return (
    <AuthLayout>
      <EmailVerificationAndConfirmation
        buttonText="Confirm Email"
        description="We’ve sent an email to seyi@zojatech.com with a an OTP to confirm your
          account. Check your inbox to activate your account."
        image="/sent-email.png"
        onClick={() => navigate(`/${AuthPaths.VERIFY_OTP}`)}
        bottomText={
          <p>
            Didn’t get the mail?{" "}
            <span className="text-[#ff8600] cursor-pointer">Resend</span>
          </p>
        }
        title="Check your mailbox !"
      />
    </AuthLayout>
  );
};

export default ConfirmEmail;
