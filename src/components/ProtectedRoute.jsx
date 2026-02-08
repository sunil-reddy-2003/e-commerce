import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  // ✅ destructure children here
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to="/log-in" replace />;

  return <>{children}</>; // ✅ now children is defined
};

export default ProtectedRoute;
