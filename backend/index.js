import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./modele/bookModel.js";
import cors from "cors";

const app = express();

//Midleware
app.use(express.json());

//Mideleware pentru CORS policy
//1: Allow all origins with Default of cors(*)
app.use(cors());
//2: Allow custom origins
//app.use( - i am dat comm pt ca folosim alt ip
//cors({
//origin: "http://localhost:27015",
//method: ["GET", "POST", "PUT", "DELETE"],
//allowedHeaders: ["Content-Type"],
//})
//);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(404).send("Bine ai venit");
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("S-a conectat la baza de date");
    app.listen(PORT, () => {
      console.log(`listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
