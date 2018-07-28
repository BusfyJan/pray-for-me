import firebase from 'firebase';
import {getId as getUserId} from 'module/user/user.js';

export const init = () => {
    const uid = getUserId();
    const userStatusDatabaseRef = firebase.database().ref('/statuses/' + uid);

    firebase.database().ref('.info/connected').on('value', function(snapshot) {
        if (snapshot.val() === false) {
            return;
        }

        userStatusDatabaseRef
        .onDisconnect()
        .set({
            isOnline: false,
            timeChanged: firebase.database.ServerValue.TIMESTAMP
        })
        .then(function() {
            userStatusDatabaseRef.set({
                isOnline: true,
                timeChanged: firebase.database.ServerValue.TIMESTAMP
            });
        });
    });
};

export const getOnlineUsers = () => {
    return firebase
        .database()
        .ref("statuses")
        .orderByChild("isOnline")
        .equalTo(true)
        .once("value")
        .then(rowsSnapshot => {
            if (!rowsSnapshot) {
                return [];
            }

            const rows = [];
            rowsSnapshot.forEach(rowSnapshot => {
                rows.push(rowSnapshot.key);
            });

            return rows;
        });
};