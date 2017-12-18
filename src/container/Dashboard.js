import React, { Component } from "react";
import PushSettings from "container/PushSettings.js";
import PrayerCreator from "container/PrayerCreator.js";

class App extends Component {
    render() {
        return (
            <div>
                Welcome to PrayForMe app!
                <PushSettings />
                <PrayerCreator />
            </div>
        );
    }
}

export default App;
