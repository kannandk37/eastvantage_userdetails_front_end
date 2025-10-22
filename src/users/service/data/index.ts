import { userDB } from "@/core/service/storage";
import type { User } from "@/users/entity";

export class UserManager {
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