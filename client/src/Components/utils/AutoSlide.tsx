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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container   overflow-hidden relative m-auto">
        {
            images.map((item,index)=>(
        <div key={index} className={`mySlides fade ${slideIndex === index ? 'block' : 'hidden'}`}>
        <div className="numbertext">1 / 3</div>
        <img src={item.path} style={{ width: '100%' }} />
        <div className="text">{item.caption}</div>
      </div>


            ))
        }
    </div>
  );
};

export default AutoSlide;