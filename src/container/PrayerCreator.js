import React, { Component } from "react";
import RequestButton from "component/prayer/add/Button.js";
import RequestForm from "component/prayer/add/Form.js";
import { add as addPrayer } from "module/prayer.js";
import { connect } from "react-redux";
import { notification as notificationActions } from "actions/index.js";
import { FormattedMessage } from "react-intl";

class PrayerCreator extends Component {
    constructor() {
        super();

        this.state = {
            isRequestFormOpen: false
        };
    }

    onAddFormSubmit(prayerType) {
        return new Promise((resolve, reject) => {
            addPrayer(prayerType);
            this.setState({ isRequestFormOpen: false });
            this.props.dispatch(
                notificationActions.add(
                    <FormattedMessage
                        id="container.prayerCreator.prayerAdded"
                        defaultMessage="Prayer request was successfully created"
                    />
                )
            );
            resolve();
        });
    }

    render() {
        return (
            <div>
                <RequestButton
                    onClick={() => {
                        this.setState({ isRequestFormOpen: true });
                    }}
                />
                <RequestForm
                    isOpen={this.state.isRequestFormOpen}
                    onSubmit={prayerType => {
                        return this.onAddFormSubmit(prayerType);
                    }}
                    onCancel={() => {
                        this.setState({ isRequestFormOpen: false });
                    }}
                />
            </div>
        );
    }
}

PrayerCreator = connect(state => {
    return {};
})(PrayerCreator);

export default PrayerCreator;
