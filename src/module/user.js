import firebase from "firebase";

export const init = async () => {
    let id = getId();

    if (!id || !await checkId(id)) {
        id = createNewId();
        saveId(id);
    }
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
