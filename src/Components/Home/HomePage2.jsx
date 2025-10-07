import React, { useState, useEffect } from "react";

// === Card Data ===
const cardSlides = [
  {
    id: 1,
    title: "Garba Look 1",
    images: [
      "https://i.pinimg.com/736x/c2/e2/31/c2e23109b3d026c0442187c7556eae29.jpg",
      "https://i.pinimg.com/736x/c0/0c/9c/c00c9cdad50ed9a6f726753caa4cd775.jpg",
    ],
  },
  {
    id: 2,
    title: "Garba Look 2",
    images: [
      "https://i.pinimg.com/736x/ba/26/82/ba26829f440e5f4bf3a69907241178f1.jpg",
      "https://i.pinimg.com/736x/36/c2/8e/36c28e326ae74c55932e6d68b254459f.jpg",
    ],
  },
  {
    id: 3,
    title: "Garba Look 3",
    images: [
      "https://i.pinimg.com/736x/f0/6f/ab/f06fab4e92703139fae50005c718dca6.jpg",
      "https://i.pinimg.com/736x/6e/ac/cb/6eaccbeff01ec72066ca55a094243961.jpg",
    ],
  },
  {
    id: 4,
    title: "Garba Look 4",
    images: [
      "https://i.pinimg.com/736x/e9/ea/d1/e9ead1482571d5c41098ec4e2c76d6d7.jpg",
      "https://i.pinimg.com/736x/cb/48/55/cb4855acc6e5c5d09afe01f33c0522de.jpg",
    ],
  },
  {
    id: 5,
    title: "Garba Look 5",
    images: [
      "https://i.pinimg.com/736x/2e/09/90/2e0990d3ef270be8031b79e9511fa335.jpg",
      "https://i.pinimg.com/736x/58/72/a7/5872a79d09ecca9c5dd164249f1ff062.jpg",
    ],
  },
  {
    id: 6,
    title: "Garba Look 6",
    images: [
      "https://i.pinimg.com/736x/ea/8c/1a/ea8c1abe64fdba00b5b2f4ab7a21808c.jpg",
      "https://i.pinimg.com/736x/d3/28/ae/d328ae14775d66eb31412b437ff87740.jpg",
    ],
  },
  {
    id: 7,
    title: "Garba Look 1",
    images: [
      "https://i.pinimg.com/736x/71/d3/61/71d361dbaec699fbfaf07a846b6aa5ee.jpg",
      "https://i.pinimg.com/1200x/d3/94/38/d39438f5422818b893f005db79593c11.jpg",
    ],
  },
  {
    id: 8,
    title: "Garba Look 2",
    images: [
      "https://i.pinimg.com/736x/5e/d8/03/5ed8035fc3b4d183f42e99c47d6c5daa.jpg",
      "https://i.pinimg.com/736x/23/38/6d/23386d6d0c772dea4435faf90217d049.jpg",
    ],
  },
  {
    id: 9,
    title: "Garba Look 3",
    images: [
      "https://i.pinimg.com/736x/00/34/fc/0034fc7c6277e0d2a1f0745c385d1a05.jpg",
      "https://i.pinimg.com/736x/7b/9d/96/7b9d9679aaf3c3b539823dc7a4ed85c9.jpg",
    ],
  },
  {
    id: 10,
    title: "Garba Look 4",
    images: [
      "https://i.pinimg.com/1200x/8a/81/56/8a8156292980462b97d4c627495807f9.jpg",
      "https://i.pinimg.com/736x/9a/7a/79/9a7a7922bb4fdc107d9b19b2b2fd8b29.jpg",
    ],
  },
  {
    id: 11,
    title: "Garba Look 5",
    images: [
      "https://i.pinimg.com/736x/df/24/64/df24645211b2f5cc412829041360a6ac.jpg",
      "https://i.pinimg.com/1200x/fd/36/7f/fd367f1b9b6e3d5ee2bb73369bb8273e.jpg",
    ],
  },
  {
    id: 12,
    title: "Garba Look 6",
    images: [
      "https://i.pinimg.com/736x/4a/d3/81/4ad381d2d9599f74d1fba6afc5ad5049.jpg",
      "https://i.pinimg.com/1200x/c3/80/8c/c3808c09f9d3d3c1990b137c8d74871d.jpg",
    ],
  },
];

export default function HomePage2() {
  const [cardIndex, setCardIndex] = useState(0);
  const cardsPerPage = 4;
  const maxStartIndex = cardSlides.length - cardsPerPage; // 12 - 4 = 8

  const nextCardGroup = () => {
    setCardIndex((prev) => {
      const next = prev + cardsPerPage;
      return next > maxStartIndex ? maxStartIndex : next;
    });
  };

  const prevCardGroup = () => {
    setCardIndex((prev) => {
      const prevVal = prev - cardsPerPage;
      return prevVal < 0 ? 0 : prevVal;
    });
  };

  return (
    <div className="w-screen min-h-full bg-white py-2 px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-semibold">GARBA COLLECTION</h2>
        <div>
          <button
            onClick={prevCardGroup}
            disabled={cardIndex === 0}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          <button
            onClick={nextCardGroup}
            disabled={cardIndex >= maxStartIndex}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 transition-all duration-500">
        {cardSlides.slice(cardIndex, cardIndex + cardsPerPage).map((card) => (
          <CardWithHoverAutoSlider key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

function CardWithHoverAutoSlider({ card }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) return;

    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % card.images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [hovered, card.images.length]);

  const nextImage = () => {
    setImgIndex((prev) => (prev + 1) % card.images.length);
  };

  const prevImage = () => {
    setImgIndex((prev) =>
      prev === 0 ? card.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="w-[25rem] h-full rounded-xl gap-4 shadow-md overflow-hidden bg-white hover:shadow-xl transition-all cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setImgIndex(0);
      }}
    >
      <div className="relative h-[30rem]">
        <img
          src={card.images[imgIndex]}
          alt={card.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          draggable={false}
        />
        {/* Prev / Next buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-3 transform -translate-y-1/2 pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="bg-white text-black rounded-full shadow px-3 py-1 hover:bg-gray-100"
            aria-label="Previous Image"
          >
            ←
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="bg-white text-black rounded-full shadow px-3 py-1 hover:bg-gray-100"
            aria-label="Next Image"
          >
            →
          </button>
        </div>
      </div>
      <div className="p-3 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
        <p className="text-sm text-gray-500">
          Image {imgIndex + 1} of {card.images.length}
        </p>
      </div>
    </div>
  );
}
