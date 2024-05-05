import React, { useState, useEffect } from 'react';


interface AutoSlideProps{
   images:{
    path: string;
    caption: string;
    
   }[]
}

const AutoSlide: React.FC<AutoSlideProps> = ({images}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming 3 slides in the example
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container   w-full box-border p-6 overflow-hidden relative ">
        {
            images.map((item,index)=>(
        <div key={index} className={`mySlides relative flex items-center flex-col  fade ${slideIndex === index ? 'block' : 'hidden'}`}>
        <img src={item.path} style={{ width: '100%' }} />
        <div className={`text-center   sm:hidden    ${slideIndex === index ? 'w-fit box-border px-2 transition-all duration-300 bg-white rounded-xl relative -top-10' : 'w-0'}`}><strong>{item.caption}</strong></div>

      </div>


            ))
        }
    </div>
  );
};

export default AutoSlide;