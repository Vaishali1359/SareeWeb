import React from 'react';
import logo from '../../Components/assets/FashionSambalpuriLogoW.jpg';

const MainNav = () => {
  return (
    <nav className="w-full bg-white">
      <div className="w-full h-32 overflow-hidden">
        <img
          src={logo}
          alt="Fashion Sambalpuri Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </nav>
  );
};

export default MainNav;
