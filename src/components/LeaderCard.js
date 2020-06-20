import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'

import TextHeader from './TextHeader'
import LeaderStats from './LeaderStats'
import { withStyle } from '../style'

function LeaderCard ({
  userName,
  userAvatar,
  answered,
  created,
  score,
  position,
  classes: {
    cardAvatar,
    cardMedia,
    leaderCard,
    leaderCardBadge,
    leaderCardBadgeColorOne,
    leaderCardBadgeColorTwo,
    leaderCardBadgeColorThree,
    leaderCardBadgeColorDefault,
    leaderCardContent
  }
}) {
  let badgeColor

  switch (position) {
    case 1:
      badgeColor = leaderCardBadgeColorOne
      break
    case 2:
      badgeColor = leaderCardBadgeColorTwo
      break
    case 3:
      badgeColor = leaderCardBadgeColorThree
      break
    default:
      badgeColor = leaderCardBadgeColorDefault
  }

  return (
    <Badge
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      badgeContent={position}
      max={3}
      classes={{ root: leaderCardBadge, badge: badgeColor }}
    >
      <Card
        raised={true}
        classes={{ root: leaderCard }}
      >
        <CardMedia classes={{ root: cardMedia }}>
          <Avatar
            src={userAvatar}
            alt={`${userName} avatar`}
            classes={{ root: cardAvatar }}
          />
        </CardMedia>
        <Divider orientation='vertical' flexItem />
        <CardContent classes={{ root: leaderCardContent }}>
          <TextHeader text={`${userName}`} />
          <LeaderStats
            answered={answered}
            created={created}
            score={score}
          />
        </CardContent>
      </Card>
    </Badge>
  )
}

LeaderCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  answered: PropTypes.number.isRequired,
  created: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyle(LeaderCard)
