import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import MaterialButton from "material-ui/Button";
import IconNotificationsNone from "material-ui-icons/NotificationsNone";
import IconNotificationsActive from "material-ui-icons/NotificationsActive";
import IconNotificationsOff from "material-ui-icons/NotificationsOff";
import IconLoading from "material-ui-icons/Cached";

const MaterialButtonStyled = styled(MaterialButton)`
    position: fixed !important;
    right: 75px;
    bottom: 18px;
    z-index: 2;
`;

const animationKeyframe = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`;

const IconLoadingRotating = styled(IconLoading)`
    animation: ${animationKeyframe} 1s linear infinite;
`;

class Button extends Component {
    getButtonIcon() {
        if (this.props.isWorking) {
            return <IconLoadingRotating />;
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
                mini
                color="accent"
            >
                {this.getButtonIcon()}
            </MaterialButtonStyled>
        );
    }
}

export default Button;
