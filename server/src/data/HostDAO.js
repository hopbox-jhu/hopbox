import Host from "../model/Host.js";

class HostDAO {
  async createHostEmail({ email }) {
    const host = await Host.create({ email });
    return host;
  }
}

export default HostDAO;
