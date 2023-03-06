import express from "express";
import RenterDAO from "../data/RenterDAO.js";

const router = express.Router();
export const renterDao = new RenterDAO();

router.post("/renter", async (req, res) => {
  try {
    const { email } = req.body;
    const renter = await renterDao.createRenterEmail({ email });
    res.json({
      status: 201,
      message: `Successfully created renter email!`,
      data: renter,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
