import Contact from "../components/contact"
import { Socials,SocialsThree,SocialsTwo } from "../components/socials";

const CompleteContact = ()=> {
    return(
        <div className="xl:flex xl:justify-center xl:items-center xl:gap-x-6 mx-auto">
         <div className="xl:block hidden"><Socials/></div>
         <div><Contact/></div>
         <div className="xl:block hidden"><SocialsTwo/></div>
         <div className="xl:hidden block"><SocialsThree/></div>
       </div> 
    )
}
export default CompleteContact;