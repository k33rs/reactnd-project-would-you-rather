import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import QuestionHeader from './QuestionHeader'

import { getQuestionOptions } from '../utils/state'
import { handleAddAnswer } from '../actions/questions'
import { useStyle, withStyle } from '../style'

function QuestionUnanswered ({
  question,
  dispatch,
  classes: { questionCardActions }
}) {
  const [value, setValue] = useState('')

  const onSelect = (event) => setValue(event.target.value)
  const onSubmit = (event) => dispatch(handleAddAnswer(question.id, value))

  const {
    optionOneText,
    optionTwoText
  } = getQuestionOptions(question)

  const { questionCardContent } = useStyle()

  return (
    <div className={questionCardContent}>
      <CardContent>
        <QuestionHeader />
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="answers"
            name="answers"
            value={value}
            onChange={onSelect}
          >
            <FormControlLabel
              control={<Radio color='primary' />}
              value='optionOne'
              label={optionOneText}
            />
            <FormControlLabel
              control={<Radio color='primary' />}
              value='optionTwo'
              label={optionTwoText}
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions classes={{ root: questionCardActions }}>
        <Button
          disabled={value === ''}
          onClick={onSubmit}
          color='primary'
          fullWidth={true}
          variant='contained'
        >
        Submit
        </Button>
      </CardActions>
    </div>
  )
}

QuestionUnanswered.propTypes = {
  question: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const StyledQuestionUnanswered = withStyle(QuestionUnanswered)

export default connect()(StyledQuestionUnanswered)
