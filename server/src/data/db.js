import mongoose from "mongoose";
import dotenv from "dotenv";

//dotenv.config();

//const URI = process.env.DB_URI;

//above not working so temporarily hardcoded
const URI = "mongodb+srv://hopboxjhu:0zVKfI2dGKAwvSQH@hopbox.amtsmfx.mongodb.net/?retryWrites=true&w=majority"

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export function connect() {
  mongoose.connect(URI, option);

  mongoose.connection.on("error", (err) => {
    console.log("Could not connect to MongoDB");
    console.log(err);
  });

  mongoose.connection.on("open", () => {
    console.log("Connected to MongoDB!");
  });
}

// export async function createUser(name, email, password) {
//   fetch('/user', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email,
//       password: password,
//       occupation: '',
//       school: '',
//       description: '',
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });  
// }

// export async function findUserByEmail(email) {
//   let user = null;
//   fetch(`/getUser?email=${email}`)
//     .then(res => res.json())
//     .then(data => {
//     user = data.data;
//   });
//   return user;
// }