import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  address: { type: String },
  bio: { type: String },
  profilePicture: { type: String },
  school: { type: String},
  occupation: { type: String},
});

const User = mongoose.model("User", UserSchema);

export default User;