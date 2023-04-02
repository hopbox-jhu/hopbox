import User from "../model/User.js";

class UserDAO {
  async createUser({ name, email, password}) {
    const user = await User.create({ name, email, password})
    return user;
  }
  async findUserById(id) {
    const user = await User.findOne({ _id: id });
    return user;
  }
}

export default UserDAO;