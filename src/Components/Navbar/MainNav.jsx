import React from 'react';
import logo from '../../Components/assets/FashionSambalpuriLogoW.jpg';

const MainNav = () => {
  return (
    <nav className="w-full py-4 bg-white">
      <div className="flex justify-center items-center">
        <img src={logo} alt="Fashion Sambalpuri Logo" className="h-20 w-20 object-contain" />
      </div>
    </nav>
  );
};

export default MainNav;
