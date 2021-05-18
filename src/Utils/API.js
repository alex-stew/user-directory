import axios from "axios";
const URL = "https://randomuser.me/api/?results=24";

const API = {
    getUsers: function() {
      return axios.get(URL);  
    }
};

export default API;