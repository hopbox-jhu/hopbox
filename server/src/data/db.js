import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.DB_URI;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export function connect() {
  mongoose.connect(URI, option);

  mongoose.connection.on("error", (err) => {
    console.log("Could not connect to MongoDB");
    console.log(err);
  });

  mongoose.connection.on("open", () => {
    console.log("Connected to MongoDB!");
  });
}

export async function createUser(name, email, password) {
  try {
    const user = new User({ name, email, password });
    await user.save();
    console.log("User created successfully!");
  } catch (error) {
    console.log("Error creating user in database:", error);
  }
}