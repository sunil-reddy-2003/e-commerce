import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { setIsLoggedIn, redirectAfterLogin, setRedirectAfterLogin } =
    useAuth();
  const navigate = useNavigate();
  return (
    <div className="h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex w-[55%] bg-purple-900 items-center justify-center italic font-extrabold text-white text-4xl">
        "From cart to heart – the journey matters"
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[45%] bg-gray-800 flex items-center justify-center">
        <form className="w-full max-w-md px-6 py-10">
          <h4 className="font-bold text-2xl text-white mb-6 text-center">
            Log into Amazon
          </h4>

          {/* Email */}
          <div className="flex flex-col mb-4 text-white">
            <label htmlFor="email" className="mb-1 text-sm font-light ">
              Email
            </label>
            <input
              type="text"
              id="email"
              required
              placeholder="Enter email"
              className="border-2 border-purple-900 p-3 rounded-md bg-gray-900 hover:border-white"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-6 text-white">
            <label htmlFor="password" className="mb-1 text-sm font-light ">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter password"
              className="border-2 border-purple-900 p-3 rounded-md bg-gray-900 hover:border-white"
            />
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full rounded-full p-2 mb-3 text-xl text-white bg-slate-950 hover:bg-slate-500 hover:font-bold transition"
            onClick={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
              if (redirectAfterLogin) {
                navigate(redirectAfterLogin);
                setRedirectAfterLogin(null);
              } else {
                navigate("/");
              }
            }}
          >
            Log in
          </button>

          <button
            type="button"
            className="w-full rounded-full p-2 text-xl text-white bg-purple-800 hover:bg-rose-500 hover:font-bold transition"
          >
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
