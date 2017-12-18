import React, { Component } from "react";
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogContentText
} from "material-ui/Dialog";
import Button from "material-ui/Button";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const ButtonStyled = styled(Button)`
    float: right;
`;

class Info extends Component {
    getInfoText() {
        if (!this.props.isPushEnabled && !this.props.canPushBeEnabled) {
            return (
                <FormattedMessage
                    id="component.prayer.info.notificationsManuallyDisabled"
                    defaultMessage={`Notifications are manually disabled. You can enable them in browser setting`}
                />
            );
        }

        if (!this.props.isPushEnabled && this.props.canPushBeEnabled) {
            return (
                <span>
                    <FormattedMessage
                        id="component.prayer.info.notificationsDisabled"
                        defaultMessage={`Notifications are disabled. You can enable them by clicking the button`}
                    />
                    <br />
                    <br />
                    <ButtonStyled
                        raised
                        color="primary"
                        onClick={() => {
                            this.props.onRequestPermissionClicked();
                        }}
                    >
                        <FormattedMessage
                            id="component.prayer.info.enableNotifications"
                            defaultMessage={`Enable notifications`}
                        />
                    </ButtonStyled>
                </span>
            );
        }

        return (
            <FormattedMessage
                id="component.prayer.info.notificationsEnabled"
                defaultMessage={`Notifications are enabled`}
            />
        );
    }

    render() {
        return (
            <Dialog
                open={this.props.isVisible}
                onClose={() => {
                    this.props.onRequestClose();
                }}
            >
                <DialogTitle>
                    <FormattedMessage
                        id="component.prayer.info.title"
                        defaultMessage={`Notifications info`}
                    />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{this.getInfoText()}</DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }
}

export default Info;
