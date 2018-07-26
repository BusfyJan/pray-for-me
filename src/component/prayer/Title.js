import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import prayers from 'constants/prayerTypes.js'

const Title = ({ type }) => {
  if (type === prayers.GUIDANCE) {
    return (
      <FormattedMessage
        id="component.prayer.title.guidance"
        defaultMessage="Guidance"
      />
    )
  }

  if (type === prayers.HEALTH) {
    return (
      <FormattedMessage
        id="component.prayer.title.health"
        defaultMessage="Health"
      />
    )
  }

  if (type === prayers.JOY) {
    return (
      <FormattedMessage id="component.prayer.title.joy" defaultMessage="Joy" />
    )
  }

  if (type === prayers.MONEY) {
    return (
      <FormattedMessage
        id="component.prayer.title.money"
        defaultMessage="Money"
      />
    )
  }

  if (type === prayers.PEACE) {
    return (
      <FormattedMessage
        id="component.prayer.title.peace"
        defaultMessage="Peace"
      />
    )
  }

  if (type === prayers.RELATIONSHIPS) {
    return (
      <FormattedMessage
        id="component.prayer.title.relationships"
        defaultMessage="Relationships"
      />
    )
  }

  if (type === prayers.TIME) {
    return (
      <FormattedMessage
        id="component.prayer.title.time"
        defaultMessage="Time"
      />
    )
  }

  if (type === prayers.SCHOOL_AND_JOB) {
    return (
      <FormattedMessage
        id="component.prayer.title.schoolAndJob"
        defaultMessage="School & job"
      />
    )
  }

  if (type === prayers.MOTIVATION) {
    return (
      <FormattedMessage
        id="component.prayer.title.motivation"
        defaultMessage="Motivation"
      />
    )
  }

  throw new Error('Title for type ' + type + ' not supported!')
}

Title.propTypes = {
  type: PropTypes.string.isRequired
}

export default Title
