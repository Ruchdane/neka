import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./app/App";
import { LoginForm } from "../feature/auth/login";
import { RegisterForm } from "../feature/register/register";
import ErrorPage from "./error";
import { AuthGurd } from "../feature/auth/guard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthGurd><App/></AuthGurd>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "register/student",
      element: <RegisterForm profile="student" />,
    },{
      path: "register/admin",
      element: <RegisterForm profile="admin" />,
    },{
      path: "register/teacher",
      element: <RegisterForm profile="teacher" />,
    },
  ]);
  