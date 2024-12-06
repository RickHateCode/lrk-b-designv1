import bgAbout from '../assets/Bgabout.jpg'
import "../index.css";
import About from "../components/About"
import { a_propos } from '../constants';
import Value from '../components/value';
import Contact from '../components/contact'
import { Socials, SocialsTwo, SocialsThree } from '../components/socials';
import EntrySection from '../components/entry-page';
import stripe from "../assets/stripe.svg"
import Footer from "../components/footer"


const AboutPage = ()=> {
    return(
       <div className='w-full'>
            <EntrySection bgImg={"bg-bgAbout"} text={"Qui Sommes-Nous?"}/>
            <About more={a_propos.more}/>
            <Value/>
            <img src={stripe} alt="" />
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
export default AboutPage;