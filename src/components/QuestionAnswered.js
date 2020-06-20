import React from 'react'
import PropTypes from 'prop-types'

import CardContent from '@material-ui/core/CardContent'

import TextHeader from './TextHeader'
import QuestionResult from './QuestionResult'

import { getQuestionOptions } from '../utils/state'
import { useStyle, withStyle } from '../style'

function QuestionAnswered ({
  question,
  answer,
  classes: { questionList }
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

  const isAnswer = (optionText) => answerText === optionText

  return (
    <div className={questionCardContent}>
      <CardContent classes={{ root: questionList }}>
        <TextHeader text='Would You Rather...' />
        <QuestionResult
          optionText={optionOneText}
          optionVotes={optionOneVotes}
          totalVotes={totalVotes}
          isAnswer={isAnswer(optionOneText)}
        />
        <QuestionResult
          optionText={optionTwoText}
          optionVotes={optionTwoVotes}
          totalVotes={totalVotes}
          isAnswer={isAnswer(optionTwoText)}
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
