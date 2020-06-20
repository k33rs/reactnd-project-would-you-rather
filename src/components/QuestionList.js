import React, { useState } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'

import QuestionListContent from './QuestionListContent'

import { withStyle } from '../style'

function QuestionListContainer ({
  classes: {
    questionListTabs,
    indicator,
    wrapper,
    selected,
    questionListCard
  }
}) {
  const [value, setValue] = useState('1')
  const onSelect = (event, value) => setValue(value)

  return (
    <Container maxWidth='sm'>
      <TabContext value={value}>
        <AppBar
          position='sticky'
          color='inherit'
          classes={{ root: questionListTabs }}
        >
          <TabList
            onChange={onSelect}
            variant='fullWidth'
            textColor='inherit'
            indicatorColor='primary'
            classes={{ indicator }}
          >
            <Tab
              id='tab1'
              label='Unanswered'
              value={'1'}
              classes={{ wrapper, selected }}
            />
            <Tab
              id='tab2'
              label='Answered'
              value={'2'}
              classes={{ wrapper, selected }}
            />
          </TabList>
        </AppBar>
        <Card
          raised={true}
          classes={{ root: questionListCard }}
        >
          <TabPanel value={'1'}>
            <QuestionListContent answered={false} />
          </TabPanel>
          <TabPanel value={'2'}>
            <QuestionListContent answered={true} />
          </TabPanel>
        </Card>
      </TabContext>
    </Container>
  )
}

QuestionListContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyle(QuestionListContainer)
