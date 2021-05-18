import axios from "axios";
const URL = "https://randomuser.me/api/?results=50&nat=au,us,gb";

const API = {
    getUsers: function() {
      return axios.get(URL);  
    }
};

export default API;