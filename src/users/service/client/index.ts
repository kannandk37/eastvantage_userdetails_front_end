import axiosinstance from "@/core/service/axios";
import { localStore } from "@/core/service/storage";
import { User } from "@/users/entity";
import { userOfUserResponseDatum } from "@/users/service/data";

export default class UserService {
    getUser() {
        return new Promise<User>(async (resolve, reject) => {
            try {
                const response = await axiosinstance.get('/api');
                const userInfo = userOfUserResponseDatum(response.data.results[0]);
                localStore.setItem('user', JSON.stringify(userInfo))
                resolve(userInfo);
            } catch (error) {
                reject(error);
            }
        })
    }
}