import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import deeds from 'constants/deedTypes.js'

const Title = ({ type }) => {
  if (type === deeds.PRAYER) {
    return (
      <FormattedMessage
        id="component.deed.title.guidance"
        defaultMessage="Prayer"
      />
    )
  }

  if (type === deeds.MASS) {
    return (
      <FormattedMessage
        id="component.deed.title.health"
        defaultMessage="Mass"
      />
    )
  }

  if (type === deeds.GOOD_DEED) {
    return (
      <FormattedMessage
        id="component.deed.title.goodDeed"
        defaultMessage="Good deed"
      />
    )
  }

  throw new Error('Title for type ' + type + ' not supported!')
}

Title.propTypes = {
  type: PropTypes.string.isRequired
}

export default Title
