import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

import QuestionListItem from './QuestionListItem'
import { withStyle } from '../style'

function QuestionList ({
  questions,
  loading,
  classes: { questionList }
}) {
  return (
    <List
      disablePadding={true}
      classes={{ root: questionList }}
    >
      {loading
        ? ''
        : questions.length === 0
          ? (
            <Typography>
              No questions here, try adding a new one!
            </Typography>
          )
          : questions.map(({
            id,
            userName,
            userAvatar,
            questionPeek
          }, index) => (
            <QuestionListItem
              key={`question-${id}`}
              questionId={id}
              userName={userName}
              userAvatar={userAvatar}
              questionPeek={questionPeek}
            />
          ))
      }
    </List>
  )
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (
  { authedUser, users, questions, loading },
  { answered }
) => {
  const { answers } = users[authedUser]
  const answersIds = Object.keys(answers)

  const questionIds = Object.keys(questions).filter((id) => {
    const isAnswered = answersIds.includes(id)
    return answered ? isAnswered : !isAnswered
  })

  const questionsProp = questionIds.map((id) => {
    const {
      author,
      optionOne: { text },
      timestamp
    } = questions[id]

    const {
      name: userName,
      avatarURL: userAvatar
    } = users[author]

    const questionPeek = `${text.split(' ').slice(0, 3).join(' ')}...`

    return {
      id,
      userName,
      userAvatar,
      questionPeek,
      timestamp
    }
  }).sort((a, b) => b.timestamp - a.timestamp)

  questionsProp.forEach((question) => delete question.timestamp)

  return {
    questions: questionsProp,
    loading
  }
}

const StyledQuestionList = withStyle(QuestionList)

export default connect(mapStateToProps)(StyledQuestionList)
