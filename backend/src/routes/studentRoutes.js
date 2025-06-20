const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const studentController = require("../controllers/studentController");

router.get("/my-data", authMiddleware, studentController.getMyData);

module.exports = router;
