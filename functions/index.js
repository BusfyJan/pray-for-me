const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.newPrayerAdded = functions.database
    .ref("/prayers/{prayerId}")
    .onCreate(event => {
        const prayerData = event.data.val();
        const userId = prayerData.userId;
        return admin
            .database()
            .ref("tokens")
            .once("value")
            .then(snapshot => {
                const tokens = snapshot.val();
                for (var i in tokens) {
                    if (i === userId) {
                        continue;
                    }

                    admin.messaging().sendToDevice(tokens[i], {
                        data: {
                            title: "New prayer request added",
                            message: "Somebody needs your prayer"
                        }
                    });
                }
            });
    });

exports.newDeedAdded = functions.database
    .ref("/prayers/{prayerId}/deeds/{deedId}")
    .onCreate(event => {
        return admin
            .database()
            .ref("prayers/" + event.params.prayerId)
            .once("value")
            .then(snapshot => {
                const prayerData = snapshot.val();
                return prayerData.userId;
            })
            .then(userId => {
                return admin
                    .database()
                    .ref("tokens/" + userId)
                    .once("value")
                    .then(snapshot => {
                        return snapshot.val();
                    })
                    .then(token => {
                        return admin.messaging().sendToDevice(token, {
                            data: {
                                title: "New deed to your prayer request added",
                                message:
                                    "Somebody has added deed to your prayer request"
                            }
                        });
                    });
            });
    });
