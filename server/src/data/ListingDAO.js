import Listing from "../model/Listing.js";

class ListingDAO {
  async createListing({ hostID, address, longitude, latitude, type, description, images, length, width, height, pricing, calendar, applicationIDs, isRented }) {
    const listing = await Listing.create({ hostID, address, longitude, latitude, type, description, images, length, width, height, pricing, calendar, applicationIDs, isRented });
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
}

export default ListingDAO;