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
    image: "https://i.pinimg.com/736x/10/ee/ae/10eeae15cb2d56d8ea4a10b54a3eab62.jpg",
    tags: ["Occasion", "Fabric"],
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/90/5b/44/905b44f3f9c22e6c1ebfeef3138eeb0a.jpg",
    tags: ["Color", "Georgette"],
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/fc/4f/34/fc4f340e2e0ef4cf47be649e62a179b5.jpg",
    tags: ["Festival", "Occasion"],
  },
  {
    id: 7,
    image: "https://i.pinimg.com/736x/b9/fc/f8/b9fcf80b89a348cf947c53ecadfeaa3b.jpg",
    tags: ["Color", "Silk"],
  },
  {
    id: 8,
    image: "https://i.pinimg.com/736x/72/f0/cf/72f0cf660b86171e4e2cb983330beff1.jpg",
    tags: ["Fabric"],
  },
  {
    id: 9,
    image: "https://picsum.photos/500/700?random=9",
    tags: ["Silk", "Color"],
  },
  {
    id: 10,
    image: "https://picsum.photos/500/700?random=10",
    tags: ["Occasion"],
  },
  {
    id: 11,
    image: "https://picsum.photos/500/700?random=11",
    tags: ["Festival", "Modern"],
  },
  {
    id: 12,
    image: "https://picsum.photos/500/700?random=12",
    tags: ["Fabric", "Georgette"],
  },
  {
    id: 13,
    image: "https://picsum.photos/500/700?random=13",
    tags: ["Festival"],
  },
  {
    id: 14,
    image: "https://picsum.photos/500/700?random=14",
    tags: ["Color", "Occasion"],
  },
  {
    id: 15,
    image: "https://picsum.photos/500/700?random=15",
    tags: ["Georgette", "Modern"],
  },
  {
    id: 16,
    image: "https://picsum.photos/500/700?random=16",
    tags: ["Silk", "Fabric"],
  },
  {
    id: 17,
    image: "https://picsum.photos/500/700?random=17",
    tags: ["Color"],
  },
  {
    id: 18,
    image: "https://picsum.photos/500/700?random=18",
    tags: ["Festival", "Occasion"],
  },
  {
    id: 19,
    image: "https://picsum.photos/500/700?random=19",
    tags: ["Modern"],
  },
  {
    id: 20,
    image: "https://picsum.photos/500/700?random=20",
    tags: ["Fabric", "Color"],
  },
  {
    id: 21,
    image: "https://picsum.photos/500/700?random=21",
    tags: ["Georgette", "Festival"],
  },
  {
    id: 22,
    image: "https://picsum.photos/500/700?random=22",
    tags: ["Silk"],
  },
  {
    id: 23,
    image: "https://picsum.photos/500/700?random=23",
    tags: ["Color", "Occasion"],
  },
  {
    id: 24,
    image: "https://picsum.photos/500/700?random=24",
    tags: ["Modern", "Festival"],
  },
  {
    id: 25,
    image: "https://picsum.photos/500/700?random=25",
    tags: ["Fabric"],
  },
  {
    id: 26,
    image: "https://picsum.photos/500/700?random=26",
    tags: ["Georgette"],
  },
  {
    id: 27,
    image: "https://picsum.photos/500/700?random=27",
    tags: ["Color", "Silk"],
  },
  {
    id: 28,
    image: "https://picsum.photos/500/700?random=28",
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
              className="w-full h-[32rem] object-cover"
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
