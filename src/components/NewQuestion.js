import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'

import TextHeader from './TextHeader'
import { withStyle } from '../style'

import { handleAddQuestion } from '../actions/questions'

function NewQuestion ({
  dispatch,
  classes: {
    newQuestionButton,
    newQuestionCard,
    newQuestionCardText,
    questionList,
    questionCardActions,
    textCenter
  }
}) {
  const [submitted, setSubmitted] = useState(false)
  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')

  const isEitherOneEmpty = optionOneText === '' || optionTwoText === ''

  const onOptionOneChange = (event) => setOptionOneText(event.target.value)
  const onOptionTwoChange = (event) => setOptionTwoText(event.target.value)

  const onSubmit = (event) => {
    dispatch(handleAddQuestion(optionOneText, optionTwoText))
    setSubmitted(true)
  }

  return (
    submitted
      ? <Redirect to='/' />
      : (
        <Container maxWidth='sm'>
          <Card
            raised={true}
            classes={{ root: newQuestionCard }}
          >
            <CardHeader
              title='Create New Question'
              classes={{ root: textCenter }}
            />
            <Divider />
            <CardContent classes={{ root: questionList }}>
              <TextHeader text='Would You Rather...' />
              <TextField
                onChange={onOptionOneChange}
                placeholder='Enter First Option'
                value={optionOneText}
                fullWidth={true}
                variant='outlined'
                classes={{ root: newQuestionCardText }}
              />
              <TextHeader text='or' align='center' />
              <TextField
                onChange={onOptionTwoChange}
                placeholder='Enter Second Option'
                value={optionTwoText}
                fullWidth={true}
                variant='outlined'
                classes={{ root: newQuestionCardText }}
              />
            </CardContent>
            <CardActions classes={{ root: questionCardActions }}>
              <Button
                disabled={isEitherOneEmpty}
                onClick={onSubmit}
                color='primary'
                fullWidth={true}
                variant='contained'
                classes={{ root: newQuestionButton }}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </Container>
      )
  )
}

NewQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const StyledNewQuestion = withStyle(NewQuestion)

export default connect()(StyledNewQuestion)
