import User from "../model/User.js";

class UserDAO {
  async createUser({ name, email, password}) {
    console.log("this is " + password);
    const user = await User.create({ name, email, password})
    return user;
  }
  async findUserByEmail(email) {
    const user = await User.findOne({ email: email });
    return user;
  }
}

export default UserDAO;