import { notification as notificationActions } from "actions/index.js";
const defaultState = { notifications: [] };

const notification = (state = defaultState, action = null) => {
    switch (action.type) {
        case notificationActions.ADD:
            const notificationsToAdd = state.notifications.slice();
            notificationsToAdd.push(action.message);
            return Object.assign({}, state, {
                notifications: notificationsToAdd
            });

        case notificationActions.POP:
            const notificationsToPop = state.notifications.slice();
            notificationsToPop.shift();
            return Object.assign({}, state, {
                notifications: notificationsToPop
            });
        default:
            return state;
    }
};

export default notification;
