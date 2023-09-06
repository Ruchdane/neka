import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "./pages/error";
import { AuthGurd } from "./feature/auth/components/guard";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { Profil } from "./feature/profile";
import HomePage from "./pages/home";
import { AuthContextProvider } from "./feature/auth/context";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthContextProvider><AuthGurd><HomePage/></AuthGurd></AuthContextProvider>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/login",
      element:  <AuthContextProvider><LoginPage/>,  </AuthContextProvider>
    },
    {
      path: "register/student",
      element:  <AuthContextProvider><RegisterPage profile={Profil.Student}/>  </AuthContextProvider>
    },{
      path: "register/admin",
      element:  <AuthContextProvider><RegisterPage profile={Profil.Admin}/>  </AuthContextProvider>
    },{
      path: "register/teacher",
      element:  <AuthContextProvider><RegisterPage profile={Profil.Teacher}/>  </AuthContextProvider>
    },
  ]);
  