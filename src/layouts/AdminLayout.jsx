import { Outlet } from "react-router-dom"
import AdminNav from "../components/AdminNav";
import { useState } from "react";

const AdminLayout=()=>{
      const [searchText, setSearchText] = useState("");
    
    return(
        <div>
            <AdminNav onSearch={setSearchText}/>
            <main>
                <Outlet context={{searchText}}/>
            </main>
        </div>
    )
}

export default AdminLayout;