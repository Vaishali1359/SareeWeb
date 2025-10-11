import React, { useState } from "react";

const allCards = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/c2/e2/31/c2e23109b3d026c0442187c7556eae29.jpg",
    tags: ["Festival", "Silk"],
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/ba/26/82/ba26829f440e5f4bf3a69907241178f1.jpg",
    tags: ["Fabric", "Georgette"],
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/4a/d3/81/4ad381d2d9599f74d1fba6afc5ad5049.jpg",
    tags: ["Festival", "Modern"],
  },
  {
    id: 4,
    image: "https://tse2.mm.bing.net/th/id/OIP._AjFnnZ26dGWeTk7ZdiqCwAAAA?cb=12&w=295&h=427&rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["Occasion", "Fabric"],
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/33/8a/c8/338ac8836f6a2c666315d0e74c3dcbfc.jpg",
    tags: ["Color", "Georgette"],
  },
  {
    id: 6,
    image: "https://wallpapers.com/images/hd/saree-pictures-2skuxurf8e4e7cl4.jpg",
    tags: ["Festival", "Occasion"],
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/6294504/pexels-photo-6294504.jpeg?cs=srgb&dl=pexels-zara-hamdane-6294504.jpg&fm=jpg",
    tags: ["Color", "Silk"],
  },
  {
    id: 8,
    image: "https://www.monastoor.com/wp-content/uploads/2023/01/GREEN-HEAVY-SILK-SAREE-1.jpeg",
    tags: ["Fabric"],
  },
  {
    id: 9,
    image: "https://assets2.andaazfashion.com/media/catalog/product/d/a/dark-purple-cotton-silk-woven-zari-traditional-indian-saree-sarv117937-1.jpg",
    tags: ["Silk", "Color"],
  },
  {
    id: 10,
    image: "https://wallpapers.com/images/hd/saree-pictures-3ojaadio0w66bft9.jpg",
    tags: ["Occasion"],
  },
  {
    id: 11,
    image: "https://i.pinimg.com/originals/61/48/4f/61484fd1299dc0d4cf24c24eb3f30ea2.jpg",
    tags: ["Festival", "Modern"],
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/28954028/pexels-photo-28954028.jpeg?cs=srgb&dl=pexels-krishna-sridhar-photographer-1233436552-28954028.jpg&fm=jpg",
    tags: ["Fabric", "Georgette"],
  },
  {
    id: 13,
    image: "https://wallpapers.com/images/hd/saree-pictures-pzo3hr5dardhb6e4.jpg",
    tags: ["Festival"],
  },
  {
    id: 14,
    image: "https://wallpaperaccess.com/full/11220424.jpg",
    tags: ["Color", "Occasion"],
  },
  {
    id: 15,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihIoYVl611AlmqOaNTh2uafIXwua8Gyn-HuB-Zp7f5kGWQ-6m07cQLqQ048mhbV4ik0P6Ib4EMgKNjJ115w1toKn9sS6gatLEQ18qBtrLp8vt82Rb01UKoiEJUlrUSdwIuI2MmXGpu6TE/s1600/IMG_20200512_132524.jpg",
    tags: ["Georgette", "Modern"],
  },
  {
    id: 16,
    image: "https://www.kollybollyethnics.com/image/catalog/data/07Oct2022/Silk-Saree-with-blouse-in-Purple-colour-5418.jpg",
    tags: ["Silk", "Fabric"],
  },
  {
    id: 17,
    image: "https://i.pinimg.com/originals/c0/82/01/c082012d4fcca762f95ebc019a452009.jpg",
    tags: ["Color"],
  },
  {
    id: 18,
    image: "https://cdn.pixabay.com/photo/2015/04/08/15/18/saree-712910_1280.jpg",
    tags: ["Festival", "Occasion"],
  },
  {
    id: 19,
    image: "https://1.bp.blogspot.com/-uklza3-dftA/Xrphm2dzgnI/AAAAAAAAC-o/ZLhJmEKY9LEAC1z3QaukdFv6qV7HvEO5gCLcBGAsYHQ/s640/IMG_20200512_133106.jpg",
    tags: ["Modern"],
  },
  {
    id: 20,
    image: "https://images.pexels.com/photos/28054615/pexels-photo-28054615/free-photo-of-yellow-and-pink-silk-saree-with-gold-border.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Fabric", "Color"],
  },
  {
    id: 21,
    image: "https://cdn.pixabay.com/photo/2022/10/12/07/34/saree-7515896_1280.jpg",
    tags: ["Georgette", "Festival"],
  },
  {
    id: 22,
    image: "https://1.bp.blogspot.com/-PAE5scADBEc/XrphmDRYCcI/AAAAAAAAC-g/OD7hGU_8vVQl8je4rx6-plzWf3jVzLyAgCLcBGAsYHQ/s1600/IMG_20200512_133038.jpg",
    tags: ["Silk"],
  },
  {
    id: 23,
    image: "https://cdn.pixabay.com/photo/2020/12/13/20/29/indian-saree-5829252_1280.jpg",
    tags: ["Color", "Occasion"],
  },
  {
    id: 24,
    image: "https://cdn.pixabay.com/photo/2022/11/20/06/31/woman-7603569_1280.jpg",
    tags: ["Modern", "Festival"],
  },
  {
    id: 25,
    image: "https://m.economictimes.com/thumb/msid-95668646,width-1000,height-1333,resizemode-4,imgsize-193320/find-the-best-silk-sarees-for-women-on-amazon.jpg",
    tags: ["Fabric"],
  },
  {
    id: 26,
    image: "https://images.pexels.com/photos/27954170/pexels-photo-27954170.jpeg?cs=srgb&dl=pexels-vjy-1720544836-27954170.jpg&fm=jpg",
    tags: ["Georgette"],
  },
  {
    id: 27,
    image: "https://www.samyakk.com/blog/wp-content/uploads/2023/02/re1677_1-1.jpg",
    tags: ["Color", "Silk"],
  },
  {
    id: 28,
    image: "https://cdn.pixabay.com/photo/2015/07/20/07/19/sarees-852440_1280.jpg",
    tags: ["Festival", "Fabric"],
  },
];

const filters = ["All", "Festival", "Fabric", "Color", "Occasion", "Georgette", "Silk", "Modern"];

export default function GlamwizStylePage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredCards =
    selectedFilter === "All"
      ? allCards
      : allCards.filter((card) => card.tags.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-white px-4 py-10 relative">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold text-pink-600">Reception Sarees</h1>
        <p className="text-gray-600 mt-1">{filteredCards.length} products</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter, i) => (
          <button
            key={i}
            onClick={() => setSelectedFilter(filter)}
            className={`text-sm px-4 py-2 rounded-full transition ${
              selectedFilter === filter
                ? "bg-pink-600 text-white"
                : "bg-pink-100 text-pink-700 hover:bg-pink-200"
            }`}
          >
            {filter} {filter !== "All" && "▼"}
          </button>
        ))}
      </div>

      {/* Product Cards - 4 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="relative overflow-hidden rounded-lg shadow group"
          >
            {/* Wishlist Button */}
            <div className="absolute top-2 right-2 z-10">
              <button
                className="text-gray-500 hover:text-pink-600 bg-white rounded-full p-1"
                aria-label="Add to wishlist"
              >
                ♥
              </button>
            </div>
            {/* Image */}
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-full h-[28rem] object-top"
            />
          </div>
        ))}
      </div>

      {/* Bottom Left INR */}
      <div className="fixed bottom-4 left-4">
        <div className="bg-white px-3 py-1 rounded shadow text-sm flex items-center gap-1">
          🇮🇳 INR <span className="ml-1">▼</span>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
        >
         📞
        </a>
      </div>
    </div>
  );
}
