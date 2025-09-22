import { use, useEffect, useState } from "react";
import { AuthContext } from "../Layouts/AuthLayouts/AuthProvider";
import Swal from "sweetalert2"; 
import { Link } from 'react-router';

const MyPlants = () => {
  const { user } = use(AuthContext);
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => setAllPlants(data));
  }, []);

  const myPlants = allPlants.filter(
    (plant) => plant.userEmail === user?.email
  );

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/plants/${_id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                setAllPlants(allPlants.filter((p) => p._id !== _id));
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your plant has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your plant is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {myPlants.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300 text-lg text-center mt-20">
            You haven’t added any plants yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {myPlants.map((plant) => (
              <div
                key={plant._id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
              >
                <div className="h-48 w-full">
                  <img
                    src={plant.photo}
                    alt={plant.plantName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-green-800 dark:text-green-400">
                      {plant.plantName}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-3">
                      {plant.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200">
                        {plant.category}
                      </span>
                      <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200">
                        Care: {plant.careLevel}
                      </span>
                    </div>

                    <div className="mt-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <p><strong>Health:</strong> {plant.healthStatus}</p>
                      <p><strong>Water Every:</strong> {plant.wateringFrequency} days</p>
                      <p><strong>Last Watered:</strong> {plant.lastWatered}</p>
                      <p><strong>Next Watering:</strong> {plant.nextWatering}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row justify-between gap-2">
                    <Link to={`/updatePlants/${plant._id}`}>
                      <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(plant._id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlants;
