import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import prayers from 'constants/prayerTypes.js'

class Description extends Component {
  render() {
    const { type } = this.props
    if (type === prayers.GUIDANCE) {
      return (
        <FormattedMessage
          id="component.prayer.description.guidance"
          defaultMessage="Need for guidance and path"
        />
      )
    }

    if (type === prayers.HEALTH) {
      return (
        <FormattedMessage
          id="component.prayer.description.health"
          defaultMessage="Need to be healed physically"
        />
      )
    }

    if (type === prayers.JOY) {
      return (
        <FormattedMessage
          id="component.prayer.description.joy"
          defaultMessage="Need for joy"
        />
      )
    }

    if (type === prayers.MONEY) {
      return (
        <FormattedMessage
          id="component.prayer.description.money"
          defaultMessage="Need for money"
        />
      )
    }

    if (type === prayers.PEACE) {
      return (
        <FormattedMessage
          id="component.prayer.description.peace"
          defaultMessage="Need to feel true peace"
        />
      )
    }

    if (type === prayers.RELATIONSHIPS) {
      return (
        <FormattedMessage
          id="component.prayer.description.relationships"
          defaultMessage="Need help in relationships"
        />
      )
    }

    if (type === prayers.TIME) {
      return (
        <FormattedMessage
          id="component.prayer.description.time"
          defaultMessage="Need more time"
        />
      )
    }

    if (type === prayers.SCHOOL_AND_JOB) {
      return (
        <FormattedMessage
          id="component.prayer.description.schoolAndJob"
          defaultMessage="Need help in school or profession"
        />
      )
    }

    if (type === prayers.MOTIVATION) {
      return (
        <FormattedMessage
          id="component.prayer.description.motivation"
          defaultMessage="Need for courage and passion"
        />
      )
    }

    throw new Error('Title for type ' + type + ' not supported!')
  }
}

Description.propTypes = {
  type: PropTypes.string.isRequired
}

export default Description
