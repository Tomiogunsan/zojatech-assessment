import EmailVerificationAndConfirmation from '@components/EmailVerificationAndConfirmation'
import AuthLayout from '@components/Layout/AuthLayout'


const EmailVerified = () => {
  return (
    <AuthLayout>
      <EmailVerificationAndConfirmation
        title="Email verified !"
        description="The verified email address will be associated with your account. Click on the button below to continue"
        buttonText="Continue"
        image='/envelope-circle-check.png'
        onClick={() => {}}
      />
    </AuthLayout>
  );
}

export default EmailVerified