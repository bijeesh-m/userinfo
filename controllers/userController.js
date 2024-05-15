const userModel = require("../models/userModel");

module.exports.getUserinfo = async (req, res) => {
  try {
    const userinfo = await userModel.find();
    console.log(userinfo);
    res.status(200).json({ userinfo });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.postUserInfo = async (req, res) => {
  try {
    const userinfo = req.body;
    await userModel.create(userinfo);
  } catch (error) {
    res.status(400).send(error);
  }
};
