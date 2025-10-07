import React from 'react';

const collections = [
  {
    title: 'HALDI CEREMONY',
    subtitle: 'Haldi Collection',
    products: 14,
    image: 'https://i.pinimg.com/736x/00/de/e9/00dee92ccd4dc910d01c183d032528f9.jpg',
    link: '/collections/haldi',
  },
  {
    title: 'MEHNDI CEREMONY',
    subtitle: 'Mehendi Collection',
    products: 33,
    image: 'https://i.pinimg.com/1200x/63/c9/d2/63c9d2a5a87c55d31ebffe40a8cc11a0.jpg',
    link: '/collections/mehndi',
  },
  {
    title: 'BRIDESMAID',
    subtitle: 'Bridesmaid Collection',
    products: 44,
    image: 'https://i.pinimg.com/1200x/dd/76/4c/dd764cdaa3d2a7dc0b7173216620014a.jpg',
    link: '/collections/bridesmaid',
  },
  {
    title: 'SANGEET CEREMONY',
    subtitle: 'Party Wear Sarees',
    products: 70,
    image: 'https://i.pinimg.com/736x/02/4d/0e/024d0e2063a6013068b3fb14749e163f.jpg',
    link: '/collections/sangeet',
  },
];

const HomePage4 = () => {
  return (
    <div className="bg-[#fce5e0] py-12 px-4">
      <h2 className="text-center text-xl font-medium mb-10">WEDDING COLLECTION</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {collections.map((item, index) => (
          <a key={index} href={item.link} className="block group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center hover:shadow-md transition duration-300 w-full h-[500px]">
              {/* Image Section with Gradient Arch */}
              <div className="relative h-[450px]">
                <div className="bg-gradient-to-b from-[#eb5ca9] to-[#5c004b] h-full rounded-b-[120px] flex items-end justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-top object-bottom transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text Overlay on Image */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg font-serif">
                  <p className="text-sm tracking-widest font-medium">FOR</p>
                  <p className="text-2xl font-bold">{item.title}</p>
                </div>
              </div>

              {/* Subtitle & Product Count */}
              <div className="py-6">
                <p className="text-base font-semibold text-gray-800">{item.subtitle}</p>
                <p className="text-sm text-gray-500">{item.products} products</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePage4;
