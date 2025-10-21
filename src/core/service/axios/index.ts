import axios from "axios";

const axiosinstance = axios.create({
    baseURL: 'https://randomuser.me',
    timeout: 9000,
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Header":
            "Origin, Content-Type, X-Requested-With, Accept, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Origin",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS,PUT,DELETE",
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

axiosinstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosinstance;
