import React from 'react';

const HomePage7 = () => {
  const images = [
    'https://i.pinimg.com/736x/33/a4/bd/33a4bd84047840e7088bf1127893ee18.jpg',
    'https://i.pinimg.com/1200x/0e/d9/ae/0ed9aebedc9aecd522ddf89548d904df.jpg',
    'https://i.pinimg.com/736x/dc/8d/36/dc8d364a7ed9f24a5771eba6c9af5173.jpg',
    'https://i.pinimg.com/1200x/59/7d/e9/597de956fa8e690936ea3b46c8f641f4.jpg',
    'https://i.pinimg.com/736x/13/eb/5a/13eb5ab14b79beae7c305acbc1f61859.jpg',
    'https://i.pinimg.com/736x/4a/67/da/4a67dadce8cff99577acd4d5580c78c8.jpg',
    'https://i.pinimg.com/1200x/dd/ca/6e/ddca6e640c2e68a101639dfb0bf48227.jpg',
    'https://i.pinimg.com/736x/2d/94/ca/2d94ca37a0337102e936eab6b8e383af.jpg',
  ];

  return (
    <div className="bg-white text-center px-4 py-10">
      
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-fuchsia-600 mb-3">
        Glamwiz Family: Our True Brand Ambassadors
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        From grand events to everyday elegance, our customers bring their own unique flair to every Glamwiz saree. <br />
        They are not just customers but our true ambassadors.
      </p>

      {/* Image Grid with Center Message */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">

        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <img src={images[0]} alt="Customer 1" className="rounded w-full h-auto object-cover" />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <img src={images[1]} alt="Customer 2" className="rounded w-full h-auto object-cover" />
          <img src={images[2]} alt="Customer 3" className="rounded w-full h-auto object-cover" />
        </div>

        {/* Center Text & Images */}
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-fuchsia-700 leading-tight">
              STYLED <br /> & LOVED <br /> BY MANY!
            </h2>
            <p className="text-fuchsia-500 mt-2 font-medium">Real Reviews, Real Style</p>
          </div>
          <img src={images[3]} alt="Customer 4" className="rounded w-full object-cover" />
          <img src={images[4]} alt="Customer 5" className="rounded w-full object-cover" />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4">
          <img src={images[5]} alt="Customer 6" className="rounded w-full h-auto object-cover" />
          <img src={images[6]} alt="Customer 7" className="rounded w-full h-auto object-cover" />
          <img src={images[7]} alt="Customer 8" className="rounded w-full h-auto object-cover" />
        </div>

      </div>

      {/* Bottom Text */}
      <p className="text-sm text-gray-600 mt-10 max-w-xl mx-auto">
        Celebrating over 10,000+ customers and a commitment to making life convenient for working women.
      </p>
    </div>
  );
};

export default HomePage7;
