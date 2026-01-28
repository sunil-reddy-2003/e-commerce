import {Link} from "react-router-dom";
const PageNotExist = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-700">
      <i className="text-[150px] fa-regular fa-face-frown fa-fade text-white"></i>
      <p className="text-[50px] font-bold text-white">404-Page Not Found</p>
      <p className="text-xl font-bold">
        “Oops! Looks like this page ran away or never existed. 🕵️‍♂️ Double-check
        the URL, or you
        <Link 
        to="/"
        className="font-bold underline text-white hover:text-red-300"
        > can click here to go back home</Link> and start fresh!”
      </p>
    </div>
  );
};
export default PageNotExist;
