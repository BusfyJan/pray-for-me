import React, { Component } from "react";
import PushSettings from "container/PushSettings.js";
import PrayerCreator from "container/PrayerCreator.js";
import PrayerList from "container/PrayerList.js";
import PrayerManager from "container/PrayerManager.js";
import NotificationDisplayer from "container/NotificationDisplayer.js";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 15px;
    margin-bottom: 30px;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <PushSettings />
                <PrayerCreator />
                <PrayerList />
                <PrayerManager />
                <NotificationDisplayer />
            </Wrapper>
        );
    }
}

export default App;
