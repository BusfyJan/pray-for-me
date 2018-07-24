import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog'
import List, { ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

import Item from 'component/deed/Item.js'

import deeds from 'constants/deedTypes.js'

const ListItemStyled = styled(ListItem)`
  margin-top: 10px;
`

class Info extends Component {
  getInfoText(deedType, count) {
    if (deedType === deeds.MASS) {
      return (
        <FormattedMessage
          id="component.deed.info.textMass"
          defaultMessage="Mass was sacrificed {count}x for this request"
          values={{ count }}
        />
      )
    }

    if (deedType === deeds.GOOD_DEED) {
      return (
        <FormattedMessage
          id="component.deed.info.textGoodDeed"
          defaultMessage="Good deed was sacrificed {count}x for this request"
          values={{ count }}
        />
      )
    }

    if (deedType === deeds.PRAYER) {
      return (
        <FormattedMessage
          id="component.deed.info.textPrayer"
          defaultMessage="Prayer was sacrificed {count}x for this request"
          values={{ count }}
        />
      )
    }
  }

  render() {
    const { isVisible, onRequestClose, data } = this.props
    return (
      <Dialog open={isVisible} onClose={onRequestClose}>
        <DialogTitle>
          <FormattedMessage
            id="component.deed.info.title"
            defaultMessage="Deeds for this prayer request"
          />
        </DialogTitle>
        <Divider />
        <DialogContent>
          <List>
            {data.map(([deedType, deeds], index) => {
              return (
                <div key={deedType}>
                  <ListItemStyled>
                    <Item type={deedType} count={deeds.length} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography>
                      {this.getInfoText(deedType, deeds.length)}
                    </Typography>
                  </ListItemStyled>
                  <Divider />
                </div>
              )
            })}
          </List>
        </DialogContent>
      </Dialog>
    )
  }
}

Info.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

export default Info
