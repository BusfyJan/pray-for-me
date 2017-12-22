import React, { Component } from "react";
import { connect } from "react-redux";
import {
    notification as notificationActions,
    prayer as prayerActions
} from "actions/index.js";
import { getAll as getAllPrayers } from "module/prayer.js";
import { FormattedMessage } from "react-intl";
import RefreshButton from "component/prayer/RefreshButton.js";
import FilterMineButton from "component/prayer/FilterMineButton.js";

class PrayerManager extends Component {
    constructor() {
        super();

        this.state = {
            isRefreshing: false
        };
    }

    componentDidMount() {
        this.refresh();
    }

    componentDidUpdate(prevProps) {
        if (this.props.refreshRequests.length === 0) {
            return;
        }

        if (
            this.props.refreshRequests.length ===
            prevProps.refreshRequests.length
        ) {
            return;
        }

        if (this.state.isRefreshing === true) {
            return;
        }

        this.refresh();
    }

    refresh() {
        if (this.props.refreshRequests.length === 0) {
            return;
        }

        this.setState({ isRefreshing: true });
        getAllPrayers()
            .then(prayers => {
                this.setState({ isRefreshing: false }, () => {
                    this.props.dispatch(prayerActions.setList(prayers));
                    this.props.dispatch(prayerActions.popRefreshRequest());
                });
            })
            .catch(() => {
                this.setState({ isRefreshing: false }, () => {
                    this.props.dispatch(prayerActions.setList([]));
                    this.props.dispatch(prayerActions.popRefreshRequest());
                    this.props.dispatch(
                        notificationActions.add(
                            <FormattedMessage
                                id="container.prayerRefresher.failedToRetrievePrayers"
                                defaultMessage="Failed to retrieve prayers"
                            />
                        )
                    );
                });
            });
    }

    render() {
        return (
            <div>
                <FilterMineButton
                    active={this.props.onlyMine}
                    onClick={() => {
                        this.props.dispatch(
                            prayerActions.setOnlyMine(!this.props.onlyMine)
                        );
                    }}
                />
                <RefreshButton
                    active={this.state.isRefreshing}
                    onClick={() => {
                        this.props.dispatch(prayerActions.addRefreshRequest());
                    }}
                />
            </div>
        );
    }
}

PrayerManager = connect(state => {
    return {
        onlyMine: state.prayer.onlyMine,
        list: state.prayer.list,
        refreshRequests: state.prayer.refreshRequests
    };
})(PrayerManager);

export default PrayerManager;
