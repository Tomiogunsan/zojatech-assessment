import Admin from "@modules/index";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminPath } from "@constants/path";

const MyPortfolio = lazy(() => import("modules/admin/myPortfolio"));
const MyGroup = lazy(() => import("modules/admin/myGroup"));
const Messages = lazy(() => import("modules/admin/messages"));
const Analytics = lazy(() => import("modules/admin/analytics"));
const Pack = lazy(() => import("modules/admin/pack"));
const Settings = lazy(() => import("modules/admin/settings"));

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Admin />}>
        <Route
          path="/"
          element={<Navigate to={AdminPath.MYPORTFOLIO} replace />}
        />
        <Route path={AdminPath.MYPORTFOLIO} element={<MyPortfolio />} />
        <Route path={AdminPath.MYGROUP} element={<MyGroup />} />
        <Route path={AdminPath.MESSAGES} element={<Messages />} />
        <Route path={AdminPath.ANALYTICS} element={<Analytics />} />
        <Route path={AdminPath.PACK} element={<Pack />} />
        <Route path={AdminPath.SETTINGS} element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
