import React from 'react'
import { connect } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
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
    navbarButton,
    navbarGreetings
  }
}) {
  const onLogout = (event) => dispatch(setAuthedUser(''))

  const { navbarSpace } = useStyle()
  const insertSpacing = () => <div className={navbarSpace}></div>

  const { pathname } = useLocation()
  const selectedOrDefault = (path, Selected, Default) => (
    pathname === path
      ? <Selected />
      : <Default />
  )

  return (
    <AppBar position='sticky'>
      <Toolbar>
        {insertSpacing()}
        <IconButton
          edge='start'
          classes={{ root: navbarButton }}
          color='inherit'
          component={NavLink}
          to='/'
          exact
        >
          {selectedOrDefault('/', HomeIcon, HomeOutlinedIcon)}
        </IconButton>
        <IconButton
          classes={{ root: navbarButton }}
          color='inherit'
          component={NavLink}
          to='/add'
        >
          {selectedOrDefault('/add', AddCircleIcon, AddCircleOutlineIcon)}
        </IconButton>
        <IconButton
          classes={{ root: navbarButton }}
          color='inherit'
          component={NavLink}
          to='/leaderboard'
        >
          {selectedOrDefault('/leaderboard', StarIcon, StarBorderIcon)}
        </IconButton>
        {insertSpacing()}
        <TypoGraphy
          classes={{ root: navbarGreetings }}
          variant='body2'
        >
          Hello, {userName}
        </TypoGraphy>
        <IconButton
          classes={{ root: navbarButton }}
        >
          <Avatar src={userAvatar} alt='authedUserAvatar' />
        </IconButton>
        <Button
          classes={{ root: navbarButton }}
          color='inherit'
          onClick={onLogout}
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
