import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const port = 5000 || process.env.PORT;
const app = express();

app.use(express.json());

app.get("/api", async (req, res) => {
  res.send("Hello");
});

const start = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`App is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
