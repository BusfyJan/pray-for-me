import firebase from "firebase";
import { getId as getUserId } from "module/user.js";

export const init = () => {
    monitorTokenRefresh();
    return updateToken();
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
        .set({
            token,
            enabled: true
        });
};
