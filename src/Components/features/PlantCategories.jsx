import React from 'react';

const PlantCategories = () => {
  const categories = [
    { name: "Succulents", description: "Low-maintenance, water-storing plants perfect for beginners.", image: "https://i.ibb.co.com/h1xGK8rf/various-small-cacti.jpg" },
    { name: "Tropical Plants", description: "Bright, vibrant plants that thrive in warm and humid conditions.", image: "https://i.ibb.co.com/Nds5mfQ9/closeup-green-leaf-textured-background.jpg" },
    { name: "Ferns", description: "Delicate green foliage plants that bring freshness indoors.", image: "https://i.ibb.co.com/5WwT5PhT/shot-ostrich-fern-s-blossomed-plants.jpg" },
    { name: "Bonsai", description: "Miniature artistic trees that add elegance and charm to any space.", image: "https://i.ibb.co.com/HppfW0J1/vertical-shot-bonsai-plant-blurred-background.jpg" },
  ];

  return (
    <section className="w-11/12 mx-auto py-16 px-4 sm:px-6 md:px-8 lg:px-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 secondary-font text-black dark:text-white">
        Explore Plant Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-[#06864e] rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
          >
            <div className="h-56 sm:h-64 md:h-72 w-full overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                {cat.name}
              </h3>
              <p className="text-sm sm:text-base text-white flex-1">
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlantCategories;
