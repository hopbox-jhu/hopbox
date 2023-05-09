import Listing from "../model/Listing.js";
import Application from "../mode/Listing.js";

class ListingDAO {
  async createListing({ hostID, address, longitude, latitude, type, description, images, length, width, height, pricing, calendar, applicationIDs, isRented, renterID }) {
    const listing = await Listing.create({ hostID, address, longitude, latitude, type, description, images, length, width, height, pricing, calendar, applicationIDs, isRented, renterID });
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

  async acceptApplication(listingID, renterID) {
    const listing = await Listing.findById(listingID);
    const applications = await Application.find({ renterID: renterID });
    if (!listing) {
      throw new Error("Listing not found");
    }
    listing.renterID = renterID;
    listing.isRented = true;
    applications.accepted = "true";
    const updatedListing = await listing.save();
    await applications.save();
    return updatedListing;
  }

  async rejectApplication(renterID) {
    const applications = await Application.find({ renterID: renterID });
    applications.accepted = "false";
    const updatedApplication = await applications.save();
    return updatedApplication;
  }
}

export default ListingDAO;
