import axios from "axios";

const url = "https://wookie.codesubmit.io";
const token = "Bearer Wookie2021";

axios.defaults.baseURL = url;
axios.defaults.headers.common["Authorization"] = token;

const apikey = {
    getAll() {
        return axios.get("/movies");
    },

    search(text) {
        return axios.get("/movies", {param: { q: text } }); 
    },
};

export default apikey;