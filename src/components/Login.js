import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LinearProgress from '@material-ui/core/LinearProgress'

import { handleReceiveUsers } from '../actions/users'
import LoginContainer from './LoginContainer'
import { styleProgress } from '../style'

class Login extends Component {
  render () {
    return (
      <Fragment>
        <LinearProgress style={styleProgress(this.props.loading)} />
        <LoginContainer />
      </Fragment>
    )
  }

  componentDidMount () {
    this.props.dispatch(handleReceiveUsers())
  }
}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Login)
