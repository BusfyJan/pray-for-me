import React, { Component } from 'react'
import styled from 'styled-components'

import PushSettings from 'container/PushSettings.js'
import PrayerCreator from 'container/PrayerCreator.js'
import PrayerList from 'container/PrayerList.js'
import PrayerManager from 'container/PrayerManager.js'
import NotificationDisplayer from 'container/NotificationDisplayer.js'

const Wrapper = styled.div`
  margin: 15px;
  margin-bottom: 30px;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <PushSettings />
        <PrayerCreator />
        <PrayerList />
        <PrayerManager />
        <NotificationDisplayer />
      </Wrapper>
    )
  }
}

export default App
