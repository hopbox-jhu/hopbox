import User from "../model/User.js";

class UserDAO {
  async createUser({ name, email, password, bio, address, profilePicture, school, occupation, phone}) {
    profilePicture = "https://www.gravatar.com/avatar/?d=mp";
    bio = "No bio added";
    address = "No address added";
    school = "No school added";
    occupation = "No occupation added";
    phone = "No phone number added";
    const user = await User.create({ name, email, password, bio, address, profilePicture, school, occupation, phone});
    return user;
  }
  async findUserByEmail(email) {
    const user = await User.findOne({ email: email });
    return user;
  }
  async updateUserByEmail(email, { bio, address, school, occupation, phone }) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    user.bio = bio || user.bio;
    user.address = address || user.address;
    user.school = school || user.school;
    user.occupation = occupation || user.occupation;
    user.phone = phone || user.phone;
    await user.save();
    return user;
  }
  async updateUserPhotoByEmail(email, { profilePicture }) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    user.profilePicture = profilePicture || user.profilePicture;
    await user.save();
    return user;
  }
}

export default UserDAO;