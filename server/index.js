import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import "dotenv/config";

const port = 5000 || process.env.PORT;
const app = express();

app.use(express.json());

app.get("/api/:type/:method", async (req, res) => {
  const { type, method } = req.params;

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/${type}/${method}?apiKey=${process.env.apiKey}`,
      { params: req.query }
    );

    res.send(response.data);
  } catch (error) {
    res.json({ error: error.message });
  }
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
