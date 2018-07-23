import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

class Title extends Component {
  render() {
    const { type } = this.props
    if (type === 'guidance') {
      return (
        <FormattedMessage
          id="component.prayer.title.guidance"
          defaultMessage="Guidance"
        />
      )
    }

    if (type === 'health') {
      return (
        <FormattedMessage
          id="component.prayer.title.health"
          defaultMessage="Health"
        />
      )
    }

    if (type === 'joy') {
      return (
        <FormattedMessage
          id="component.prayer.title.joy"
          defaultMessage="Joy"
        />
      )
    }

    if (type === 'money') {
      return (
        <FormattedMessage
          id="component.prayer.title.money"
          defaultMessage="Money"
        />
      )
    }

    if (type === 'peace') {
      return (
        <FormattedMessage
          id="component.prayer.title.peace"
          defaultMessage="Peace"
        />
      )
    }

    if (type === 'relationships') {
      return (
        <FormattedMessage
          id="component.prayer.title.relationships"
          defaultMessage="Relationships"
        />
      )
    }

    if (type === 'time') {
      return (
        <FormattedMessage
          id="component.prayer.title.time"
          defaultMessage="Time"
        />
      )
    }

    if (type === 'schoolAndJob') {
      return (
        <FormattedMessage
          id="component.prayer.title.schoolAndJob"
          defaultMessage="School & job"
        />
      )
    }

    if (type === 'motivation') {
      return (
        <FormattedMessage
          id="component.prayer.title.motivation"
          defaultMessage="Motivation"
        />
      )
    }

    throw new Error('Title for type ' + type + ' not supported!')
  }
}

Title.propTypes = {
  type: PropTypes.string.isRequired
}

export default Title
