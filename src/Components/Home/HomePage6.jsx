import React from "react";

const images = [
  "https://i.pinimg.com/736x/cb/a4/b9/cba4b929fb0ede8025b77619d62912a3.jpg",
  "https://i.pinimg.com/736x/2d/10/ce/2d10cec8607329b70b89b8f0a100f5ea.jpg",
  "https://i.pinimg.com/1200x/2d/b2/9f/2db29f0a314eaa7e70b21adab86e78d6.jpg",
  "https://i.pinimg.com/736x/fc/88/cd/fc88cd48f7c5ef4d4a36adba4f4a1ce2.jpg",
  "https://i.pinimg.com/1200x/1f/57/34/1f57345f6e4272928de7119b80f0e88d.jpg",
  "https://i.pinimg.com/736x/03/39/78/033978f8967b26bb45f13150456bc165.jpg",
  "https://i.pinimg.com/1200x/67/80/12/67801240550321a734cd56a8bb18e047.jpg",
  "https://i.pinimg.com/1200x/3f/f1/52/3ff152bc0be47294893dfb72757b0bfb.jpg",
  "https://i.pinimg.com/736x/51/98/e1/5198e18c0d5f059d4a1c358609b2e736.jpg",
  "https://i.pinimg.com/736x/5a/9c/70/5a9c70aa3f7bb47c7f5a446a63100bbc.jpg",
  "https://i.imgur.com/11.jpg",
  "https://i.pinimg.com/736x/35/41/b7/3541b732fc786ff78f30e2748aa2d8ed.jpg",
];

const HomePage6 = () => {
  return (
    <div className="bg-[#fdf3f2] py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Saree Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded shadow">
            <img
              src={src}
              alt={`Saree ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage6;
