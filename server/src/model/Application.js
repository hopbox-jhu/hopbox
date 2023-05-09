import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    hostID: String,
    renterID: String,
    listingID: String,
    startDate: Date,
    endDate: Date,
    hazardCheck: Boolean,
    items: String,
    needs: String,
    protectionPlan: Boolean,
    accepted: {type: String, default: null},
    creditCard: {
        cardNumber: String,
        cvc: String,
        expiry: String,
        name: String,
        address: String
    }    
});

const Application = mongoose.model("Application", ApplicationSchema);

export default Application;