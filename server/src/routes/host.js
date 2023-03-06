import express from "express";
import HostDAO from "../data/HostDAO.js";

const router = express.Router();
export const hostDao = new HostDAO();

router.post("/host", async (req, res) => {
  try {
    const { email } = req.body;
    const host = await hostDao.createHostEmail({ email });
    res.json({
      status: 201,
      message: `Successfully created host email!`,
      data: host,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
