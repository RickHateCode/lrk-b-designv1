import EntrySection from "../components/entry-page";
import CompleteContact from "../components/complete-contact";
// import "../index.css";
import stripe from "../assets/stripe.svg"
import Footer from "../components/footer"



const ContactPage = ()=> {
    return(
       <div>
         <div className="">
             <EntrySection bgImg={"bg-bgAfrican "} text={"Contact"}/>
             <img src={stripe} alt="" className="mt-24"/>
             <CompleteContact/> 
             <Footer/>
        </div>
       </div>
    )
}

export default ContactPage;
