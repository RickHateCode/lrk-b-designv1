import React from "react";

const Item = ({ Links, logo }) => {
  return (
   <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20  gap-y-10 xl:gap-x-48">
    <img src={logo} alt="" className=" w-44 sm:w-64 rounded-2xl"/>
    <ul className="flex max-[473px]:flex-col max-[473px]:gap-x-10 max-[473px]:gap-y-4 gap-x-6 items-center justify-center sm:gap-x-9 md:gap-x-12">
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-white hover:text-red-400 duration-300
          text-base cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
   </div>
  );
};

export default Item;