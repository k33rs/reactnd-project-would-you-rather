import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import { withStyle } from '../style'

function QuestionListItem ({
  userName,
  userAvatar,
  questionId,
  questionPeek,
  classes: {
    questionListCardItem,
    questionListCardText
  }
}) {
  return (
    <Card raised={true} classes={{ root: questionListCardItem }}>
      <ListItem
        alignItems="flex-start"
        component={Link}
        to={`/questions/${questionId}`}
      >
        <ListItemAvatar>
          <Avatar
            src={userAvatar}
            alt={`${userName}-avatar`}
          />
        </ListItemAvatar>
        <Divider orientation='vertical' flexItem />
        <ListItemText
          classes={{ root: questionListCardText }}
          primary={
            <Fragment>
              <Typography
                component='span'
                variant='body1'
                color='textPrimary'
              >
                {`${userName} asks:`}
              </Typography>
            </Fragment>
          }
          secondary={
            <Fragment>
              <Typography
                component='span'
                variant='body2'
                color='textPrimary'
              >
              Would you rather
              </Typography>
              {` ${questionPeek}`}
            </Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="comments"
            component={Link}
            to={`/questions/${questionId}`}
          >
            <KeyboardArrowRightIcon
              fontSize='large'
              color='action'
            />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Card>
  )
}

QuestionListItem.propTypes = {
  questionId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  questionPeek: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyle(QuestionListItem)
