const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.newPrayerAdded = functions.database
    .ref("/prayers/{userId}/{prayerId}")
    .onCreate(event => {
        return admin
            .database()
            .ref("tokens")
            .once("value")
            .then(snapshot => {
                const tokens = snapshot.val();
                for (var i in tokens) {
                    if (i === event.params.userId) {
                        continue;
                    }

                    admin
                        .messaging()
                        .sendToDevice(tokens[i], {
                            data: {
                                title: "New prayer request added",
                                message: "Somebody needs your prayer"
                            }
                        })
                        .then(function(response) {
                            // See the MessagingDevicesResponse reference documentation for
                            // the contents of response.
                            console.log("Successfully sent message:", response);
                        })
                        .catch(function(error) {
                            console.log("Error sending message:", error);
                        });
                }
            });
    });
