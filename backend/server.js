const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  return res.status(200).json({ message: "this is server running" });
});
const connectDb = async () => {
   console.log("connect function call")
  const resp = await mongoose.connect("mongodb://mongo-db-service/podDb");
  if (resp) console.log("db connected");
  else{
    console.log("db not connected")
  }
};
app.listen(PORT, (_) => {
  console.log("server running");
  connectDb()
});
