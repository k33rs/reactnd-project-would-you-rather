import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'

import QuestionUnanswered from './QuestionUnanswered'
import QuestionAnswered from './QuestionAnswered'

import NotFound from './QuestionNotFound'
import { withStyle, useStyle } from '../style'

function Question ({
  authedUser,
  questions,
  users,
  loading,
  classes: {
    questionCard,
    questionAvatar,
    questionCardMedia
  }
}) {
  const { questionCardBlock } = useStyle()

  // fetch question
  const { question_id: questionId } = useParams()
  const question = questions[questionId]

  if (!question) {
    return loading ? '' : <NotFound />
  }

  // fetch user name and avatar
  const {
    name: userName,
    avatarURL: userAvatar
  } = users[question.author]

  // find whether authedUser has answered
  const { answers } = users[authedUser]
  const answer = answers[questionId]
  const hasAnswered = !!answer

  return (
    <Container maxWidth='sm'>
      <Card
        raised={true}
        classes={{ root: questionCard }}
      >
        <CardHeader title={`${userName} asks:`} />
        <Divider />
        <div className={questionCardBlock}>
          <CardMedia classes={{ root: questionCardMedia }}>
            <Avatar
              src={userAvatar}
              alt={`${userName} avatar`}
              classes={{ root: questionAvatar }}
            />
          </CardMedia>
          <Divider orientation='vertical' flexItem />
          {hasAnswered
            ? <QuestionAnswered question={question} answer={answer} />
            : <QuestionUnanswered question={question} />}
        </div>
      </Card>
    </Container>
  )
}

Question.propTypes = {
  authedUser: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => state

const StyledQuestion = withStyle(Question)

export default connect(mapStateToProps)(StyledQuestion)
