const EntrySection = ({text, bgImg, children, style})=> {
    return(
        <div className="bg-black w-full">
               <div className={`${bgImg}  bg-cover bg-center w-full h-[25vh] md:h-[30vh] lg:h-[45vh] xl:h-[55vh] 2xl:h-[60vh] relative mx-auto`}>
                   <div className="absolute inset-0  bg-black opacity-80 mx-auto" />
                   <h1 className={` ${style} absolute inset-0 flex justify-center items-center font-bold text-white text-3xl lg:text-4xl xl:text-5xl `}>{text}</h1>
                   {children}
                </div>
               {/* 
               <div className="absolute inset-0 flex items-center justify-center "><h1 className='text-white text-3xl font-bold'>qui sommes-nous?</h1></div> */}
         </div>
    )
}
export default EntrySection;