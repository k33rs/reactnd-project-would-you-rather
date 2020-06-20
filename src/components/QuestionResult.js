import React from 'react'
import PropTypes from 'prop-types'
import BigNumber from 'bignumber.js'

import Badge from '@material-ui/core/Badge'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import QuestionResultBar from './QuestionResultBar'
import { withStyle } from '../style'

function QuestionResult ({
  optionText,
  optionVotes,
  totalVotes,
  isAnswer,
  classes: {
    fullWidthTop,
    questionResultCard
  }
}) {
  const voteRatio = BigNumber(optionVotes).div(totalVotes).times(100).toFixed(0)

  return (
    <Badge
      badgeContent={isAnswer ? <CheckCircleIcon color='primary' /> : 0}
      classes={{ root: fullWidthTop }}
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
        <QuestionResultBar
          voteRatio={voteRatio}
        />
        <Typography
          align='center'
          display='block'
          variant='caption'
        >
          {`${optionVotes} out of ${totalVotes} votes`}
        </Typography>
      </Card>
    </Badge>
  )
}

QuestionResult.propTypes = {
  optionText: PropTypes.string.isRequired,
  optionVotes: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  isAnswer: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyle(QuestionResult)
