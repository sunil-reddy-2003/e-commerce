import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute=({children})=>{
    const {isAdmin} =useAuth();
    if(!isAdmin){
        return <Navigate to="/adminlogin" replace />
    }
    return <>{children}</>
};

export default AdminProtectedRoute;