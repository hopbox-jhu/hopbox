import User from "../model/User.js";

class UserDAO {
  async createUser({ name, email, password, occupation, school, description }) {
    const user = await User.create({ name, email, password, occupation, school, description })
    return user;
  }
  
}




// class UserDAO {
//   async createUser({ name, email, password, occupation, school, description }) {
//     const user = await User.create({ name, email, password, occupation, school, description });
//     return user;
//   }
//   async getUser({ email }) {
//     const user = await User.findOne({ email });
//     return user;
//   }
// }

export default UserDAO;