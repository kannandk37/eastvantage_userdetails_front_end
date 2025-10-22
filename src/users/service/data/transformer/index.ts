import { User } from "@/users/entity";

export function userOfUserResponseDatum(userInfo: any): User {
    let user = new User();
    let id = userInfo.id?.value;
    if (id) {
        user.id = id;
    }
    let honorifics = userInfo?.name?.title;
    if (honorifics) {
        user.honorifics = honorifics;
    }
    let firstName = userInfo?.name?.first;
    if (firstName) {
        user.firstName = firstName;
    }
    let lastName = userInfo?.name?.last;
    if (lastName) {
        user.lastName = lastName;
    }
    let email = userInfo.email;
    if (email) {
        user.email = email;
    }
    let profilePic = userInfo.picture?.large;
    if (profilePic) {
        user.profilePic = profilePic;
    }
    return user;
}

export function usersOfUsersResponseDatum(userInfos: any[]): User[] {
    let users: User[] = [];
    userInfos.forEach((user: any) => user.push(userOfUserResponseDatum(user)));
    return users;
}