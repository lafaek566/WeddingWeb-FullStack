import { useEffect, useState } from "react";
import {
  getPrayerWishById,
  updatePrayerWish,
  deletePrayerWish,
} from "../service/api";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPrayerWish.css"; // Import the CSS file

const EditPrayerWish = () => {
  const { id } = useParams();
  const [prayerWish, setPrayerWish] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrayerWish = async () => {
      try {
        const response = await getPrayerWishById(id);
        setPrayerWish(response.data);
        setComments(response.data.comments || []);
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
    const confirmUpdate = window.confirm("Are you sure you want to update?");

    if (confirmUpdate) {
      try {
        await updatePrayerWish(id, prayerWish);
        alert("Prayer wish updated successfully!");
      } catch (err) {
        setError("Error updating prayer wish: " + err.message);
      }
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this prayer?"
    );

    if (confirmDelete) {
      try {
        await deletePrayerWish(id);
        alert("Prayer wish deleted successfully!");
        navigate("/prayer-wishes");
      } catch (err) {
        setError("Error deleting prayer wish: " + err.message);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="edit-prayer-wish">
      <h2>Edit Prayer Wish</h2>
      <form onSubmit={handleUpdate} className="wish-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={prayerWish.name}
            onChange={(e) =>
              setPrayerWish({ ...prayerWish, name: e.target.value })
            }
            required
          />
        </div>
        {/* Uncomment if you want to include email and phone */}
        {/* <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={prayerWish.email}
            onChange={(e) =>
              setPrayerWish({ ...prayerWish, email: e.target.value })
            }
            required
          />
        </div> */}
        {/* <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={prayerWish.phone}
            onChange={(e) =>
              setPrayerWish({ ...prayerWish, phone: e.target.value })
            }
            required
          />
        </div> */}
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={prayerWish.address}
            onChange={(e) =>
              setPrayerWish({ ...prayerWish, address: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            value={prayerWish.message}
            onChange={(e) =>
              setPrayerWish({ ...prayerWish, message: e.target.value })
            }
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="update-button">
            Update
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      </form>

      <h3>Comments:</h3>
      <ul className="comments-list">
        {comments.length > 0 ? (
          comments.map((comment) => <li key={comment.id}>{comment.text}</li>)
        ) : (
          <li>No comments available.</li>
        )}
      </ul>
    </div>
  );
};

export default EditPrayerWish;
