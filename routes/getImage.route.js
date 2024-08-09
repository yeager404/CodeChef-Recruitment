const express = require("express");
const router = express.Router();

const {getImage} = require("../controllers/getImage.controller.js");

router.get("/image", getImage);
module.exports = router;