// const { comparePassword } = require("../helpers/hashPassword");
// const { createToken } = require("../helpers/jwt");
// const { User } = require("../models/index");
const { Poster } = require("../models/index");
// const {OAuth2Client} = require('google-auth-library')
// const axios = require("axios");

class PosterController {
  static async send(req, res, next) {
    // console.log("masuk sinii");

    const allposter = await Poster.findAll();
    // console.log(allposter);

    res.status(200).json(allposter);
  }
}

module.exports = PosterController;
