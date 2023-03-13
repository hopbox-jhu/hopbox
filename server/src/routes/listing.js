import express from "express";
import ListingDAO from "../data/ListingDAO.js";

const router = express.Router();
export const listingDAO = new ListingDAO();

router.post("/listing", async (req, res) => {
  try {
    const { hostID, longitude, latitude, type, description, images, length, width, height, pricing, calendar, renterID } = req.body;
    const listing = await listingDAO.createListing({ hostID, longitude, latitude, type, description, images, length, width, height, pricing, calendar, renterID });
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
  

export default router;