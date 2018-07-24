import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Badge from 'material-ui/Badge'
import styled from 'styled-components'

import DeedIcon from 'component/deed/Icon.js'

const BadgeStyled = styled(Badge)`
  & > span {
    width: 18px;
    height: 18px;
  }
`

class Item extends Component {
  render() {
    const { onClick, count, type } = this.props
    return (
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
  }
}

Item.propTypes = {
  onClick: PropTypes.func,
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default Item
