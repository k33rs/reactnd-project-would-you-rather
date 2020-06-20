import React from 'react'
import { connect } from 'react-redux'
import {
  NavLink,
  useLocation,
  useHistory
} from 'react-router-dom'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TypoGraphy from '@material-ui/core/Typography'

import HomeIcon from '@material-ui/icons/Home'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import { setAuthedUser } from '../actions/authedUser'
import { withStyle, useStyle } from '../style'

function NavBar ({
  userName,
  userAvatar,
  dispatch,
  classes: {
    navBar,
    navbarButton,
    textCenter
  }
}) {
  const { navbarSpace } = useStyle()
  const { pathname } = useLocation()
  const history = useHistory()

  const insertSpacing = () => (
    <div className={navbarSpace} />
  )

  const selectedOrDefault = (path, Selected, Default) => (
    pathname === path ? <Selected /> : <Default />
  )

  const onLogout = (event) => {
    history.replace('/')
    history.block()
    dispatch(setAuthedUser(''))
  }

  return (
    <AppBar
      position='sticky'
      classes={{ root: navBar }}
    >
      <Toolbar>
        {insertSpacing()}
        <IconButton
          color='inherit'
          edge='start'
          classes={{ root: navbarButton }}
          component={NavLink}
          to='/'
          exact
        >
          {selectedOrDefault('/', HomeIcon, HomeOutlinedIcon)}
        </IconButton>
        <IconButton
          color='inherit'
          classes={{ root: navbarButton }}
          component={NavLink}
          to='/add'
        >
          {selectedOrDefault('/add', AddCircleIcon, AddCircleOutlineIcon)}
        </IconButton>
        <IconButton
          color='inherit'
          classes={{ root: navbarButton }}
          component={NavLink}
          to='/leaderboard'
        >
          {selectedOrDefault('/leaderboard', StarIcon, StarBorderIcon)}
        </IconButton>
        {insertSpacing()}
        <TypoGraphy
          variant='body2'
          classes={{ root: textCenter }}
        >
          Hello, {userName}
        </TypoGraphy>
        <IconButton classes={{ root: navbarButton }}>
          <Avatar src={userAvatar} alt='authedUserAvatar' />
        </IconButton>
        <Button
          onClick={onLogout}
          color='inherit'
          classes={{ root: navbarButton }}
        >
          Logout
        </Button>
        {insertSpacing()}
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = ({ authedUser, users }) => {
  const {
    name: userName,
    avatarURL: userAvatar
  } = users[authedUser]
  return {
    userName,
    userAvatar
  }
}

const StyledNavBar = withStyle(NavBar)

export default connect(mapStateToProps)(StyledNavBar)
