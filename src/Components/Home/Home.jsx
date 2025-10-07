// src/Components/Home/Home.jsx

import React from 'react';
import HomePage1 from './HomePage1';
import HomePage2 from './HomePage2';
// import TestimonialSlider from '../Customer/Testimonial';
import Testimonial from '../Customer/Testimonial'
import HomePage3 from './HomePage3';
import HomePage4 from './HomePage4';
import HomePage5 from './HomePage5'
import HomePage6 from './HomePage6';
import HomePage7 from './HomePage7';
// import HomePage6 from './HomePage6';
// import HomePage7 from './HomePage7'

const Home = () => {
  return (
    <div>
      <HomePage1 />
      <HomePage2 />
      <HomePage3 />
      <HomePage4 />
      <HomePage5 />
      <Testimonial />
      <HomePage6 />
      <HomePage7 />
    </div>
  );
};

export default Home;
