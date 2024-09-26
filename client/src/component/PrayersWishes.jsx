import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getPrayerWishes, addPrayerWish } from "../service/api"; // Import functions from api.js

const PrayerWishes = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    attending: "yes",
  });
  const [submitted, setSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [prayerWishes, setPrayerWishes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedbackMessage(""); // Clear feedback message before submitting

    try {
      await addPrayerWish(formData); // Call API to add prayer wish
      setFeedbackMessage("Ucapan terima kasih berhasil dikirim!");
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        attending: "yes",
      });
      fetchPrayerWishes(); // Reload wishes after submit
    } catch (error) {
      console.error("Error submitting prayer wish:", error);
      setFeedbackMessage("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  // Fetch prayer wishes from API
  const fetchPrayerWishes = async () => {
    setLoading(true);
    try {
      const { data } = await getPrayerWishes();
      console.log("Fetched prayer wishes:", data); // Log fetched data
      const sortedWishes = data.sort(
        (a, b) => new Date(b.submitted_at) - new Date(a.submitted_at)
      );
      setPrayerWishes(sortedWishes); // Set sorted wishes
    } catch (error) {
      console.error("Error fetching prayer wishes:", error);
      setFeedbackMessage("Gagal memuat ucapan, silakan coba lagi."); // Provide feedback on fetch error
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchPrayerWishes();
  }, []);

  // Render JSX
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-10 font-serif">
      <div className="container mx-auto px-4">
        {/* Form for submitting prayer wishes */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-orange-500 mb-4">
            Kirim Ucapan Doa
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Nama:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded w-full py-2 px-3"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded w-full py-2 px-3"
            />
          </div> */}
          {/* <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Telepon:
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Alamat: <em>(Kotamu)</em>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Pesan:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Kehadiran:
            </label>
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            >
              <option value="yes">Ya</option>
              <option value="no">Tidak</option>
            </select>
          </div>
          <motion.button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Kirim
          </motion.button>
        </motion.form>

        {/* Feedback Message */}
        {feedbackMessage && (
          <div
            className={`p-4 rounded max-w-md mx-auto mb-4 ${
              submitted
                ? "bg-green-100 border border-green-400 text-green-700"
                : "bg-red-100 border border-red-400 text-red-700"
            }`}
          >
            {feedbackMessage}
          </div>
        )}

        {/* Loading State */}
        {loading && <div className="text-center">Loading...</div>}

        {/* Display Prayer Wishes */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-orange-500 mb-4 text-center">
            Komentar Ucapan
          </h2>
          <div className="text-gray-800 dark:text-gray-300">
            {prayerWishes.length > 0 ? (
              prayerWishes.map((wish, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start border-b border-gray-300 py-4"
                >
                  <img
                    src={`https://ui-avatars.com/api/?name=${wish.name}&background=random`} // Using a placeholder avatar
                    alt={wish.name}
                    className="w-12 h-12 rounded-full mr-4 mb-2 sm:mb-0"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                      <p className="font-semibold">{wish.name}</p>
                      <p className="text-sm text-gray-600">{wish.email}</p>
                      <p>
                        <em>hadir: {wish.attending}</em>
                      </p>
                      <p className="whitespace-normal break-words">
                        {wish.message}
                      </p>
                      {/* <p className="text-sm text-gray-500">Tlp: {wish.phone}</p> */}
                      <p className="text-sm text-gray-500 font-semibold">
                        {wish.address}
                      </p>
                      <p className="text-xs text-gray-400">
                        <em>
                          date: {new Date(wish.submitted_at).toLocaleString()}
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Tidak ada ucapan yang tersedia.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerWishes;
