import React, { Component } from "react";
import {
    isSupported as isPushSupported,
    isPermissionGranted as isPushPermissionGranted,
    canPermissionBeRequested as canPushPermissionBeRequested,
    requestPermission as requestPushPermission
} from "module/push/permissions.js";
import { init as initPushToken } from "module/push/token.js";
import Button from "component/push/Button.js";
import Info from "component/push/Info.js";

class PushSettings extends Component {
    constructor() {
        super();

        this.state = {
            isWorking: false,
            isPushSupported: false,
            isPushEnabled: false,
            canPushBeRequested: false,
            isInfoVisible: false
        };
    }

    componentWillMount() {
        this.refreshPushInfo();

        if (isPushPermissionGranted()) {
            this.initPushToken();
        }
    }

    refreshPushInfo() {
        this.setState({
            isPushSupported: isPushSupported(),
            isPushEnabled: isPushPermissionGranted(),
            canPushBeEnabled: canPushPermissionBeRequested()
        });
    }

    initPushToken() {
        this.setState({ isWorking: true }, () => {
            initPushToken()
                .then(() => {
                    this.setState({ isWorking: false });
                })
                .catch(error => {
                    this.setState({ isWorking: false });
                    console.log("Token init failure", error);
                });
        });
    }

    onInfoButtonClicked() {
        if (this.state.isWorking) {
            return;
        }

        this.setState({ isInfoVisible: true });
    }

    onRequestPermissionsClicked() {
        this.setState({ isWorking: true }, () => {
            requestPushPermission()
                .then(() => {
                    this.setState({ isWorking: false }, () => {
                        this.refreshPushInfo();
                        this.initPushToken();
                    });
                })
                .catch(error => {
                    console.log("Error occured", error);
                    this.setState({ isWorking: false }, () => {
                        this.refreshPushInfo();
                    });
                });
        });
    }

    render() {
        if (!this.state.isPushSupported) {
            return null;
        }

        return (
            <div>
                <Button
                    isWorking={this.state.isWorking}
                    isPushEnabled={this.state.isPushEnabled}
                    canPushBeEnabled={this.state.canPushBeEnabled}
                    onClick={() => {
                        this.onInfoButtonClicked();
                    }}
                />
                <Info
                    isVisible={this.state.isInfoVisible}
                    isPushEnabled={this.state.isPushEnabled}
                    canPushBeEnabled={this.state.canPushBeEnabled}
                    onRequestPermissionClicked={() => {
                        this.onRequestPermissionsClicked();
                    }}
                    onRequestClose={() => {
                        this.setState({ isInfoVisible: false });
                    }}
                />
            </div>
        );
    }
}

export default PushSettings;
