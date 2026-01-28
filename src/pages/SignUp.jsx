const SignUp = () => {
  return (
    <div className="md:flex h-screen">
      <div className="hidden md:flex justify-center items-center md:w-[55%]  bg-fuchsia-700 ">
        <p className="font-extrabold text-white text-4xl">Sign up. Show up. Level up</p>
      </div>
      <div className="w-full md:w-[45%]  bg-slate-800 ">
        <form className="flex flex-col justify-center items-stretch text-white h-full p-12 md:px-32 ">
            <h1 className="font-bold text-2xl mb-3">
                Create your account
                <span>
                    <i className="pl-2 fa-solid fa-face-grin-hearts"></i>
                </span>
            </h1>
          <div className="flex flex-col mb-4  rounded-md ">
            <label 
                htmlFor="fname"
                className='mb-2 font-light'
                >First Name</label>
            <input 
                type="text"
                id="fname" 
                placeholder="First name"
                required
                className="border-2 p-3 font-medium rounded-md border-zinc-600 hover:border-white " ></input>
          </div>
          <div className="flex flex-col mb-4 ">
            <label 
                
                htmlFor="lname"
                className='mb-2 font-light'
                >Last Name</label>
            <input 
                id="lname" 
                type="text"
                placeholder="Last name"
                required
                className="border-2 p-3 rounded-md border-zinc-600 hover:border-white"></input>
          </div>
          <div className="flex flex-col mb-4 ">
            <label 
                htmlFor="email"
                className='mb-2 font-light '
                >Email</label>
            <input 
                id="email" 
                type="email"
                required
                placeholder="Enter email"
                className="border-2 p-3 rounded-md border-zinc-600 hover:border-white"></input>
          </div>
          <div className="flex flex-col mb-4 ">
            <label 
                htmlFor="password"
                className='mb-2 font-light '
                >Password</label>
            <input 
                id="password" 
                type="password"
                required
                placeholder="Enter password"
                className="border-2 p-3 rounded-md border-zinc-600 hover:border-white"></input>
          </div>
          <div className="flex flex-col mb-4 ">
            <label 
                htmlFor="number"
                className='mb-2 font-light'
                >Mobile number</label>
            <input 
                id="number" 
                required
                placeholder="Enter mobile number"
                className="border-2 p-3 rounded-md border-zinc-600 hover:border-white"></input>
          </div>
          <button 
            type="submit"
            className=" rounded-full p-4 bg-white text-black hover:bg-black hover:text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
