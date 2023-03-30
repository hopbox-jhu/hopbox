import mongoose from "mongoose";

const HostSchema = new mongoose.Schema({
  email: { type: String, require: true },

});

const Host = mongoose.model("Host", HostSchema);

export default Host;
