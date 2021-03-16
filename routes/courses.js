const express = require("express");
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

const router = express.Router();

router.route("/").get(getCourses).post(createCourse);

router.route("/:id").get(getCourse).patch(updateCourse).delete(deleteCourse);

module.exports = router;
