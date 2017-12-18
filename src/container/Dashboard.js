import React, { Component } from "react";
import PushSettings from "container/PushSettings.js";
import PrayerCreator from "container/PrayerCreator.js";
import PrayerList from "container/PrayerList.js";
import NotificationDisplayer from "container/NotificationDisplayer.js";

class App extends Component {
    render() {
        return (
            <div>
                <PushSettings />
                <PrayerCreator />
                <NotificationDisplayer />
                <PrayerList />
            </div>
        );
    }
}

export default App;
