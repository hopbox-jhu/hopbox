import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
    hostID: { type: String },
    name: {type: String },
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
    applicationIDs: { type: [mongoose.Schema.Types.ObjectId], ref: 'Application'},
    isRented: { type: Boolean, default: false },
    renterID: { type: String, default: null },
    rentalStart: { type: Date, default: null},
    rentalEnd: { type: Date, default: null}
});

const Listing = mongoose.model("Listing", ListingSchema);

export default Listing;
