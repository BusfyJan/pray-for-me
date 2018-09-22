import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Item from 'component/prayer/Item.js'

const PaperStyled = styled(Paper)`
  && {
    padding: 15px;
  }
`

const List = ({ items, onItemResponseRequest, onItemCloseRequest }) => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <PaperStyled>
        <Typography type="headline" component="h3">
          <FormattedMessage
            id="component.prayer.list.heading"
            defaultMessage="Prayer requests"
          />
        </Typography>
        <Typography component="p">
          <FormattedMessage
            id="component.prayer.list.subheading1"
            defaultMessage="Here you can see all prayer requests which need deeds to be added to them"
          />
        </Typography>
        <Typography component="p">
          <FormattedMessage
            id="component.prayer.list.subheading2"
            defaultMessage="You can add deed by clicking the button on the bottom of each prayer request"
          />
        </Typography>
      </PaperStyled>
    </Grid>
    {items.map(prayer => {
      return (
        <Grid key={prayer.id} item xs={12} sm={6} md={4} lg={3}>
          <Item
            data={prayer}
            onResponseRequest={() => {
              onItemResponseRequest(prayer.id)
            }}
            onCloseRequest={() => {
              return onItemCloseRequest(prayer.id)
            }}
          />
        </Grid>
      )
    })}
  </Grid>
)

List.propTypes = {
  items: PropTypes.array.isRequired,
  onItemResponseRequest: PropTypes.func.isRequired,
  onItemCloseRequest: PropTypes.func.isRequired
}

export default List
