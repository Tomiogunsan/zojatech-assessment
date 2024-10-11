import { lazy } from "react";
import { BasePaths } from "./path";
import RootLayout from "@components/Layout/RootLayout";
import AuthLayout from "@components/Layout/AuthLayout";


const BaseRoutes = [
  {
    path: "/*",
    exact: true,
    component: lazy(() => import("modules/authentication/routes/index")),
    Layout: AuthLayout,
    useAuth: false,
  },
  {
    path: `${BasePaths.ADMIN}/*`,
    exact: true,
    component: lazy(() => import("../routes/index")),
    Layout: RootLayout,
    useAuth: true,
  },
];


export default BaseRoutes;