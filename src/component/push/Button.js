import React, { Component } from "react";
import styled from "styled-components";
import MaterialButton from "material-ui/Button";
import IconNotificationsNone from "material-ui-icons/NotificationsNone";
import IconNotificationsActive from "material-ui-icons/NotificationsActive";
import IconNotificationsOff from "material-ui-icons/NotificationsOff";
import IconLoading from "material-ui-icons/Cached";

const MaterialButtonStyled = styled(MaterialButton)`
    position: fixed !important;
    left: 10px;
    bottom: 10px;
`;

class Button extends Component {
    getButtonIcon() {
        if (this.props.isWorking) {
            return <IconLoading />;
        }

        if (this.props.isPushEnabled) {
            return <IconNotificationsActive />;
        }

        if (this.props.canPushBeEnabled) {
            return <IconNotificationsNone />;
        }

        return <IconNotificationsOff />;
    }

    render() {
        return (
            <MaterialButtonStyled
                onClick={() => {
                    this.props.onClick();
                }}
                fab
                color="primary"
            >
                {this.getButtonIcon()}
            </MaterialButtonStyled>
        );
    }
}

export default Button;
