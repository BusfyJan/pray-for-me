import React, { Component } from "react";
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogContentText
} from "material-ui/Dialog";
import Button from "material-ui/Button";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
    float: right;
`;

class Info extends Component {
    getInfoText() {
        if (!this.props.isPushEnabled && !this.props.canPushBeEnabled) {
            return "Notifications are manually disabled. You can enable them in browser settings.";
        }

        if (!this.props.isPushEnabled && this.props.canPushBeEnabled) {
            return (
                <span>
                    Notifications are disabled. You can enable them by clicking
                    the button.<br />
                    <br />
                    <ButtonStyled
                        raised
                        color="primary"
                        onClick={() => {
                            this.props.onRequestPermissionClicked();
                        }}
                    >
                        Enable notifications
                    </ButtonStyled>
                </span>
            );
        }

        return "Notifications are enabled.";
    }

    render() {
        return (
            <Dialog
                open={this.props.isVisible}
                onRequestClose={() => {
                    this.props.onRequestClose();
                }}
            >
                <DialogTitle>Notifications info</DialogTitle>
                <DialogContent>
                    <DialogContentText>{this.getInfoText()}</DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }
}

export default Info;
