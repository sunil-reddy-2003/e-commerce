import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute=({children})=>{
    const {isLoggedIn} =useAuth();
    if(!isLoggedIn){
        <Navigate to="/adminlogin" replace></Navigate>
    }
    return <>{children}</>
}

export default AdminProtectedRoute;