import React, { Component } from "react";
import { getId as getUserId } from "module/user.js";
import {
    getAll as getAllPrayers,
    close as closePrayer
} from "module/prayer.js";
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
        return addDeed(this.state.prayerIdToResponseTo, deedType)
            .then(() => {
                this.setState({ prayerIdToResponseTo: null });
                this.props.dispatch(
                    notificationActions.add(
                        <FormattedMessage
                            id="container.prayerList.deedAddedSuccessfully"
                            defaultMessage="Deed was successfully added to prayer"
                        />
                    )
                );
            })
            .catch(() => {
                this.setState({ prayerIdToResponseTo: null });
                this.props.dispatch(
                    notificationActions.add(
                        <FormattedMessage
                            id="container.prayerList.deedAddingFailed"
                            defaultMessage="Deed adding failed"
                        />
                    )
                );
            });
    }

    onPrayerClose(prayerId) {
        return closePrayer(prayerId)
            .then(() => {
                this.props.dispatch(
                    notificationActions.add(
                        <FormattedMessage
                            id="container.prayerList.prayerClosedSuccessfully"
                            defaultMessage="Prayer request was successfully closed"
                        />
                    )
                );
            })
            .catch(() => {
                this.props.dispatch(
                    notificationActions.add(
                        <FormattedMessage
                            id="container.prayerList.prayerClosingFailed"
                            defaultMessage="Prayer request closing failed"
                        />
                    )
                );
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
        const userId = getUserId();

        return (
            <div>
                <List
                    items={this.state.prayers.map(prayer => {
                        prayer.isMine = userId === prayer.userId;
                        return prayer;
                    })}
                    onItemResponseRequest={prayerId => {
                        this.setState({
                            prayerIdToResponseTo: prayerId
                        });
                    }}
                    onItemCloseRequest={prayerId => {
                        return this.onPrayerClose(prayerId);
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
