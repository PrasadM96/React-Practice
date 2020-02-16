import axios from "axios";

const instance = axios.create({
  baseURL: "https://nodemcu-react.firebaseio.com"
});

export default instance;
