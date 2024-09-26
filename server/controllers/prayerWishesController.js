const prayerWishModel = require("../models/PrayerWishes");

const addPrayerWish = async (req, res) => {
  try {
    const wish = req.body;
    const result = await prayerWishModel.addPrayerWish(wish);
    res
      .status(201)
      .json({ message: "Prayer wish added!", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPrayerWishes = async (req, res) => {
  try {
    const wishes = await prayerWishModel.getAllPrayerWishes();
    res.status(200).json(wishes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePrayerWish = async (req, res) => {
  try {
    const { id } = req.params;
    const wish = req.body;
    await prayerWishModel.updatePrayerWish(id, wish);
    res.status(200).json({ message: "Prayer wish updated!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPrayerWishById = async (req, res) => {
  try {
    const { id } = req.params;
    const wish = await prayerWishModel.getPrayerWishById(id);
    res.status(200).json(wish);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to delete a prayer wish by ID
const deletePrayerWish = async (req, res) => {
  const { id } = req.params; // Get the ID from the request parameters

  try {
    const result = await prayerWishModel.deletePrayerWish(id); // Call the model's delete function

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Prayer wish not found" });
    }

    res.status(200).json({ message: "Prayer wish deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error); // Log the error for debugging
    res.status(500).json({ message: "Error deleting prayer wish" });
  }
};

// controllers/prayerWishesController.js
exports.getPrayerWishById = async (req, res) => {
  try {
    const { id } = req.params;
    const prayerWish = await db.PrayerWish.findByPk(id, {
      include: ["comments"], // Misalnya, jika kamu memiliki relasi antara PrayerWish dan comments
    });
    if (!prayerWish) {
      return res.status(404).json({ message: "Prayer Wish not found" });
    }
    res.json(prayerWish);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// prayerWishesController.js
const getAllCommentsByPrayerWishId = async (req, res) => {
  const { id } = req.params; // Get the prayer wish ID from the request parameters
  try {
    const comments = await Comment.find({ prayerWishId: id }); // Assuming you're using a Comment model
    res.status(200).json(comments); // Return the comments as JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle any errors
  }
};

module.exports = {
  addPrayerWish,
  getAllPrayerWishes,
  updatePrayerWish,
  getPrayerWishById,
  deletePrayerWish,
  getAllCommentsByPrayerWishId,
};
