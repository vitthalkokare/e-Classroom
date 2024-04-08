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
    <div className="slideshow-container -top-10 sm:hidden  w-full box-border p-4 overflow-hidden relative ">
        {
            images.map((item,index)=>(
        <div key={index} className={`mySlides fade ${slideIndex === index ? 'block' : 'hidden'}`}>
        <img src={item.path} style={{ width: '100%' }} />
        <div className={`text-center   sm:hidden    ${slideIndex === index ? 'w-full transition-all duration-300 bg-purple-500' : 'w-0'}`}><strong>{item.caption}</strong></div>

      </div>


            ))
        }
    </div>
  );
};

export default AutoSlide;