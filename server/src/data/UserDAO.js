import User from "../model/User.js";

class UserDAO {
  async createUser({ name, email, password}) {
    const user = await User.create({ name, email, password})
    return user;
  }
  
}

export default UserDAO;