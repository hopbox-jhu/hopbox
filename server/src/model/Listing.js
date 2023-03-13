import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
    hostID: { type: String },
    longitude: { type: String },
    latitude: { type: String },
    type: { type: String },
    description: { type: String },
    images: { type: [String] },
    length: { type: Number },
    width: { type: Number },
    height: { type: Number },
    pricing: { type: String },
    calendar: { type: [Date] },
    renterID: { type: String}
});

const Listing = mongoose.model("Listing", ListingSchema);

export default Listing;