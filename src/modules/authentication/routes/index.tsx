import { AuthPaths } from "@constants/path"
import { Navigate, Route, Routes } from "react-router-dom"
import Register from "../Register"
import PageNotFound from "../PageNotFound";


const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to={AuthPaths.REGISTER} replace />} />
        <Route path={AuthPaths.REGISTER} element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default AuthRouter