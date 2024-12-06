import EntrySection from "../components/entry-page";
import CompleteContact from "../components/complete-contact";
import SwiperService from "../components/swiper";
import { services } from "../constants";
import stripe from "../assets/stripe.svg"
import Footer from "../components/footer"

const ServicePage = ()=> {
    return(
       <div>
          <EntrySection text={"Nos services"} bgImg={"bg-bgService"}/>
            <div className='mt-20 flex flex-col gap-y-5 px-4 xl:flex-row xl:gap-x-2'>
               {services.map((service, index) => (
                 <SwiperService
                 key={`experience-${index}`}
                 service={service}
                 />
               ))}
           </div>
           <EntrySection text={"Chaque grande structure commence par une base solide et une vision."} style={"text-center"} bgImg={"bg-bgProverb my-32"}>
                <p className="absolute inset-0 flex justify-center items-center font-bold  text-xl md:text-3xl  text-red-500 mt-44 lg:mt-80"><span className="text-white">"</span>Batir le futur avec passion <span className="text-white">"</span></p>
            </EntrySection>
            <img src={stripe} alt="" />
          <CompleteContact/> 
          <Footer/>
       </div>
    )
}

export default ServicePage;