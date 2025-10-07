import React, { useEffect, useState } from 'react';
import HeroSlider from '../HeroSlider';
import sliderData from '../data.json'; // ✅ Importing data directly

const HomePage1 = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(sliderData);
  }, []);

  return (
    <div>
      {slides.length > 0 ? (
        <HeroSlider slides={slides} />
      ) : (
        <p className="text-center mt-10">Loading slider...</p>
      )}
    </div>
  );
};

export default HomePage1;
