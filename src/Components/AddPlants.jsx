import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddPlants = () => {
  const navigate = useNavigate();

  const handleAddPlants = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlantData = Object.fromEntries(formData.entries());

    fetch("http://localhost:5000/plants", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPlantData)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({ title: "Plant added Successfully!", icon: "success", draggable: true });
        form.reset();
        navigate("/myPlants", { state: { newPlant: { ...newPlantData, _id: data.insertedId } } });
      } else {
        Swal.fire({ title: "Failed to add plant", icon: "error", draggable: true });
      }
    })
    .catch(err => {
      console.error("Error adding plant:", err);
      Swal.fire({ title: "Error", text: "Could not add plant. Check console for details.", icon: "error", draggable: true });
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFFE0] dark:bg-gray-900 flex flex-col items-center justify-center p-4 sm:p-10 transition-colors duration-300">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-6 sm:mb-8 text-center">
        Add Your Plant
      </h1>

      <form
        onSubmit={handleAddPlants}
        className="bg-green-100 dark:bg-green-900/50 backdrop-blur-md shadow-xl rounded-2xl w-full max-w-5xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 transition-colors duration-300"
      >
        {/* Plant Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Plant Name</label>
          <input
            type="text"
            name="plantName"
            placeholder="Plant Name"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
            required
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Category</label>
          <select
            name="category"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          >
            <option value="Succulent">Succulent</option>
            <option value="Fern">Fern</option>
            <option value="Tropical">Tropical</option>
            <option value="Bonsai">Bonsai</option>
            <option value="Flower">Flower</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Add description"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Care Level */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Care Level</label>
          <select
            name="careLevel"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Last Watered */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Last Watered Date</label>
          <input
            type="date"
            name="lastWatered"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Next Watering */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Next Watering Date</label>
          <input
            type="date"
            name="nextWatering"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* User Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">User Name</label>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* User Email */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">User Email</label>
          <input
            type="email"
            name="userEmail"
            placeholder="User Email"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Health Status */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            placeholder="Health Status"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Watering Frequency */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Watering Frequency</label>
          <input
            type="text"
            name="wateringFrequency"
            placeholder="Watering Frequency"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Photo URL */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4 sm:mt-6">
          <button
            type="submit"
            className="bg-green-600 dark:bg-green-500 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlants;
