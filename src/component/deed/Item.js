import React from 'react'
import PropTypes from 'prop-types'
import Badge from '@material-ui/core/Badge'
import styled from 'styled-components'

import DeedIcon from 'component/deed/Icon.js'

const BadgeStyled = styled(Badge)`
  & > span {
    width: 18px;
    height: 18px;
  }
`

const Item = ({ onClick, count, type }) => (
  <span
    onClick={() => {
      if (onClick) {
        onClick()
      }
    }}
  >
    <BadgeStyled badgeContent={count} color="primary">
      <DeedIcon type={type} />
    </BadgeStyled>
  </span>
)

Item.propTypes = {
  onClick: PropTypes.func,
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default Item
