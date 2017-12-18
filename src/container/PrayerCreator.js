import React, { Component } from "react";
import AddButton from "component/prayer/AddButton.js";
import AddForm from "component/prayer/AddForm.js";
import { add as addPrayer } from "module/prayer.js";
import { connect } from "react-redux";
import { notification as notificationActions } from "actions/index.js";
import { FormattedMessage } from "react-intl";

class PrayerCreator extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    onAddFormSubmit(prayerType) {
        return new Promise((resolve, reject) => {
            addPrayer(prayerType);
            this.setState({ isOpen: false });
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
                <AddButton
                    onClick={() => {
                        this.setState({ isOpen: true });
                    }}
                />
                <AddForm
                    isOpen={this.state.isOpen}
                    onSubmit={prayerType => {
                        return this.onAddFormSubmit(prayerType);
                    }}
                    onCancel={() => {
                        this.setState({ isOpen: false });
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
