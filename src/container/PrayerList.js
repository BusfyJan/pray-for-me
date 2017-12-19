import React, { Component } from "react";
import { getAll as getAllPrayers } from "module/prayer.js";
import { add as addDeed } from "module/deed.js";
import { connect } from "react-redux";
import { notification as notificationActions } from "actions/index.js";
import { FormattedMessage } from "react-intl";
import List from "component/prayer/List.js";
import ResponseForm from "component/deed/add/Form.js";

class PrayerList extends Component {
    constructor() {
        super();

        this.state = {
            prayers: [],
            prayerIdToResponseTo: null
        };
    }

    onAddFormSubmit(deedType) {
        return new Promise((resolve, reject) => {
            addDeed(this.state.prayerIdToResponseTo, deedType);
            this.setState({ prayerIdToResponseTo: null });
            this.props.dispatch(
                notificationActions.add(
                    <FormattedMessage
                        id="container.prayerList.deedAdded"
                        defaultMessage="Deed was successfully added to prayer"
                    />
                )
            );
            resolve();
        });
    }

    componentWillMount() {
        getAllPrayers()
            .then(prayers => {
                this.setState({ prayers });
            })
            .catch(() => {
                this.props.dispatch(
                    notificationActions.add(
                        <FormattedMessage
                            id="container.prayerList.failedToRetrievePrayers"
                            defaultMessage="Failed to retrieve prayers"
                        />
                    )
                );
            });
    }

    render() {
        return (
            <div>
                <List
                    items={this.state.prayers}
                    onItemResponseRequest={id => {
                        this.setState({
                            prayerIdToResponseTo: id
                        });
                    }}
                />
                <ResponseForm
                    isOpen={this.state.prayerIdToResponseTo !== null}
                    onCancel={() => {
                        this.setState({ prayerIdToResponseTo: null });
                    }}
                    onSubmit={deedType => {
                        return this.onAddFormSubmit(deedType);
                    }}
                />
            </div>
        );
    }
}

PrayerList = connect(state => {
    return {};
})(PrayerList);

export default PrayerList;
