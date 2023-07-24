const express = require("express");
// const JobController = require("../controllers/jobController");
// const UserController = require("../controllers/userController");
const QuizController = require("../controllers/quizController");
// const auth = require("../middlewares/authentication");
const router = express.Router();

router.get("/:id", QuizController.getbyid);

// router.use(auth);
// router.get("/favorite", JobController.favoriteList);
// router.post("/favorite/:MovieId", JobController.addFavorite);

module.exports = router;
