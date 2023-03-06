import Host from "../model/Host.js";

class HostDAO {
  // return the created deck
  async createHostEmail({ email }) {
    const host = await Host.create({ email });
    return host;
  }
}

export default HostDAO;
