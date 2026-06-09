import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

//App Layout
import AppLayout from "../components/layouts/AppLayout";

//Protected Route
import ProtectedRoute from "./ProtectedRoute";
//Guest Route
import GuestRoute from "./GuestRoute";

//Pages
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Departments from "../pages/Departments";
import Attendance from "../pages/Attendance";
import Payroll from "../pages/Payroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
  },

  {
    path: "/register",
    element: (
      <GuestRoute>
        <Register />
      </GuestRoute>
    ),
  },

  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/employees",
        element: <Employees />,
      },

      {
        path: "/departments",
        element: <Departments />,
      },

      {
        path: "/attendance",
        element: <Attendance />,
      },

      {
        path: "/payroll",
        element: <Payroll />,
      },
    ],
  },
]);

export default router;
