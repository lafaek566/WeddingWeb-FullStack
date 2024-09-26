const express = require("express");
const router = express.Router();
const prayerWishController = require("../controllers/prayerWishesController");

router.post("/", prayerWishController.addPrayerWish);
router.get("/", prayerWishController.getAllPrayerWishes);
router.put("/:id", prayerWishController.updatePrayerWish);
router.get("/:id", prayerWishController.getPrayerWishById);
router.delete("/:id", prayerWishController.deletePrayerWish);
router.get("/:id/comments", prayerWishController.getAllCommentsByPrayerWishId);

module.exports = router;
