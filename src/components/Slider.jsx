import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const slider = useRef();

  const [opacity, setOpacity] = useState(1)

  function logIt() {
    let offsetTop =  window.pageYOffset - slider.current.offsetTop;

    let opacity = Math.floor((slider.current.offsetHeight - offsetTop)  / slider.current.offsetHeight * 100);

    setOpacity(opacity / 100)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logIt);
    }
    watchScroll();

    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logIt);
    };
  });

  
  return (
    <div key={Math.random()} ref={slider} className={`fixed h-full w-full  transition duration-150 ease-in-out ` } style={{opacity}}>
      <img src="https://wovenmagazine.com/content/uploads/2019/09/01-CodyCobb_Wide.jpg" alt="" className="object-cover h-full w-full" />
      <a href="#" className="absolute bottom-[10rem] left-0 right-0 text-4xl font-bold text-gray-900 w-max m-auto">
        Eons Of Earth
      </a>
      <a href="#" className="absolute bottom-[6rem] left-0 right-0 text-lg font-bold text-white bg-black/20 w-max m-auto border-2 border-white px-4 py-2">
        READ THIS STORY
      </a>
    </div>
  );
};

export default Slider;
