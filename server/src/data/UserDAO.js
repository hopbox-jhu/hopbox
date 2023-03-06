import User from "../model/User.js";

class UserDAO {
  async createUser({ name, email, password, occupation, school, description }) {
    const user = await User.create({ name, email, password, occupation, school, description });
    return user;
  }
}

export default UserDAO;