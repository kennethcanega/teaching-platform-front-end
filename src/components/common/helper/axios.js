import axios from "axios";

const instance = axios.create({

    baseURL: "/freelance-teacher"
});

export default instance;