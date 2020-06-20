import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setAuthedUser } from '../actions/authedUser'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

import { withStyle } from '../style'

const SELECT_DEFAULT = 'Select User'

function LoginForm ({
  users,
  dispatch,
  classes: { select, loginButton }
}) {
  const [user, setUser] = useState(SELECT_DEFAULT)

  const defaultOption = user === SELECT_DEFAULT
  const userName = defaultOption ? user : users[user].name

  const onSelect = (event) => setUser(event.target.value)
  const onSubmit = (event) => dispatch(setAuthedUser(user))

  const renderSelection = (value) => (
    <Typography variant="inherit">
      {value}
    </Typography>
  )

  return (
    <Fragment>
      <CardActions>
        <Select
          onChange={onSelect}
          value={userName}
          renderValue={renderSelection}
          fullWidth={true}
          classes={ { root: select }}
        >
          <MenuItem value={SELECT_DEFAULT} disabled>Select User</MenuItem>
          {Object.values(users).map(({
            id,
            name,
            avatarURL
          }) => (
            <MenuItem key={id} value={id}>
              <ListItemAvatar>
                <Avatar src={avatarURL} alt={`avatar-${id}`} />
              </ListItemAvatar>
              {renderSelection(name)}
            </MenuItem>
          ))}
        </Select>
      </CardActions>
      <CardActions>
        <Button
          disabled={defaultOption}
          fullWidth={true}
          onClick={onSubmit}
          color='primary'
          variant='contained'
          classes={{ root: loginButton }}
        >Sign In</Button>
      </CardActions>
    </Fragment>
  )
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = ({ users }) => ({ users })
const StyledLoginForm = withStyle(LoginForm)

export default connect(mapStateToProps)(StyledLoginForm)
