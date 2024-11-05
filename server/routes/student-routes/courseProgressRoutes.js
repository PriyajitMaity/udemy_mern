const express =require("express");
const { markCurrentLectureAsViewed, getCurrentCourseProgress, resetCurrentCourseProgress } =require("../../controllers/Students/courseProgressController");
const router =express.Router();

router.get("/get/:userId/:courseId", getCurrentCourseProgress);
router.post("/mark-lecture-viewed", markCurrentLectureAsViewed);
router.post("/reset-progress", resetCurrentCourseProgress);


module.exports =router;