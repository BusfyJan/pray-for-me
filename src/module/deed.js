import firebase from "firebase";
import { getId as getUserId } from "module/user/user.js";

export const add = (prayerId, deedType) => {
    return firebase
        .database()
        .ref("prayers/" + prayerId + "/deeds")
        .push({
            type: deedType,
            userId: getUserId()
        });
};
