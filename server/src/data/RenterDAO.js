import Renter from "../model/Renter.js";

class RenterDAO {
  async createRenterEmail({ email }) {
    const renter = await Renter.create({ email });
    return renter;
  }
}

export default RenterDAO;
