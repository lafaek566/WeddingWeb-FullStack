import { useEffect, useState } from "react"; // Import hooks for state and lifecycle methods
import axios from "axios"; // Import Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./PrayerWishList.css"; // Import CSS for styling

const PrayerWishList = () => {
  const [prayerWishes, setPrayerWishes] = useState([]); // State to hold prayer wishes
  const [error, setError] = useState(null); // State to hold error messages
  const navigate = useNavigate(); // Initialize the navigate function

  // useEffect to fetch prayer wishes when the component mounts
  useEffect(() => {
    const fetchPrayerWishes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/prayer-wishes" // API endpoint to fetch prayer wishes
        );
        setPrayerWishes(response.data); // Set the fetched data to state
      } catch (err) {
        setError("Error fetching prayer wishes"); // Set error if the fetch fails
      }
    };

    fetchPrayerWishes(); // Call the function to fetch data
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle deletion of a prayer wish
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/prayer-wishes/${id}`); // Call delete API
      setPrayerWishes(
        (prevWishes) => prevWishes.filter((wish) => wish.id !== id) // Update state to remove deleted wish
      );
      alert("Prayer wish deleted successfully!"); // Alert on successful deletion
    } catch (err) {
      alert("Error deleting prayer wish"); // Alert on deletion error
    }
  };

  // Function to handle editing of a prayer wish
  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Navigate to the EditPrayerWish component with the wish ID
  };

  if (error) return <div className="error">{error}</div>; // Display error if there is one

  return (
    <div className="prayer-wish-list">
      {" "}
      {/* Main container for the wish list */}
      <h2 className="title">Prayer Wishes</h2> {/* Title for the wish list */}
      <ul className="wish-list">
        {" "}
        {/* Unordered list for displaying wishes */}
        {prayerWishes.map(
          (
            wish // Map over the prayer wishes
          ) => (
            <li key={wish.id} className="wish-item">
              {" "}
              {/* List item for each wish */}
              <div className="wish-content">
                <h3 className="wish-name">{wish.name}</h3>{" "}
                {/* Display the name of the wish */}
                <p className="wish-message">{wish.message}</p>{" "}
                {/* Display the message of the wish */}
              </div>
              <div className="wish-actions">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(wish.id)} // Call handleEdit on button click
                >
                  Edit
                </button>
                {/* Uncomment to enable delete functionality */}
                {/* <button
                className="delete-button"
                onClick={() => handleDelete(wish.id)} // Call handleDelete on button click
              >
                Delete
              </button> */}
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PrayerWishList; // Export the component for use in other parts of the app
