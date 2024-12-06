import ItemsContainer from "./ui/ItemsContainer";
import SocialIcons from "./ui/SocialIcons";



const Footer = ()=> {
    return (
        <footer className="bg-black text-white mt-32">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff28] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          {/* <span className="text-teal-400">Free</span> until you're ready to
          launch */}
        </h1>
        <div>
          <input
            type="text"
            placeholder="Entrer votre Email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-red-800 hover:bg-teal-500 duration-300 px-5 py-2.5 font-extrabold
           rounded-md text-white md:w-auto w-full"
          >
            Envoyer
          </button>
        </div>
      </div>
      <div className="">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-base pb-8  "
      >
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons/>
      </div>
      </div>
    </footer>
    )
}
export default Footer;