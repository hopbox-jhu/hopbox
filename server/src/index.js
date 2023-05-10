import express from "express";
import host from "./routes/host.js";
import renter from "./routes/renter.js";
import listing from "./routes/listing.js";
import application from "./routes/application.js";
import user from "./routes/user.js";
import image from "./routes/images.js";
import * as db from "./data/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./routes/auth.js";
import path from 'path';


db.connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the HopBox API!");
});

app.get("/image/upload/", (req, res) => {
  res.send("Image upload");
});

app.use(host);
app.use(renter);
app.use(listing);
app.use(application);
app.use(user);
app.use(authRouter);
app.use(image);

app.use((err, req, res, next) => {
  if (err) {
    const code = err.status || 500;
    res.status(code).json({
      status: code,
      message: err.message || `Internal Server Error!`,
    });
  }
  next();
});

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});


export default app;
