import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  // If logged in, render the child route(s)
  // Otherwise, redirect to /log-in
  return isLoggedIn ? <Outlet /> : <Navigate to="/log-in" replace />;
};

export default ProtectedRoute;
