import axios from "axios";
import api from "../_actions/values";

export default axios.create({
  baseURL: api,
  headers: {
    "Content-type": "application/json"
  }
});
