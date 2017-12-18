import { combineReducers } from "redux";
import notification from "reducers/notification.js";

const app = combineReducers({
    notification
});

export default app;
