import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [careLevelFilter, setCareLevelFilter] = useState("");
  const location = useLocation();

  const newPlant = location.state?.newPlant;

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        const query = careLevelFilter ? `?careLevel=${careLevelFilter}` : "";
        const res = await fetch(`http://localhost:5000/plants${query}`);
        if (!res.ok) throw new Error("Failed to fetch plants");
        const data = await res.json();
        if (newPlant) {
          setPlants([newPlant, ...data]);
        } else {
          setPlants(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, [careLevelFilter, newPlant]);

  if (loading) return <div className="p-6 text-center">Loading plants...</div>;
  if (error) return <div className="p-6 text-red-500 text-center">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 transition-colors duration-300">
        
      
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <label className="font-semibold text-gray-700 dark:text-gray-200">Filter by Care Level:</label>
          <select
            value={careLevelFilter}
            onChange={(e) => setCareLevelFilter(e.target.value)}
            className="px-3 py-2 border rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-gray-100"
          >
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full text-sm sm:text-base md:text-base text-left border-collapse">
            <thead>
              <tr className="bg-green-100 dark:bg-gray-800 text-green-900 dark:text-green-300 text-sm sm:text-base uppercase tracking-wide">
                <th className="px-4 sm:px-6 py-3">Sl No.</th>
                <th className="px-4 sm:px-6 py-3">Plant Name</th>
                <th className="px-4 sm:px-6 py-3">Care Level</th>
                <th className="px-4 sm:px-6 py-3">Category</th>
                <th className="px-4 sm:px-6 py-3">Water Frequency</th>
                <th className="px-4 sm:px-6 py-3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {plants.map((plant, index) => (
                <tr key={plant._id} className="hover:bg-green-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-4 sm:px-6 py-3 font-medium text-gray-700 dark:text-gray-300">{index + 1}</td>
                  <td className="px-4 sm:px-6 py-3 flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <img
                        src={plant?.photo || "/default-plant.png"}
                        alt={plant?.plantName || "Plant"}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <span className="font-bold text-gray-900 dark:text-gray-100">{plant?.plantName || "Unknown"}</span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-gray-700 dark:text-gray-300">{plant?.careLevel || "-"}</td>
                  <td className="px-4 sm:px-6 py-3 text-gray-700 dark:text-gray-300">{plant?.category || "-"}</td>
                  <td className="px-4 sm:px-6 py-3 text-gray-700 dark:text-gray-300">{plant?.wateringFrequency || "-"}</td>
                  <td className="px-4 sm:px-6 py-3">
                    <NavLink to={`/plantdetails/${plant?._id}`}>
                      <button className="px-3 sm:px-4 py-2 sm:py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-300 w-full sm:w-auto text-sm sm:text-base">
                        View Details
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AllPlants;
