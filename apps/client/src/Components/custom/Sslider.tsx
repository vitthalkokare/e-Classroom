import React, { useState, useEffect } from 'react';

const Serviceslide: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const showSlides = (n: number) => {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0 || dots.length === 0) {
      return; // Exit early if slides or dots are empty
    }
  
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
  
    for (i = 1; i <= slides.length; i++) {
      if (slides[i - 1]) {
        slides[i - 1].style.display = i === slideIndex ? "block" : "none";
      }
    }
  
    for (i = 0; i < dots.length; i++) {
      if (dots[i]) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    }
  
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
    }
  };
  

  const startSlideshow = () => {
    const id = window.setInterval(() => {
      showSlides(slideIndex);
    }, 3000);
    setIntervalId(id);
  };

  const stopSlideshow = () => {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    startSlideshow(); // Start slideshow initially

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      stopSlideshow();
    };
  }, [intervalId, slideIndex]);

  return (
    <div className="slideshow-container">
      {/* Add the slide content here */}
      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>
      {/* Add the dots/bullets/indicators here */}
    </div>
  );
};

export default Serviceslide;
