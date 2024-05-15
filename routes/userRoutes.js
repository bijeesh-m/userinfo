const express = require("express");
const userControll = require("../controllers/userController")

const router = express.Router();

router.get("/getuserinfo",userControll.getUserinfo)
router.post("/postuserinfo",userControll.postUserInfo)

module.exports = router;
