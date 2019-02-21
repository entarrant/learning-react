import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 3953590c77407292ed39d701251a32f6ace0776362bf4b56b5580525a864685b"
  }
});
