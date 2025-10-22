// export const localStore = localStorage;
import localforage from "localforage";
export const localStore = localforage;

export const userDB = localStore.createInstance({
    name: "usersDB",
    storeName: "users",
    driver: localforage.INDEXEDDB,
});