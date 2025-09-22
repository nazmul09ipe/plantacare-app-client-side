import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdatePlants = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  // Fetch existing plant details
  useEffect(() => {
    fetch(`http://localhost:5000/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data))
      .catch((err) => console.error("Error fetching plant:", err));
  }, [id]);

  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedPlantData = Object.fromEntries(formData.entries());

    fetch(`http://localhost:5000/plants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPlantData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Plant Updated Successfully!",
            icon: "success",
            draggable: true,
          });
          navigate("/myplants");
        } else {
          Swal.fire({ title: "No changes were made", icon: "info" });
        }
      })
      .catch((err) => {
        console.error("Error updating plant:", err);
        Swal.fire({
          title: "Error",
          text: "Could not update plant. Check console for details.",
          icon: "error",
        });
      });
  };

  if (!plant) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-700 dark:text-gray-300">
        Loading plant details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 sm:p-10 transition-colors duration-300">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-8 text-center">
        Update Plant
      </h1>

      <form
        onSubmit={handleUpdatePlant}
        className="bg-green-100 dark:bg-green-900/50 backdrop-blur-md shadow-2xl rounded-3xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 transition-colors duration-300"
      >
        {[
          { label: "Plant Name", name: "plantName", type: "text" },
          { label: "Description", name: "description", type: "text" },
          { label: "User Name", name: "userName", type: "text" },
          { label: "User Email", name: "userEmail", type: "email" },
          { label: "Health Status", name: "healthStatus", type: "text" },
          { label: "Watering Frequency", name: "wateringFrequency", type: "text" },
          { label: "Photo URL", name: "photo", type: "text", colSpan: 2 },
          { label: "Last Watered Date", name: "lastWatered", type: "date" },
          { label: "Next Watering Date", name: "nextWatering", type: "date" },
        ].map((field, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${field.colSpan ? "md:col-span-2" : ""}`}
          >
            <label className="mb-2 font-semibold">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              defaultValue={plant[field.name]}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
        ))}

        {/* Category */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Category</label>
          <select
            name="category"
            defaultValue={plant.category}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            {["Succulent", "Fern", "Tropical", "Bonsai", "Flower"].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Care Level */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Care Level</label>
          <select
            name="careLevel"
            defaultValue={plant.careLevel}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            {["Easy", "Medium", "Hard"].map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition transform hover:-translate-y-1 hover:scale-105"
          >
            Update Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePlants;
