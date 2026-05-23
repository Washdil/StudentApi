const express = require("express");
const router = express.Router();
const {
  getStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/studentController");


router.get("/", getStudent);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);


module.exports = router;