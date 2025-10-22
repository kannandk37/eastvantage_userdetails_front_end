import localforage from "localforage";
export const localStore = localforage;

export const userDB = localStore.createInstance({
    name: "admin",
    storeName: "users",
    driver: localforage.INDEXEDDB,
});