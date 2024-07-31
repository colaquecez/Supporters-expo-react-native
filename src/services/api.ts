import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mocki.io/v2/",
});

export { api };
