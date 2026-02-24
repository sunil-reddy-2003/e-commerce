import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const AdminContent = () => {
    const { isAdmin } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center relative bg-linear-to-r from-gray-800  to-gray-400 min-h-screen text-white">
            {isAdmin && (<div className="border p-10 rounded-full hover:scale-90 hover:bg-gray-800 duration-1000 transition-all">
                <h1 className="text-3xl font-bold mb-4">Hello Admin!!</h1>
                <p className="text-white text-sm tracking-widest w-250">
                    Your control center is ready. Manage products, monitor activity, and keep
                    the store performing at its best. Let’s make today productive and impactful.
                </p>
            </div>)}


            {!isAdmin && (<div className="border p-10 rounded-full hover:scale-90 hover:bg-gray-800 duration-1000 transition-all">
                <h1 className="text-3xl font-bold mb-4">Hello Admin!!</h1>
                <p className="text-white text-sm tracking-widest w-200">
                    This area is restricted to authorized administrators.
                    Please log in to access the dashboard and manage the platform.
                </p>
            </div>)}
        </div>
    )
}
export default AdminContent;