import axios from "axios";

export const mainURL = "http://localhost:8080/api/v1";
// export const mainURL = "https://phonecasebackend.classicecommerce.com/api/v1"; 

const client = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    // baseURL: `https://phonecasebackend.classicecommerce.com/api/v1`,
});

client.interceptors.request.use(function (config) {
    config.withCredentials = true;
    return config;
}
)

export default client;