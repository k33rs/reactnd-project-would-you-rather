import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'

import { useStyle, withStyle } from '../style'

function QuestionResultBar ({
  voteRatio,
  classes: { questionResultBar }
}) {
  const {
    questionResultBarContainer,
    questionResultBarLabel
  } = useStyle()

  return (
    <div className={questionResultBarContainer}>
      <Grid item xs='auto'>
        <div className={questionResultBarLabel}>
          <span>{voteRatio} %</span>
        </div>
        <LinearProgress
          variant='determinate'
          value={Number(voteRatio)}
          classes={{ root: questionResultBar }}
        />
      </Grid>
    </div>
  )
}

QuestionResultBar.propTypes = {
  voteRatio: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyle(QuestionResultBar)
