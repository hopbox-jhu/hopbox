import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5050",
});

export async function postRenterEmail(email) {
    try {
      const response = await axiosInstance.post('/renter',{email: email});
      return response.data;
    } catch (err) {
      throw err;
    }
  }

export async function postHostEmail(email) {
    try {
      const response = await axiosInstance.post('/host',{email: email});
      return response.data;
    } catch (err) {
      throw err;
    }
  }