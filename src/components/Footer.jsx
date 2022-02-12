import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-10 lg:p-20 bg-neutral-300 gap-3 text-sm divide-y divide-neutral-400/40 md:divide-y-0">
      <a href="" className="w-full pt-2 font-medium"> Collaborate With Us</a>
      <a href="" className="w-full pt-2 font-medium"> Contact Us</a>
      <a href="" className="w-full pt-2 font-medium"> FAQ</a>
      <a href="" className="w-full pt-2 font-medium"> Terms & Conditions</a>

      <h1 className="tracking-wider w-full pt-10 md:pt-0">© WOVEN 2022</h1>
    </div>
  );
};

export default Footer;
