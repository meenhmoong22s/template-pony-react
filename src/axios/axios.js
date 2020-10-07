import axios from "axios";

const instance = axios.create({
  baseURL: "https://learn-firebase-a9f8d.firebaseio.com",
});

export default instance;
