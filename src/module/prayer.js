import firebase from "firebase";
import { getId as getUserId } from "module/user.js";

export const add = prayerType => {
    return firebase
        .database()
        .ref("prayers/" + getUserId())
        .push(prayerType).key;
};

export const getAll = () => {
    return firebase
        .database()
        .ref("prayers")
        .once("value")
        .then(rows => {
            const allPrayers = [];
            rows = rows.val();

            if (!rows) {
                return allPrayers;
            }

            Object.entries(rows)
                .map(([userId, prayersData]) => {
                    return Object.entries(prayersData).map(
                        ([prayerId, prayerType]) => {
                            return {
                                id: prayerId,
                                userId,
                                type: prayerType
                            };
                        }
                    );
                })
                .forEach(userPrayers => {
                    userPrayers.forEach(userPrayer => {
                        allPrayers.push(userPrayer);
                    });
                });

            return allPrayers;
        });
};
