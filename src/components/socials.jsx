

import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiBehanceLine, RiPinterestLine, RiTwitterXLine, RiWhatsappLine, RiMailLine} from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex flex-col items-end gap-y-5 text-xl ml-10">
      <div className="flex gap-x-4">
        <p className="text-black mt-3 text-sm md:text-lg">lrk.b.design</p>
        <div className="bg-black rounded-md px-2 py-2 "> <a href={''} className="hover:text-accent transition-all duration-300 text-white"><RiInstagramLine size={40}/></a></div>
      </div>
       <div className="flex gap-x-4">
       <p className="text-black mt-3 text-sm md:text-lg">lrkbdesign</p>
       <div className="bg-black rounded-md px-2 py-2"><a href={''} className="hover:text-accent transition-all duration-300 text-white"><RiFacebookLine size={40}/></a></div>
       </div>
    </div>
  )
}
export  { Socials }


const SocialsTwo = () => {
    return (
      <div className="flex flex-col items-start gap-y-5 text-xl ml-10">
        <div className="flex gap-x-4">
             <div className="bg-black rounded-md px-2 py-2"><a href={''} className="hover:text-accent transition-all duration-300 text-white"><RiWhatsappLine size={40}/></a></div>
             <p className="text-black mt-3 text-sm md:text-lg">+237 677 20 96 28</p>
           </div>
            <div className="flex gap-x-4 items-center justify-center">
             <div className="bg-black rounded-md px-2 py-2 h-14 mt"><a href={''} className="hover:text-accent transition-all duration-300 text-white"><RiMailLine size={40}/></a></div>
              <p className="text-red-600 mt-3 text-sm md:text-lg items-start">direction@Irk.cm <br /><span>Irkbdesign@gmail.com</span></p>
            </div>
      </div>
    )
  }
  export  { SocialsTwo };

  const SocialsThree = () => {
    return (
      <div className="flex items-center justify-center gap-x-16 ml-16 sm:ml-20 ">
         <div className="flex flex-col items-end gap-y-5">
          <div className="flex gap-x-4">
           <p className="text-black mt-3 text-sm md:text-lg">lrk.b.design</p>
           <div className="bg-black rounded-md px-2 py-2 "> <a href={''} className="hover:text-accent transition-all duration-300 text-white"><RiInstagramLine size={40}/></a></div>
          </div>
          <div className="flex gap-x-4 ">
           <p className="text-black mt-3 text-sm md:text-lg">lrkbdesign</p>
          <div className="bg-black rounded-md px-2 py-2"><a href={''} className="hover:text-accent transition-all duration-300 text-white"><RiFacebookLine size={40}/></a></div>
          </div>
          </div>

          <div className="flex flex-col items-start gap-y-5">
           <div className="flex gap-x-4">
             <div className="bg-black rounded-md px-2 py-2"><a href={''} className="hover:text-accent transition-all duration-300 text-white"><RiWhatsappLine size={40}/></a></div>
             <p className="text-black mt-3 text-sm md:text-lg">+237 677 20 96 28</p>
           </div>
            <div className="flex gap-x-4 items-center justify-center">
             <div className="bg-black rounded-md px-2 py-2 h-14 mt"><a href={''} className="hover:text-accent transition-all duration-300 text-white"><RiMailLine size={40}/></a></div>
              <p className="text-red-600 mt-3 text-sm md:text-lg items-start">direction@Irk.cm <br /><span>Irkbdesign@gmail.com</span></p>
            </div>
          </div>
      </div>
    )
  }
  export  { SocialsThree };