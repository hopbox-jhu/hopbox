import mongoose from "mongoose";

const RenterSchema = new mongoose.Schema({
  email: { type: String },
});

const Renter = mongoose.model("Renter", RenterSchema);

export default Renter;
