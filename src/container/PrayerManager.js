import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  notification as notificationActions,
  prayer as prayerActions
} from 'actions/index.js'
import { getAll as getAllPrayers } from 'module/prayer.js'
import { FormattedMessage } from 'react-intl'
import RefreshButton from 'component/prayer/RefreshButton.js'
import MenuWrapper from 'component/util/MenuWrapper.js'
import Switcher from 'component/util/Switcher.js'

class PrayerManager extends Component {
  state = {
    isRefreshing: false
  }

  componentDidMount() {
    this.refresh()
  }

  componentDidUpdate(prevProps) {
    if (this.props.refreshRequests.length === 0) {
      return
    }

    if (
      this.props.refreshRequests.length === prevProps.refreshRequests.length
    ) {
      return
    }

    if (this.state.isRefreshing === true) {
      return
    }

    this.refresh()
  }

  refresh() {
    if (this.props.refreshRequests.length === 0) {
      return
    }

    this.setState({ isRefreshing: true })
    getAllPrayers()
      .then(prayers => {
        this.setState({ isRefreshing: false }, () => {
          this.props.dispatch(prayerActions.setList(prayers))
          this.props.dispatch(prayerActions.popRefreshRequest())
          if (this.wasRefreshInitiatedByUser) {
            this.wasRefreshInitiatedByUser = false
            this.props.dispatch(
              notificationActions.add(
                <FormattedMessage
                  id="container.prayerRefresher.listRefreshed"
                  defaultMessage="Prayer requests were refreshed"
                />
              )
            )
          }
        })
      })
      .catch(() => {
        this.setState({ isRefreshing: false }, () => {
          this.props.dispatch(prayerActions.setList([]))
          this.props.dispatch(prayerActions.popRefreshRequest())
          this.props.dispatch(
            notificationActions.add(
              <FormattedMessage
                id="container.prayerRefresher.failedToRetrievePrayers"
                defaultMessage="Failed to retrieve prayers"
              />
            )
          )
        })
      })
  }

  handleChangeFilter = () => {
    const newSetting = !this.props.onlyMine
    this.props.dispatch(prayerActions.setOnlyMine(newSetting))
    this.props.dispatch(
      notificationActions.add(
        newSetting ? (
          <FormattedMessage
            id="container.prayerRefresher.onlyMineTurnedOn"
            defaultMessage="Displaying only your prayer requests"
          />
        ) : (
          <FormattedMessage
            id="container.prayerRefresher.onlyMineTurnedOff"
            defaultMessage="Displaying all prayer requests"
          />
        )
      )
    )
  }

  handleSetOnlyWithoutDeeds = () => {
    const newSetting = !this.props.withoutDeeds

    this.props.dispatch(prayerActions.setOnlyWithoutDeeds(newSetting))
    this.props.dispatch(
      notificationActions.add(
        newSetting ? (
          <FormattedMessage
            id="container.prayerRefresher.onlyWithoutDeedsOn"
            defaultMessage="Displaying only prayers without deeds"
          />
        ) : (
          <FormattedMessage
            id="container.prayerRefresher.onlyMineTurnedOff"
            defaultMessage="Displaying all prayer requests"
          />
        )
      )
    )
  }

  render() {
    return (
      <React.Fragment>
        <MenuWrapper
          items={[
            {
              text: (
                <FormattedMessage
                  id="container.prayerManager.myDeeds"
                  defaultMessage="My prayer requests"
                />
              ),
              children: (
                <Switcher
                  isChecked={this.props.onlyMine}
                  switchClicked={this.handleChangeFilter}
                />
              )
            },
            {
              text: (
                <FormattedMessage
                  id="container.prayerManager.emptyDeeds"
                  defaultMessage="Prayer requests without deeds"
                />
              ),
              children: (
                <Switcher
                  isChecked={this.props.withoutDeeds}
                  switchClicked={this.handleSetOnlyWithoutDeeds}
                />
              )
            }
          ]}
        />
        <RefreshButton
          active={this.state.isRefreshing}
          onClick={() => {
            this.wasRefreshInitiatedByUser = true
            this.props.dispatch(prayerActions.addRefreshRequest())
          }}
        />
      </React.Fragment>
    )
  }
}

PrayerManager = connect(state => {
  return {
    onlyMine: state.prayer.onlyMine,
    withoutDeeds: state.prayer.withoutDeeds,
    list: state.prayer.list,
    refreshRequests: state.prayer.refreshRequests
  }
})(PrayerManager)

export default PrayerManager
