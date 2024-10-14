import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "helpers/auth";

import { AuthPagePath} from "@constants/path";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAuthenticatedUser = isAuthenticated();
  if (!isAuthenticatedUser) {
    return (
      <Navigate to={AuthPagePath.signin()} state={{ from: location }} replace />
    );
  }
  return children;
};

export default PrivateRoute;
