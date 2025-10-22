import { userDB } from "@/core/service/storage";
import type { User } from "@/users/entity";

export class UserManager {

    async persistUser(userInfo: User) {
        return new Promise<User>(async (resolve, reject) => {
            try {
                let user = await userDB.setItem(userInfo.id, userInfo)
                if (user) {
                    resolve(user);
                } else {
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    async getUserById(id: string) {
        return new Promise<User>(async (resolve, reject) => {
            try {
                let user = await userDB.getItem(id);
                if (user) {
                    resolve(user);
                } else {
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        })
    }
}