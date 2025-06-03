import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Layout = lazy(() => import("./layout/layout"));
const SendOtp = lazy(() => import("./sendOtp/SendOtp"));
const Login = lazy(() => import("./login/Login"));
const Register = lazy(() => import("./register/Regester"));

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/",
          element: <SendOtp />,
        },
      ],
    },
  ]);
};

export default React.memo(MainRouter);
