import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { injectIntl, defineMessages } from 'react-intl';

import MaterialButton from '@material-ui/core/Button'
import IconAdd from '@material-ui/icons/Add'

const MaterialButtonStyled = styled(MaterialButton)`
  position: fixed !important;
  right: 7px;
  bottom: 7px;
  z-index: 2;
`

const componentMessages = defineMessages({
    title: {
        id: "component.prayer.add.button.title",
        defaultMessage: "Add new prayer request"
    }
});

class Button extends Component {
    render() {
        return <MaterialButtonStyled
            onClick={this.props.onClick}
            variant="fab"
            color="primary"
            aria-label={this.props.intl.formatMessage({...componentMessages.title})}
          >
          <IconAdd />
      </MaterialButtonStyled>;
    }
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default injectIntl(Button);
