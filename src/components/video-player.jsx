import React from 'react';
import videoFile from '../assets/lrk_video.mp4'; // Importer une vidéo locale
import vector from "../assets/vector.jpg"

const VideoPlayer = () => {
  return (
    <div className=' md:relative'>
      <img src={vector} alt="" className='md:block hidden'/>
      <div className='md:absolute md:inset-0 md:flex justify-center items-center md:mb-16'>
        <video  controls className='w-full md:w-[40rem] md:rounded-2xl lg:w-[49rem] xl:w-[60rem] 2xl:w-[70rem]'>
         <source src={videoFile} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;