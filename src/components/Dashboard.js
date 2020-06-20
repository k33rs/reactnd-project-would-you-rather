import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PropTypes from 'prop-types'

import LinearProgress from '@material-ui/core/LinearProgress'

import NavBar from './NavBar'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Question from './Question'
import NotFound from './NotFound'

import { handleReceiveQuestions } from '../actions/questions'
import { styleProgress } from '../style'

class Dashboard extends Component {
  render () {
    return (
      <Fragment>
        <Router>
          <NavBar />
          <LinearProgress style={styleProgress(this.props.loading)} />
          <Switch>
            <Route path='/' exact component={QuestionList} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/questions/:question_id' component={Question} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    )
  }

  componentDidMount () {
    this.props.dispatch(handleReceiveQuestions())
  }
}

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Dashboard)
