import { AuthPaths } from "@constants/path"
import { Navigate, Route, Routes } from "react-router-dom"
import Register from "../Register"
import PageNotFound from "../PageNotFound";
import Login from "../Login";
import ConfirmEmail from "../Register/components/ConfirmEmail";
import VerifyOTP from "../Register/components/VerifyOTP";
import EmailVerified from "../Register/components/EmailVerified";


const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to={AuthPaths.REGISTER} replace />} />
        <Route path={AuthPaths.REGISTER} element={<Register />} />
        <Route path={AuthPaths.CONFIRM_EMAIL} element={<ConfirmEmail/>}/>
        <Route path={AuthPaths.VERIFY_OTP} element={<VerifyOTP/>}/>
        <Route path={AuthPaths.VERIFIED} element={<EmailVerified/>}/>
        <Route path={AuthPaths.LOGIN} element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default AuthRouter