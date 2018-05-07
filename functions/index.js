const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp(functions.config().firebase);
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.newPrayerAdded = functions.database
    .ref("/prayers/{prayerId}")
    .onCreate((snap, context) => {
        const prayerData = snap.val();
        const userId = prayerData.userId;
        return admin
            .database()
            .ref("tokens")
            .orderByChild("notifyWhenNewPrayerRequestWasAdded")
            .equalTo(true)
            .once("value")
            .then(snapshot => {
                const tokensData = snapshot.val();
                for (var i in tokensData) {
                    if (i === userId) {
                        continue;
                    }

                    admin.messaging().sendToDevice(tokensData[i].token, {
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
    .onCreate((snap, context) => {
        return admin
            .database()
            .ref("prayers/" + context.params.prayerId)
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
                    .then(tokenData => {
                        if (
                            !tokenData || !tokenData.notifyWhenDeedWasAddedToMyPrayerRequest
                        ) {
                            return;
                        }

                        return admin.messaging().sendToDevice(tokenData.token, {
                            data: {
                                title: "New deed to your prayer request added",
                                message:
                                    "Somebody has added deed to your prayer request"
                            }
                        });
                    });
            });
    });

exports.bibleApiTest = functions.https.onRequest((request, response) => {
    axios
        .get(
            "https://sk.bibles.org/v2/search.js?query=Mahershalalhashbaz",
            {
                auth: {
                    username: 'VYOW9C8g3TjfTi1ddKXzSPJ3eZ9DOLGVKIuAaI7i',
                    password: 'X'
                }
            }
        )
        .then(resp => {
            response.set("Access-Control-Allow-Origin", "*");
            response.set("Access-Control-Allow-Methods", "GET, POST");
            response.status(200).send(resp.data.response);
        })
        .catch(err => {
            response.set("Access-Control-Allow-Origin", "*");
            response.set("Access-Control-Allow-Methods", "GET, POST");
            response.status(400).send({error: err.message});
        });
});