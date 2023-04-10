import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    hostID: String,
    renterID: { type: String },
    listingID: { type: String },
    startDate: Date,
    endDate: Date,
    hazardCheck: Boolean,
    items: String,
    needs: String,
    protectionPlan: Boolean,
    creditCard: String,
});

const Application = mongoose.model("Application", ApplicationSchema);

export default Application;