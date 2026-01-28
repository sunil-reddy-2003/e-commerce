import LogIn from "./pages/LogIn";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import PageNotExist from "./pages/PageNotExist";
import Layout from "./layouts/Layout";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {


  return (
    <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainContent />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/log-in" element={<LogIn  />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route element={<ProtectedRoute/>}>
                <Route path="/shipping" element={<Shipping />} />
            </Route>
          </Route>

          <Route path="*" element={<PageNotExist />} />
        </Routes>
    </>
  );
};

export default App;