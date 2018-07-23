import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

class Description extends Component {
  render() {
    const { type } = this.props
    if (type === 'guidance') {
      return (
        <FormattedMessage
          id="component.prayer.description.guidance"
          defaultMessage="Need for guidance and path"
        />
      )
    }

    if (type === 'health') {
      return (
        <FormattedMessage
          id="component.prayer.description.health"
          defaultMessage="Need to be healed physically"
        />
      )
    }

    if (type === 'joy') {
      return (
        <FormattedMessage
          id="component.prayer.description.joy"
          defaultMessage="Need for joy"
        />
      )
    }

    if (type === 'money') {
      return (
        <FormattedMessage
          id="component.prayer.description.money"
          defaultMessage="Need for money"
        />
      )
    }

    if (type === 'peace') {
      return (
        <FormattedMessage
          id="component.prayer.description.peace"
          defaultMessage="Need to feel true peace"
        />
      )
    }

    if (type === 'relationships') {
      return (
        <FormattedMessage
          id="component.prayer.description.relationships"
          defaultMessage="Need help in relationships"
        />
      )
    }

    if (type === 'time') {
      return (
        <FormattedMessage
          id="component.prayer.description.time"
          defaultMessage="Need more time"
        />
      )
    }

    if (type === 'schoolAndJob') {
      return (
        <FormattedMessage
          id="component.prayer.description.schoolAndJob"
          defaultMessage="Need help in school or profession"
        />
      )
    }

    if (type === 'motivation') {
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
