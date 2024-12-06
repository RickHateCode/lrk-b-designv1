import logoRemove from "../assets/logoRemove.png"
import vector from "../assets/vector.jpg"
import space from "../assets/space.jpg"
import divider from "../assets/divider.svg"
import under from "../assets/under.svg"
import Service from "../components/service"
import { styles } from "../lib/utils";
import { motion } from "framer-motion";
import Footer from "../components/footer"

import {vision} from "../constants/index"
import {Socials,SocialsTwo, SocialsThree} from "../components/socials";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image_1 from "../assets/V3.jpg";
import image_2 from "../assets/V6.jpg";
import image_3 from "../assets/V9.jpg";
import image_4 from "../assets/V11.jpg";
import image_5 from "../assets/V23.jpg";

import About from "../components/About"
import lrk_mission from "../assets/lrk_mission.jpg"
import VideoPlayer from "../components/video-player";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";

const HomePage = ()=> {

  const slides = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5
  ]

   const title = {
      subtitleAbout: "tous ce qu'il ya a savoir",
      headTitleAbout: "Qui Sommes Nous?"
   }

    return(
        <div>
          <div className="w-full  relative md:relative  mx-auto" >
         
            <div ><img src={space} height = {500} alt="" className=""/></div>
             <div className="absolute inset-0 flex items-center justify-center ">
               <img src={logoRemove}  alt="" className=" w-full max-w-60 sm:max-w-72 md:max-w-96 lg:max-w-[38rem] xl:max-w-[48rem]"/>
             </div>
          {/*  */}
         </div>

       {/* vido player */}
       <div className="md:flex md:items-center md:justify-center mx-auto ">
         <VideoPlayer/>
       </div>

       {/* vision */}
       <div className="mx-auto">
          {/* <img src={arch} alt="" /> */}
          <div className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-y-12 xl:gap-x-4 2xl:gap-x-24">
             <img src={under} alt="" className="max-w-[26rem] lg:max-w-[35rem] xl:max-w-[50rem]"/>
             <div className="flex flex-col lg:flex-col items-center justify-center gap-y-10">
             <p  className="text-base leading-7 text-gray-700 md:text-center md:px-20 px-10  xl:mx-auto xl:px-5 lg:text-start">{vision.text}</p>
             <button className="bg-red-900"> <p className="font-bold"> Voir nos réalisations </p></button>
             </div>
          </div>
       </div>
       <img src={divider} alt=""  className="mt-24 xl:mt-36 2xl:mt-52 mx-auto"/>
       {/* <img src={arch} alt=""  className="mt-24"/> */}

       {/* Services */}
       <div className="mx-auto">
           <Service/> 
       </div>
       
       {/* mission */}
       <div className="relative mx-auto">
         <img src={lrk_mission}  alt="" className="w-full "/>
         <div className="absolute inset-0  bg-black opacity-70 mx-auto" />
         <div className="absolute inset-0 flex flex-col gap-y-6 px-5 py-20 lg:flex-row items-center justify-center xl:gap-x-56 lg:px-10  lg:gap-x-14 mx-auto">
               <div className="">
               <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-red-500 md:block hidden">Le but c'est de concrétiser vos projets </p>
               <h1 className="text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ">Nos Missions</h1>
               </div>
               <ul className="list-none sm:mt-12 ">
                 <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faArrowRight} className="text-red-500 mr-2" />
                  <p className="lg:text-justify text-justify font-bold">Vous accompagner dans la conception de vos projets de construction et rénovation</p>
                 </li>
                 <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faArrowRight} className="text-red-500 mr-2" />
                  <p className="text-justify font-bold">Vous accompagner dans la mise en œuvre et les suivi de vos projets</p>
                 </li>
                 <li className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faArrowRight} className="text-red-500 mr-2 " />
                  <p className="font-bold"> Vous assurer un meilleur rendu</p>
                 </li>
                 <li className="flex items-center mb-2">
                   <FontAwesomeIcon icon={faArrowRight} className="text-red-500 mr-2 font-bold" />
                   <p className="font-bold">Garantir votre satisfaction</p>
                 </li>
               </ul>
         </div>
       </div>
       <About subtitle={title.subtitleAbout} headTitle={title.headTitleAbout}>
            <div className="w-full flex items-center justify-center">
               <button className="bg-red-900 cursor-pointer items-center w-60"> <p className="font-bold text-white">En savoir plus...</p></button>
            </div> 
       </About>
       {/* portfolio */}
       <div className="py-10 mx-auto">
           <div className="">
              <p className={`${styles.sectionSubText} text-center`}>jettez un œil a nos realisations</p>
              <h1 className={`${styles.sectionHeadText} text-center`}>Nos Realisations</h1>
           </div>
           <div className="sm:mx-8 xl:mt-28 mt-20 xl:mx-32">
              <Portfolio>
               {slides.map((i) => (
                 <img key={i} src={i} alt="" className="rounded-lg "/>
               ))}
              </Portfolio>
           </div>
       </div>   
       <img src={divider} alt=""  className="mt-12 xl:mt-20 2xl:mt-52"/>      
       <div className="xl:flex xl:justify-center xl:items-center xl:gap-x-6 mx-auto">
         <div className="xl:block hidden"><Socials/></div>
         <div><Contact/></div>
         <div className="xl:block hidden"><SocialsTwo/></div>
         <div className="xl:hidden block"><SocialsThree/></div>
       </div>  
       <Footer/>
        </div>
    )
}

export default HomePage;