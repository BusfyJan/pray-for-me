import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

class Title extends Component {
  render() {
    const { type } = this.props
    if (type === 'prayer') {
      return (
        <FormattedMessage
          id="component.deed.title.guidance"
          defaultMessage="Prayer"
        />
      )
    }

    if (type === 'mass') {
      return (
        <FormattedMessage
          id="component.deed.title.health"
          defaultMessage="Mass"
        />
      )
    }

    if (type === 'goodDeed') {
      return (
        <FormattedMessage
          id="component.deed.title.goodDeed"
          defaultMessage="Good deed"
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
