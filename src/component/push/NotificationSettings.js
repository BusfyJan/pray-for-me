import React, { Component } from "react";
import Switch from "material-ui/Switch";
import { FormControlLabel, FormGroup } from "material-ui/Form";
import Button from "material-ui/Button";
import styled from "styled-components";
import IconSave from "material-ui-icons/Save";
import { FormattedMessage } from "react-intl";
import Divider from "material-ui/Divider";
import CircularProgress from "component/util/CircularProgress.js";

const ButtonWrapper = styled.div`
    text-align: right;
    margin-top: 15px;
`;

class NotificationSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            notifyWhenNewPrayerRequestWasAdded:
                props.notifyWhenNewPrayerRequestWasAdded,
            notifyWhenDeedWasAddedToMyPrayerRequest:
                props.notifyWhenDeedWasAddedToMyPrayerRequest
        };
    }

    onSubmit() {
        if (this.state.isLoading) {
            return;
        }

        this.setState({ isLoading: true }, () => {
            this.props
                .onSubmit({
                    notifyWhenNewPrayerRequestWasAdded: this.state
                        .notifyWhenNewPrayerRequestWasAdded,
                    notifyWhenDeedWasAddedToMyPrayerRequest: this.state
                        .notifyWhenDeedWasAddedToMyPrayerRequest
                })
                .then(() => {
                    this.setState({ isLoading: false });
                })
                .catch(() => {
                    this.setState({ isLoading: false });
                });
        });
    }

    render() {
        return (
            <span>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={
                                    this.state
                                        .notifyWhenNewPrayerRequestWasAdded
                                }
                                onChange={event => {
                                    this.setState({
                                        notifyWhenNewPrayerRequestWasAdded:
                                            event.target.checked
                                    });
                                }}
                            />
                        }
                        label={
                            <FormattedMessage
                                id="component.push.notificationSettings.notifyWhenNewPrayerRequestWasAdded"
                                defaultMessage="Notify when new prayer request was added"
                            />
                        }
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={
                                    this.state
                                        .notifyWhenDeedWasAddedToMyPrayerRequest
                                }
                                onChange={event => {
                                    this.setState({
                                        notifyWhenDeedWasAddedToMyPrayerRequest:
                                            event.target.checked
                                    });
                                }}
                            />
                        }
                        label={
                            <FormattedMessage
                                id="component.push.notificationSettings.notifyWhenDeedWasAddedToMyPrayerRequest"
                                defaultMessage="Notify when new deed was added to my prayer request"
                            />
                        }
                    />
                </FormGroup>
                <Divider />
                <ButtonWrapper>
                    <Button
                        raised
                        dense
                        color="primary"
                        onClick={() => {
                            this.onSubmit();
                        }}
                    >
                        Save &nbsp;
                        {this.state.isLoading ? (
                            <CircularProgress
                                size={20}
                                thickness={7}
                                color="white"
                            />
                        ) : (
                            <IconSave />
                        )}
                    </Button>
                </ButtonWrapper>
            </span>
        );
    }
}

export default NotificationSettings;
