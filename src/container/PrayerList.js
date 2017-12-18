import React, { Component } from "react";
import { getAll as getAllPrayers } from "module/prayer.js";
import { connect } from "react-redux";
import { notification as notificationActions } from "actions/index.js";
import { FormattedMessage } from "react-intl";

class PrayerList extends Component {
    constructor() {
        super();

        this.state = {
            prayers: []
        };
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
            <ul>
                {this.state.prayers.map(prayer => {
                    return <li key={prayer.id}>{prayer.type}</li>;
                })}
            </ul>
        );
    }
}

PrayerList = connect(state => {
    return {};
})(PrayerList);

export default PrayerList;
