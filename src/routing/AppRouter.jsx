import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { Dashboard } from "../pages/Dashboard";

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    //   children: [
    //     {
    //       path: "team",
    //       element: <Team />,
    //       loader: teamLoader,
    //     },
    //   ],
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'dashboard',
        element: <Dashboard />
    }
  ]);
