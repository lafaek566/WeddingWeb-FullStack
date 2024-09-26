import axios from "axios"; // Ensure axios is properly installed

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Base URL for the API
});

// Fetch invitees
export const getInvitees = () => api.get("/invitees");

// Add an invitee
export const addInvitee = (name) => api.post("/invitees", { name });

// Update an invitee
export const updateInvitee = (id, name) => api.put(`/invitees/${id}`, { name });

// Delete an invitee
export const deleteInvitee = (id) => api.delete(`/invitees/${id}`);

// Function to fetch prayer wishes
export const getPrayerWishes = async () => {
  return await api.get("/prayer-wishes");
};

// Fetch a specific prayer wish by ID
export const getPrayerWishById = async (id) => {
  return await api.get(`/prayer-wishes/${id}`); // Use the api instance
};

// Add a prayer wish
export const addPrayerWish = async (data) => {
  return await api.post("/prayer-wishes", data);
};

// Update a prayer wish
export const updatePrayerWish = async (id, data) => {
  return await api.put(`/prayer-wishes/${id}`, data);
};

// Delete a prayer wish
export const deletePrayerWish = async (id) => {
  return await api.delete(`/prayer-wishes/${id}`);
};

// All commentarry
export const getAllCommentsByPrayerWishId = async (id) => {
  return await api.get(`/prayer-wishes/${id}/comments`); // Sesuaikan dengan endpoint yang benar
};

export default api;
