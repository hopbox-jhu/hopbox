import User from "../model/User.js";

class UserDAO {
  async createUser({ name, email, password, bio, address, profilePicture}) {
    profilePicture = "https://www.gravatar.com/avatar/?d=mp";
    bio = "No bio added";
    address = "No address added";
    const user = await User.create({ name, email, password, bio, address, profilePicture})
    return user;
  }
  async findUserByEmail(email) {
    const user = await User.findOne({ email: email });
    return user;
  }
}

export default UserDAO;