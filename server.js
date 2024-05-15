const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  console.log("mongodb connected");
});
const userRoute = require("./routes/userRoutes");

app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("server running on", process.env.PORT);
});
