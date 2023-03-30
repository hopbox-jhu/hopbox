import express from "express";
import UserDAO from "../data/UserDAO.js";

const router = express.Router();
export const userDAO = new UserDAO();

router.post("/user", async (req, res) => {
  try {
    const { name, email, password, occupation, school, description } = req.body;
    const user = await userDAO.createUser({ name, email, password, occupation, school, description });
    res.json({
      status: 201,
      message: `Successfully created user!`,
      data: user,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/getUser", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userDAO.getUser({ email });
    res.json({
      status: 200,
      message: "Successfully retrieved user!",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;