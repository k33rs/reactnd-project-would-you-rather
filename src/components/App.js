import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CssBaseline from '@material-ui/core/CssBaseline'

import Login from './Login'
import Dashboard from './Dashboard'

function App ({ authedUser }) {
  return (
    <Fragment>
      <CssBaseline />
      {authedUser === ''
        ? <Login />
        : <Dashboard />}
    </Fragment>
  )
}

App.propTypes = {
  authedUser: PropTypes.string.isRequired
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(App)
