import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-1 right-2 bg-black/60 backdrop-blur-md shadow-xl w-20 h-20 text-xl  transition rounded-full cursor-pointer"
    >
      <i className="text-white fa-solid fa-arrow-up-long fa-bounce"></i>
    </button>
  );
};

export default BackToTop;
