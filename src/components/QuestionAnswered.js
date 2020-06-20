import React from 'react'
import PropTypes from 'prop-types'

import CardContent from '@material-ui/core/CardContent'

import QuestionHeader from './QuestionHeader'
import QuestionResult from './QuestionResult'

import { getQuestionOptions } from '../utils/state'
import { useStyle, withStyle } from '../style'

function QuestionAnswered ({
  question,
  answer,
  classes: {
    questionList
  }
}) {
  const { questionCardContent } = useStyle()

  const {
    optionOneText,
    optionTwoText,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    answerText
  } = getQuestionOptions(question, true, answer)

  return (
    <div className={questionCardContent}>
      <CardContent classes={{ root: questionList }}>
        <QuestionHeader />
        <QuestionResult
          optionText={optionOneText}
          answerText={answerText}
        />
        <QuestionResult
          optionText={optionTwoText}
          answerText={answerText}
        />
      </CardContent>
    </div>
  )
}

QuestionAnswered.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyle(QuestionAnswered)
