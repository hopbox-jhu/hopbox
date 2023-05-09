import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "https://hopbox-web-service.onrender.com",
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

export async function createUser(name, email, password) {
  try {
    const response = await axiosInstance.post("/user/create", {name: name, email: email, password: password});
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function updateUser(email, bio, address, school, occupation) {
  try {
    const response = await axiosInstance.post("/user/update", {email: email, bio: bio, address: address, school: school, occupation: occupation });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function login(email, password) {
  const userObj = {email: email, password: password};
  try {
    const response = await axiosInstance.post("/login", userObj);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getAuth() {
  try {
    const response = await axiosInstance.get("/isAuthorized");
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function testAuthorize(postData) {
  try {
    console.log("axios", axiosInstance.defaults.headers["Authorization"]);
    const response = await axiosInstance.post("/testAuthorize", postData);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function createListing(listing) {
  try {
    const response = await axiosInstance.post("/listing", listing);
    return response.data;
  } catch (err) {
    throw err;
  }
}
  
export async function getAllListings() {
  try {
    const response = await axiosInstance.get("/listings");
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getListingById(listingId) {
  try {
    const response = await axiosInstance.get(`/listing/${listingId}`);
    return response.data.data;
  } catch (err) {
    throw err;
  }
}

export async function setRenter(id, renterID) {
  try {
    const response = await axiosInstance.patch(`/listing/${id}`, { renterID });
    return response.data;
  } catch (err) {
    throw err;
  }
}

///APPLICATION:
export async function createApplication(application) {
  try {
    const response = await axiosInstance.post(`/applications`, application);
    return response.data;
  } catch (err) {
    throw err;
  }
}
  
export async function getAllApplications() {
  try {
    const response = await axiosInstance.get("/applications");
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getApplicationById(applicationId) {
  try {
    const response = await axiosInstance.get(`/applications/${applicationId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
}


export async function getApplicationsByListingId(listingId) {
  try {
    const response = await axiosInstance.get(`/applications/listing/${listingId}`);
    return response.data.data;
  } catch (err) {
    throw err;
  }
}

export async function getApplicationsByRenterId(renterID) {
  try {
    const response = await axiosInstance.get(`/applications/renter/${renterID}`);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function updateApplicationById(applicationId, application) {
  try {
    const response = await axiosInstance.patch(`/applications/${applicationId}`, application);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteApplicationById(applicationId) {
  try {
    const response = await axiosInstance.delete(`/applications/${applicationId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
}

// Accept application by listing ID and application ID
export async function acceptApplication(listingID, applicationID) {
  try {
    const response = await axiosInstance.patch('/acceptapplication', { listingID, applicationID });
    return response.data;
  } catch (err) {
    throw err;
  }
}

// Reject application by application ID
export async function rejectApplication(applicationID) {
  try {
    const response = await axiosInstance.patch('/rejectapplication', { applicationID });
    return response.data;
  } catch (err) {
    throw err;
  }
}

