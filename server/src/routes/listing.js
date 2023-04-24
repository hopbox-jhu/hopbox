import express from "express";
import ListingDAO from "../data/ListingDAO.js";

const router = express.Router();
export const listingDAO = new ListingDAO();

router.post("/listing", async (req, res) => {
  try {
    const { hostID, address, longitude, latitude, type, description, images, length, width, height, pricing, calendar, applicationIDs, isRented } = req.body;
    const listing = await listingDAO.createListing({ hostID, address, longitude, latitude, type, description, images, length, width, height, pricing, calendar, applicationIDs, isRented });
    res.json({
      status: 201,
      message: `Successfully created listing!`,
      data: listing,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/listings", async (req, res) => {
    try {
      const listings = await listingDAO.getAllListings();
      res.json({
        status: 200,
        message: "Successfully retrieved all listings!",
        data: listings,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

router.get("/listing/:id", async (req, res) => {
    try {
      const listing = await listingDAO.getListingById(req.params.id);
      if (!listing) {
        res.status(404).json({ message: "Listing not found" });
        return;
      }
      res.json({
        status: 200,
        message: "Successfully retrieved listing!",
        data: listing,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

export default router;