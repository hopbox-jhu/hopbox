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
}

export default ListingDAO;