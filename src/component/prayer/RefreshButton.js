import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { injectIntl, defineMessages } from 'react-intl';

import MaterialButton from 'material-ui/Button'
import IconRefresh from 'material-ui-icons/Loop'
import { green } from 'material-ui/colors'

import Rotating from 'component/util/Rotating.js'

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    position: fixed !important;
    right: 10px;
    top: 60px;
    z-index: 2;
    background: ${green[400]};

    &:hover {
      background: ${green[500]};
    }
  }
`

const componentMessages = defineMessages({
    title: {
        id: "component.prayer.refreshButton.title",
        defaultMessage: "Refresh prayer requests"
    }
});

class RefreshButton extends Component {
    render() {
        return <MaterialButtonStyled
          onClick={() => {
            if (!this.props.active) {
              this.props.onClick()
            }
          }}
          variant="fab"
          mini
          color="primary"
          aria-label={this.props.intl.formatMessage({...componentMessages.title})}
        >
          {this.props.active ? (
            <Rotating>
              <IconRefresh />
            </Rotating>
          ) : (
            <IconRefresh />
          )}
      </MaterialButtonStyled>;
    }
}

RefreshButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default injectIntl(RefreshButton);
