import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
    hostID: { type: String },
    longitude: { type: String },
    latitude: { type: String },
    type: { type: String },
    description: { type: String },
    images: { type: [String] },
    length: { type: Integer },
    width: { type: Integer },
    height: { type: Integer },
    pricing: { type: String },
    calendar: { type: [DateTime] },
    renterID: { type: String}
});

const Listing = mongoose.model("Listing", ListingSchema);

export default Listing;