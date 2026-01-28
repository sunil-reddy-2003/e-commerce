import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="bg-purple-400 w-full text-xl p-2 hover:bg-purple-500 transition"
      >
        Back to top
      </button>

      <div className="flex flex-col bg-slate-800 md:flex-row items-center text-white w-full p-10 gap-4">
        <p className="flex justify-center w-full md:w-[55%] text-center">
          © {new Date().getFullYear()} All rights reserved | Amazon
        </p>

        <div className="flex justify-center w-full md:w-[45%] gap-6 ">
          <Link to="#" className="hover:underline">About</Link>
          <Link to="#" className="hover:underline">Help</Link>
          <Link to="#" className="hover:underline">Terms</Link>
          <Link to="#" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
