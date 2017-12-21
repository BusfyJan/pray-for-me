import firebase from "firebase";
import { getId as getUserId } from "module/user.js";

export const add = prayerType => {
    return firebase
        .database()
        .ref("prayers")
        .push({
            type: prayerType,
            userId: getUserId(),
            timestamp: firebase.database.ServerValue.TIMESTAMP
        })
        .then(createdSnapshot => {
            return firebase
                .database()
                .ref("prayers/" + createdSnapshot.key)
                .once("value")
                .then(snapshot => {
                    return {
                        ...snapshot.val(),
                        id: snapshot.key
                    };
                });
        })
        .then(prayer => {
            return firebase
                .database()
                .ref("prayers/" + prayer.id)
                .update({
                    timestamp: -1 * prayer.timestamp
                });
        });
};

export const close = prayerId => {
    return firebase
        .database()
        .ref("prayers/" + prayerId)
        .update({ timestamp: 0 });
};

export const getAll = () => {
    return firebase
        .database()
        .ref("prayers")
        .orderByChild("timestamp")
        .endAt(-1)
        .once("value")
        .then(rowsSnapshot => {
            if (!rowsSnapshot) {
                return [];
            }

            const rows = [];
            rowsSnapshot.forEach(rowSnapshot => {
                rows.push({
                    ...rowSnapshot.val(),
                    id: rowSnapshot.key
                });
            });

            return rows;
        })
        .then(rows => {
            return rows.map(prayerData => {
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
