import { useEffect, useState } from "react";
import {
  getPrayerWishById,
  updatePrayerWish,
  deletePrayerWish,
} from "../service/api"; // Import the delete function
import { useParams, useNavigate } from "react-router-dom";

const EditPrayerWish = () => {
  const { id } = useParams();
  const [prayerWish, setPrayerWish] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [comments, setComments] = useState([]); // State untuk komentar
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchPrayerWish = async () => {
      try {
        const response = await getPrayerWishById(id);
        console.log("Fetched Prayer Wish:", response.data); // Log data yang diterima
        setPrayerWish(response.data);
        setComments(response.data.comments || []); // Ambil komentar jika ada
        setLoading(false);
      } catch (err) {
        setError("Error fetching prayer wish");
        setLoading(false);
      }
    };

    fetchPrayerWish();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updatePrayerWish(id, prayerWish); // Ensure prayerWish has all fields
      alert("Prayer wish updated successfully!");
    } catch (err) {
      setError("Error updating prayer wish: " + err.message); // Show specific error
    }
  };

  const handleDelete = async () => {
    try {
      await deletePrayerWish(id); // Call delete function
      alert("Prayer wish deleted successfully!");
      navigate("/prayer-wishes"); // Redirect after deletion
    } catch (err) {
      setError("Error deleting prayer wish: " + err.message); // Show specific error
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Edit Prayer Wish</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={prayerWish.name}
          onChange={(e) =>
            setPrayerWish({ ...prayerWish, name: e.target.value })
          }
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={prayerWish.email}
          onChange={(e) =>
            setPrayerWish({ ...prayerWish, email: e.target.value })
          }
          placeholder="Email"
          required
        />
        <input
          type="tel"
          value={prayerWish.phone}
          onChange={(e) =>
            setPrayerWish({ ...prayerWish, phone: e.target.value })
          }
          placeholder="Phone"
          required
        />
        <input
          type="text"
          value={prayerWish.address}
          onChange={(e) =>
            setPrayerWish({ ...prayerWish, address: e.target.value })
          }
          placeholder="Address"
          required
        />
        <textarea
          value={prayerWish.message}
          onChange={(e) =>
            setPrayerWish({ ...prayerWish, message: e.target.value })
          }
          placeholder="Message"
          required
        />
        <button type="submit">Update</button>
        <button
          type="button"
          onClick={handleDelete}
          style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
        >
          Delete
        </button>{" "}
        {/* Delete button */}
      </form>

      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li> // Tampilkan komentar
        ))}
      </ul>
    </div>
  );
};

export default EditPrayerWish;
