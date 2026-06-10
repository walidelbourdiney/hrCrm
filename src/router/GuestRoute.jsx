import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function GuestRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
}

export default GuestRoute;
