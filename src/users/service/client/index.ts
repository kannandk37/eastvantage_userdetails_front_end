import axiosinstance from "@/core/service/axios";
import { User } from "@/users/entity";
import { userOfUserResponseDatum } from "@/users/service/data/transformer";
import { UserManager } from "@/users/service/data";

export default class UserService {
    getUser() {
        return new Promise<User>(async (resolve, reject) => {
            try {
                const response = await axiosinstance.get('/api');
                const userInfo = userOfUserResponseDatum(response.data.results[0]);
                await new UserManager().persistUser(userInfo)
                resolve(userInfo);
            } catch (error) {
                reject(error);
            }
        })
    }
}