import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlantDetails = () => {
  const { _id } = useParams();
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => {
        const plant = data.find((item) => item._id === _id);
        setPlantData(plant);
      });
  }, [_id]);

  if (!plantData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-xl font-bold text-red-600">Plant not found!</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 transition-colors duration-300">
        {/* Plant Image */}
        <div className="flex justify-center items-center bg-green-50 dark:bg-gray-800">
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            src={plantData.photo}
            alt={plantData.plantName}
          />
        </div>

        {/* Plant Info */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-800 dark:text-green-400 mb-4 text-center md:text-left">
            {plantData.plantName}
          </h1>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="text-lg font-semibold text-green-700 dark:text-green-400">
                Description
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">{plantData.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-green-700 dark:text-green-400">Category:</span>
              <span className="text-sm">{plantData.category}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-green-700 dark:text-green-400">Health:</span>
              <span className="text-sm">{plantData.healthStatus}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-green-700 dark:text-green-400">Care Level:</span>
              <span className="text-sm">{plantData.careLevel}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-green-700 dark:text-green-400">Watering Frequency:</span>
              <span className="text-sm">{plantData.wateringFrequency}</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
