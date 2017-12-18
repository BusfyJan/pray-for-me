import firebase from "firebase";
import { getId as getUserId } from "module/user.js";

export const add = prayerType => {
    return firebase
        .database()
        .ref("prayers/" + getUserId())
        .push(prayerType).key;
};
