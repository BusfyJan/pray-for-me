import firebase from "firebase/app";
import 'firebase/database';
import {init as initStatus} from 'module/user/status.js';

export const init = async () => {
    let id = getId();

    if (!id || !await checkId(id)) {
        id = createNewId();
        saveId(id);
    }
    
    initStatus();
};

export const getId = () => {
    return window.localStorage.userId;
};

const createNewId = () => {
    return firebase
        .database()
        .ref("users")
        .push(true).key;
};

const saveId = id => {
    window.localStorage.userId = id;
};

const checkId = id => {
    return firebase
        .database()
        .ref("users/" + id)
        .once("value")
        .then(snapshot => {
            return snapshot.val() === true;
        });
};
