import { navigateToFallback } from "@/utils";
import axios from "axios";

const axiosinstance = axios.create({
    baseURL: 'https://randomuser.me',
    timeout: 9000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

axiosinstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const status = error.response?.status;

        if (!status) {
            navigateToFallback();
            return Promise.reject(error);
        }
        if (
            (status >= 500) || ([400, 408, 429].includes(status)) // 500 series - server error, 400 - Bad Request, 408 - Request Timeout, 429 - Too Many Requests
        ) {
            navigateToFallback();
        }
        return Promise.reject(error);
    }
);

export default axiosinstance;
