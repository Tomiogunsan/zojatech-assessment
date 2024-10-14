import EmailVerificationAndConfirmation from '@components/EmailVerificationAndConfirmation'
import AuthLayout from '@components/Layout/AuthLayout'
import { AuthPaths } from '@constants/path';
import { toastAlert } from '@utils/toastConfig';
import { useNavigate } from 'react-router-dom';


const EmailVerified = () => {
    const navigate = useNavigate()
  return (
    <AuthLayout>
      <EmailVerificationAndConfirmation
        title="Email verified !"
        description="The verified email address will be associated with your account. Click on the button below to continue"
        buttonText="Continue"
        image='/envelope-circle-check.png'
        onClick={() => {
          toastAlert.success("Registration successful");
          navigate(`/${AuthPaths.LOGIN}`)
        }}
      />
    </AuthLayout>
  );
}

export default EmailVerified