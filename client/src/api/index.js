import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5050",
});

export async function postRenterEmail() {
    try {
      const response = await axiosInstance.post('/renter');
      return response.data;
    } catch (err) {
      throw err;
    }
  }

export async function postHostEmail() {
    try {
      const response = await axiosInstance.post('/host');
      return response.data;
    } catch (err) {
      throw err;
    }
  }