import React from "react";

import { RiInstagramLine, RiFacebookLine,  RiWhatsappLine, RiMailLine} from "react-icons/ri"


const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center">
           <div className="flex gap-x-4">
             <div className="bg-black rounded-md px-2 py-2"><a href={''} className="hover:text-accent transition-all duration-300 text-white text-3xl hover:text-red-500"><RiWhatsappLine /></a></div>
           </div>
            <div className="flex gap-x-4 items-center justify-center">
             <div className="bg-black rounded-md px-2 py-2 h-14 mt"><a href={''} className="hover:text-accent transition-all duration-300 text-white text-3xl hover:text-red-500"><RiFacebookLine /></a></div>
            </div>
            <div className="flex gap-x-4 items-center justify-center">
             <div className="bg-black rounded-md px-2 py-2 h-14 mt"><a href={''} className="hover:text-accent transition-all duration-300 text-white text-3xl hover:text-red-500"><RiMailLine /></a></div>
            </div>
            <div className="flex gap-x-4 items-center justify-center">
             <div className="bg-black rounded-md px-2 py-2 h-14 mt"><a href={''} className="hover:text-accent transition-all duration-300 text-white text-3xl hover:text-red-500"><RiInstagramLine /></a></div>
            </div>
      </div>
  );
};

export default SocialIcons;