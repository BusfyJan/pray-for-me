import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/messaging';
import { getId as getUserId } from "module/user/user.js";

export const init = () => {
    monitorTokenRefresh();
    return updateToken();
};

export const getSettings = () => {
    return firebase
        .database()
        .ref("tokens/" + getUserId())
        .once("value")
        .then(snapshot => {
            return snapshot.val();
        });
};

export const updateSettings = settings => {
    return firebase
        .database()
        .ref("tokens/" + getUserId())
        .update(settings);
};

const updateToken = () => {
    return firebase
        .messaging()
        .getToken()
        .then(token => {
            return saveToken(token);
        });
};

const monitorTokenRefresh = () => {
    firebase.messaging().onTokenRefresh(() => {
        updateToken();
    });
};

const saveToken = token => {
    return firebase
        .database()
        .ref("tokens/" + getUserId())
        .update({
            token
        });
};
