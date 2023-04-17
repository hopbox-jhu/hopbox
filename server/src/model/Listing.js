import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
    hostID: { type: String },
    address: { type: String },
    longitude: { type: Number },
    latitude: { type: Number },
    type: { type: String },
    description: { type: String },
    images: { type: [String] },
    length: { type: Number },
    width: { type: Number },
    height: { type: Number },
    pricing: { type: Number },
    calendar: { type: [Date] },
    applicationIDs: { type: [String]},
    isRented: { type: Boolean }
});

const Listing = mongoose.model("Listing", ListingSchema);

export default Listing;