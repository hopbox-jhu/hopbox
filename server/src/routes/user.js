import express from "express";
import UserDAO from "../data/UserDAO.js";
import { hashPassword } from "../util/password.js";

const router = express.Router();
export const userDAO = new UserDAO();

router.post("/user/create", async (req, res) => {
  try {
    const { name, email, password, bio, address, profilePicture, school, occupation } = req.body;
    const existingUser = await userDAO.findUserByEmail(email);
    if (existingUser) {
      // Email is already in use
      return res.status(409).json({
        message: `Email ${email} is already in use`,
      });
    }
    const user = await userDAO.createUser({ name, email, password: hashPassword(password), bio, address, profilePicture, school, occupation });
    res.json({
      status: 201,
      message: `Successfully created user!`,
      data: user,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/user/update", async (req, res) => {
  try {
    const { email, bio, address, school, occupation } = req.body;
    const existingUser = await userDAO.findUserByEmail(email);
    if (!existingUser) {
      return res.status(404).json({
        message: `User with email ${email} not found`,
      });
    }
    const updatedUser = await userDAO.updateUserByEmail(email, { bio, address, school, occupation });
    res.json({
      status: 200,
      message: "Successfully updated user!",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//NOTE: no longer needed because getting user occurs in auth
// router.get("/getUser", async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await userDAO.getUser({ email });
//     res.json({
//       status: 200,
//       message: "Successfully retrieved user!",
//       data: user,
//     });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

export default router;