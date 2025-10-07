import React from "react";

const HomePage3 = () => {
  const sareeData = [
    {
      title: "Jamuni | Ready to Wear Purple Georgette Saree",
      image:
        "https://i.pinimg.com/736x/cc/d5/ce/ccd5cea5ba65ffd618440dbaf163bf16.jpg",
      discountedPrice: 4099,
      originalPrice: 5999,
      isNew: false,
    },
    {
      title: "Gulabi Adaa | Ready to Wear Hot Pink Tissue Saree",
      image: "https://glamwiz.com/cdn/shop/files/13.png?v=1689573463",
      discountedPrice: 6899,
      originalPrice: 7000,
      isNew: true,
    },
    {
      title: "Rani Rasika | Ready to Wear Pink Tissue Banarasi Saree",
      image: "https://glamwiz.com/cdn/shop/files/12.png?v=1689573463",
      discountedPrice: 5949,
      originalPrice: 7000,
      isNew: true,
    },
    {
      title: "Maharani Emerald | Pre-Stitched Green Saree",
      image: "https://glamwiz.com/cdn/shop/files/15.png?v=1689573463",
      discountedPrice: 7209,
      originalPrice: 10000,
      isNew: true,
    },
  ];

  const SareeCard = ({ saree }) => (
    <div className="bg-white rounded-md shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative  h-[40rem]">
        {/* Updated height from h-80 (20rem) to h-96 (24rem) */}
        <img
          src={saree.image}
          alt={saree.title}
          className="w-full h-full object-top"
        />
        {saree.isNew && (
          <span className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded">
            New in
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-md font-medium text-gray-800">{saree.title}</h2>
        <div className="mt-2">
          <span className="text-pink-600 font-semibold text-lg">
            ₹ {saree.discountedPrice.toLocaleString()}
          </span>
          {saree.originalPrice && (
            <span className="text-gray-500 line-through text-sm ml-2">
              ₹ {saree.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 h-full">
      <h1 className="text-3xl font-bold text-center py-8">Designer Sarees</h1>
      <div className="w-full  px-2 sm:px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sareeData.map((saree, index) => (
            <SareeCard key={index} saree={saree} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
