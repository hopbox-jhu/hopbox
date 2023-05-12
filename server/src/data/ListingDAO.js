import Listing from "../model/Listing.js";
import Application from "../model/Application.js";

class ListingDAO {
  async createListing({ hostID, address, longitude, latitude, type, description, images, length, width, height, pricing, calendar, applicationIDs, isRented, renterID, rentalStart, rentalEnd }) {
    const listing = await Listing.create({ hostID, address, longitude, latitude, type, description, images, length, width, height, pricing, calendar, applicationIDs, isRented, renterID, rentalStart, rentalEnd });
    return listing;
  }
  async getAllListings() {
    const listings = await Listing.find();
    return listings;
  }
  async getListingById(id) {
    const listing = await Listing.findById(id);
    return listing;
  }

  async addApplication(listingId, applicationId) {
    const listing = await Listing.findById(listingId);
    listing.applicationIDs.push(applicationId);
    try {
      await listing.save();
    } catch (err) {
      console.error(err);
    }
  }

  async acceptApplication(listingID, applicationID) {
    const listing = await Listing.findById(listingID);
    const applications = await Application.findById(applicationID);
    if (!listing) {
      throw new Error("Listing not found");
    }
    listing.renterID = applications.renterID;
    listing.isRented = true;
    listing.rentalStart = applications.startDate;
    listing.rentalEnd = applications.endDate;
    applications.accepted = "true";
    await listing.save();
    await applications.save();
    return listing;
  }

  async rejectApplication(applicationID) {
    const application = await Application.findById(applicationID);
    application.accepted = "false";
    await application.save();
    return application;
  }
  

}

export default ListingDAO;
