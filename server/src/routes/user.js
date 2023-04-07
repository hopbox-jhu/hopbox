import express from "express";
import UserDAO from "../data/UserDAO.js";
import { hashPassword } from "../util/password.js";

const router = express.Router();
export const userDAO = new UserDAO();

router.post("/user/create", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userDAO.createUser({ name, email, password: hashPassword(password) });
    res.json({
      status: 201,
      message: `Successfully created user!`,
      data: user,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
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