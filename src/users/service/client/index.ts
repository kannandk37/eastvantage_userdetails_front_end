import axiosinstance from "@/core/service/axios";
import { userDB } from "@/core/service/storage";
import { User } from "@/users/entity";
import { userOfUserResponseDatum } from "@/users/service/data/transformer";

export default class UserService {
    getUser() {
        return new Promise<User>(async (resolve, reject) => {
            try {
                await userDB.clear();
                const response = await axiosinstance.get('/api');
                const userInfo = userOfUserResponseDatum(response.data.results[0]);
                await userDB.setItem(userInfo.id, userInfo)
                resolve(userInfo);
            } catch (error) {
                reject(error);
            }
        })
    }
}