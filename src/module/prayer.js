import firebase from "firebase";
import { getId as getUserId } from "module/user.js";

export const add = prayerType => {
    return firebase
        .database()
        .ref("prayers")
        .push({
            type: prayerType,
            userId: getUserId()
        }).key;
};

export const getAll = () => {
    return firebase
        .database()
        .ref("prayers")
        .once("value")
        .then(rows => {
            rows = rows.val();

            if (!rows) {
                return [];
            }

            return Object.entries(rows).map(([prayerId, prayerData]) => {
                prayerData.id = prayerId;

                if (!prayerData.deeds) {
                    prayerData.deeds = [];
                } else {
                    prayerData.deeds = Object.entries(prayerData.deeds).map(
                        ([deedId, deedData]) => {
                            deedData.id = deedId;
                            return deedData;
                        }
                    );
                }

                return prayerData;
            });
        });
};
