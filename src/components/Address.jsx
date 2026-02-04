import FloatingInput from "./FloatingInput";
const Address = () => {
  return (
    <div>
      <form className=" flex flex-col bg-white p-4 w-90">
        <FloatingInput id="name" label="Name *" type="text" />
        <FloatingInput id="mobile" label="Mobile *" type="text" />
        <FloatingInput id="pincode" label="Pincode *" type="text" />
        <FloatingInput
          id="area"
          label="Locality / Area / Street *"
          type="text"
        />
        <FloatingInput
          id="flat"
          label="Flat number / Building name *"
          type="text"
        />
        <FloatingInput id="landmark" label="Landmark *" type="text" />
        <FloatingInput id="city" label="District / City *" type="text" />
        <FloatingInput id="state" label="State *" type="text" />

        <div className="m-2">
          <p className="text-md font-bold">Address</p>
          <div className="flex justify-between m-2">
            <div className="flex flex-col">
              <label htmlFor="home">Home</label>
              <input id="home" type="radio"></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="work">Work</label>
              <input id="work" type="radio"></input>
            </div>

            <div className="flex flex-col">
              <label htmlFor="others">Others</label>
              <input id="others" type="radio"></input>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 ">
            <label htmlFor="default">Make as default address</label>
            <input id="default" type="checkbox"></input>
          </div>

          <div className="flex justify-center">
            <button className="font-bold border rounded-full px-8 py-2 mt-2 w-full active:bg-black active:text-white">
              Save address
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Address;
