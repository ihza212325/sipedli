// const { comparePassword } = require("../helpers/hashPassword");
// const { createToken } = require("../helpers/jwt");
// const { User } = require("../models/index");
const { Quiz, Quest } = require("../models/index");
// const {OAuth2Client} = require('google-auth-library')
// const axios = require("axios");

class QuizController {
  static async getbyid(req, res, next) {
    console.log("masuk sinii");

    const allQuiz = await Quiz.findAll({
      include: [{ model: Quest, order: ["id", "DESC"] }],
    });
    // console.log(allQuiz);

    res.status(200).json(allQuiz);
  }
}

module.exports = QuizController;
