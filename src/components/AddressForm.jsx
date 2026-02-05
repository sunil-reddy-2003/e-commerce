const AddressForm = ({ id, label ,type,value,onChange}) => (
    
  <div className="relative m-2 ">
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer pt-5  w-full border-b-2 border-gray-500 outline-none focus:border-black"
      required
    />
    <label
      htmlFor={id}
      className="
        absolute top-0 left-0 text-gray-400
        pointer-events-none transition-all duration-300

        peer-placeholder-shown:translate-y-3
        peer-placeholder-shown:text-md
        
        peer-focus:translate-y-0
        peer-focus:text-sm
        peer-focus:text-black

        peer-not-placeholder-shown:translate-y-0
        peer-not-placeholder-shown:text-xs

        placeholder-bg-purple-800
      "
    >
      {label}
    </label>
  </div>
);
export default AddressForm;