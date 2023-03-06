import Renter from "../model/Renter.js";

class RenterDAO {
  // return the created deck
  async createRenterEmail({ email }) {
    const renter = await Renter.create({ email });
    return renter;
  }
}

export default RenterDAO;
