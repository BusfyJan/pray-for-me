import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import PropTypes from 'prop-types'

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import { FormattedMessage } from 'react-intl'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import DoneIcon from 'material-ui-icons/Done'
import Divider from 'material-ui/Divider'
import { green, blue, orange } from 'material-ui/colors'

import CircularProgress from 'component/util/CircularProgress.js'
import PrayerIcon from 'component/prayer/Icon.js'
import PrayerTitle from 'component/prayer/Title.js'
import PrayerDescription from 'component/prayer/Description.js'
import DeedsList from 'component/deed/List.js'

const CardStyled = styled(Card)`
  margin-bottom: 25px;
`

const ActionsWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-right: 5px;
`

const OwnRequestInfoWrapper = styled.span`
  font-weight: bold;
  color: white;
  padding: 3px 5px;
  margin-left: 5px;
  background: ${orange[500]};
  border-radius: 3px;
  font-size: 0.75em;
`

const TimestampInfoWrapper = styled.span`
  font-weight: bold;
  color: white;
  padding: 3px 5px;
  margin-left: 5px;
  background: ${blue[500]};
  border-radius: 3px;
  font-size: 0.75em;
`

const UserStatusOnlineInfoWrapper = styled.span`
  font-weight: bold;
  color: white;
  padding: 3px 5px;
  margin-left: 5px;
  background: ${green[500]};
  border-radius: 3px;
  font-size: 0.75em;
`

class Item extends Component {
  state = {
    isClosing: false
  }

  render() {
    const { data, onResponseRequest, onCloseRequest } = this.props
    return (
      <CardStyled>
        <CardHeader
          avatar={<PrayerIcon type={data.type} />}
          title={
            <span>
              <PrayerTitle type={data.type} />
              {data.isMine ? (
                <OwnRequestInfoWrapper>
                  <FormattedMessage
                    id="component.prayer.item.yours"
                    defaultMessage="yours"
                  />
                </OwnRequestInfoWrapper>
              ) : data.isUserOnline ? (
                <UserStatusOnlineInfoWrapper>
                  <FormattedMessage
                    id="component.prayer.item.online"
                    defaultMessage="online"
                  />
                </UserStatusOnlineInfoWrapper>
              ) : null}
              <TimestampInfoWrapper>
                {moment(-parseInt(data.timestamp, 10))
                  .locale('sk')
                  .fromNow()}
              </TimestampInfoWrapper>
            </span>
          }
          subheader={<PrayerDescription type={data.type} />}
        />
        <Divider />
        <CardContent>
          <DeedsList items={data.deeds} />
        </CardContent>
        <Divider />
        <CardActions disableActionSpacing>
          <ActionsWrapper>
            {data.isMine ? (
              <Button
                onClick={() => {
                  if (this.state.isClosing) {
                    return
                  }

                  this.setState({ isClosing: true }, () => {
                    onCloseRequest().catch(() => {
                      this.setState({
                        isClosing: false
                      })
                    })
                  })
                }}
                variant="raised"
                size="small"
                color="primary"
              >
                <FormattedMessage
                  id="component.prayer.item.closePrayerRequest"
                  defaultMessage="Close prayer request"
                />
                &nbsp;
                {this.state.isClosing ? (
                  <CircularProgress size={20} thickness={7} color="white" />
                ) : (
                  <DoneIcon />
                )}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  onResponseRequest()
                }}
                variant="raised"
                size="small"
                color="primary"
              >
                <FormattedMessage
                  id="component.prayer.item.addDeedButton"
                  defaultMessage="Add deed"
                />
                &nbsp;
                <AddIcon />
              </Button>
            )}
          </ActionsWrapper>
        </CardActions>
      </CardStyled>
    )
  }
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
  onResponseRequest: PropTypes.func.isRequired,
  onCloseRequest: PropTypes.func.isRequired
}

export default Item
