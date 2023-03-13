import Listing from "../model/Listing.js";

class ListingDAO {
  async createListing({ hostID, longitude, latitude, type, description, images, length, width, height, pricing, calendar, renterID }) {
    const listing = await Listing.create({ hostID, longitude, latitude, type, description, images, length, width, height, pricing, calendar, renterID });
    return listing;
  }
}

export default ListingDAO;