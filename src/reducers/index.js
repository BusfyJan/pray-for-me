import { combineReducers } from "redux";
import notification from "reducers/notification.js";
import prayer from "reducers/prayer.js";

const app = combineReducers({
    notification,
    prayer
});

export default app;
