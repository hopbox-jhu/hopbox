import mongoose from "mongoose";

const HostSchema = new mongoose.Schema({
  email: { type: String },
});

const Host = mongoose.model("Host", HostSchema);

export default Host;
