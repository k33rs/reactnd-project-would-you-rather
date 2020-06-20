import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import LeaderCard from './LeaderCard'
import { withStyle } from '../style'

function LeaderBoard ({
  stats,
  loading,
  classes: { fullWidthTop }
}) {
  return (
    <Container maxWidth='sm'>
      <List
        disablePadding={true}
        classes={{ root: fullWidthTop }}
      >
        {loading
          ? ''
          : stats.map(({
            id,
            name,
            avatarURL,
            answered,
            created,
            score
          }, index) => (
            <ListItem key={id}>
              <LeaderCard
                userName={name}
                userAvatar={avatarURL}
                answered={answered}
                created={created}
                score={score}
                position={index + 1}
              />
            </ListItem>
          ))
        }
      </List>
    </Container>
  )
}

LeaderBoard.propTypes = {
  stats: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = ({ users, loading }) => {
  const stats = Object.values(users).map(({
    id,
    name,
    avatarURL,
    answers,
    questions
  }) => {
    const answered = Object.keys(answers).length
    const created = questions.length
    const score = answered + created
    return {
      id,
      name,
      avatarURL,
      answered,
      created,
      score
    }
  }).sort((a, b) => (b.score - a.score))

  return {
    stats,
    loading
  }
}

const StyledLeaderBoard = withStyle(LeaderBoard)

export default connect(mapStateToProps)(StyledLeaderBoard)
