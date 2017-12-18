import React, { Component } from "react";
import PushSettings from "container/PushSettings.js";
import PrayerCreator from "container/PrayerCreator.js";
import { FormattedMessage } from "react-intl";

class App extends Component {
    render() {
        return (
            <div>
                <FormattedMessage
                    id="container.dashboard.welcome"
                    defaultMessage={`Welcome to PrayForMe app!`}
                />
                <PushSettings />
                <PrayerCreator />
            </div>
        );
    }
}

export default App;
