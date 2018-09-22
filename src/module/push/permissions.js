import firebase from "firebase/app";
import 'firebase/messaging';

export const isSupported = () => {
    return "serviceWorker" in navigator && "PushManager" in window;
};

export const isPermissionGranted = () => {
    return isSupported() && Notification.permission === "granted";
};

export const canPermissionBeRequested = () => {
    return isSupported() && Notification.permission === "default";
};

export const requestPermission = () => {
    return firebase.messaging().requestPermission();
};
