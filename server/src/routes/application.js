import express from "express";
import ApplicationDAO from "../data/ApplicationDAO.js";

const router = express.Router();
export const applicationDAO = new ApplicationDAO();

// Create an application
router.post("/applications", async (req, res) => {
  try {
    const { hostID, renterID, listingID, startDate, endDate, hazardCheck, items, needs, protectionPlan, creditCard } = req.body;
    const application = await applicationDAO.createApplication({ hostID, renterID, listingID, startDate, endDate, hazardCheck, items, needs, protectionPlan, creditCard });

    res.json({
      status: 201,
      message: "Successfully created application!",
      data: application,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all applications
router.get("/applications", async (req, res) => {
  try {

    const applications = await applicationDAO.getAllApplications();
    res.json({
      status: 200,
      message: "Successfully retrieved all applications!",
      data: applications,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get an application by ID
router.get("/applications/:id", async (req, res) => {
  try {
    const application = await applicationDAO.getApplicationById(req.params.id);
    if (!application) {
      res.status(404).json({ message: "Application not found" });
      return;
    }
    res.json({
      status: 200,
      message: "Successfully retrieved the application!",
      data: application,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Update an application by ID
router.patch("/applications/:id", async (req, res) => {
  try {
    const { hostID, renterID, listingID, startDate, endDate, hazardCheck, items, needs, protectionPlan, creditCard } = req.body;
    const updatedApplication = await applicationDAO.updateApplication(req.params.id, { hostID, renterID, listingID, startDate, endDate, hazardCheck, items, needs, protectionPlan, creditCard });
    if (!updatedApplication) {
      res.status(404).json({ message: "Application not found" });
      return;
    }
    res.json({
      status: 200,
      message: "Successfully updated the application!",
      data: updatedApplication,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an application by ID
router.delete("/applications/:id", async (req, res) => {
  try {
    const deletedApplication = await applicationDAO.deleteApplication(req.params.id);
    if (!deletedApplication) {
      res.status(404).json({ message: "Application not found" });
      return;
    }
    res.json({
      status: 200,
      message: "Successfully deleted the application!",
      data: deletedApplication,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


// Get Application by Listing ID
router.get('/applications/listing/:listingId', async (req, res) => {
  try {
    const listingId = req.params.listingId;
    const applications = await applicationDAO.getApplicationByListingId(listingId);
    res.json({
      status: 200,
      message: `Successfully retrieved all applications for listing ${listingId}!`,
      data: applications
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get applications by renterID
router.get("/applications/renter/:id", async (req, res) => {
  try {
    const application = await applicationDAO.getApplicationByRenterId(req.params.id);
    if (!application) {
      res.status(404).json({ message: "Application not found" });
      return;
    }
    res.json({
      status: 200,
      message: "Successfully retrieved the application!",
      data: application,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


export default router;
