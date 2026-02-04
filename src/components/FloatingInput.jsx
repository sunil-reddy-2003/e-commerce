const FloatingInput = ({ id, label ,type}) => (
    
  <div className="relative m-2 ">
    <input
      id={id}
      type={type}
      placeholder=" "
      className="peer pt-5  w-full border-b-2 border-gray-600 outline-none focus:border-black"
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
      "
    >
      {label}
    </label>
  </div>
);
export default FloatingInput;