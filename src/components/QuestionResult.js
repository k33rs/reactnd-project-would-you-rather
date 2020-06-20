import React from 'react'
import PropTypes from 'prop-types'

import Badge from '@material-ui/core/Badge'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import { withStyle } from '../style'

function QuestionResult ({
  optionText,
  answerText,
  classes: {
    questionResult,
    questionResultCard
  }
}) {
  const renderBadgeContent = (optionText) => (
    optionText === answerText
      ? <CheckCircleIcon color='primary' />
      : 0
  )

  return (
    <Badge
      badgeContent={renderBadgeContent(optionText)}
      classes={{ root: questionResult }}
    >
      <Card
        raised={true}
        classes={{ root: questionResultCard }}
      >
        <Typography
          component='p'
          color='textPrimary'
          align='center'
        >
          {optionText}
        </Typography>
      </Card>
    </Badge>
  )
}

QuestionResult.propTypes = {
  optionText: PropTypes.string.isRequired,
  answerText: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyle(QuestionResult)
