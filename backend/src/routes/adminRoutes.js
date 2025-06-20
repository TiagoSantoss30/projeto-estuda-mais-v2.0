
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const adminController = require("../controllers/adminController");


router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  adminController.getAllUsers
);

module.exports = router;
