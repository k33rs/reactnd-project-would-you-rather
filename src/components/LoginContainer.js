import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'

import LoginForm from './LoginForm'
import { withStyle } from '../style'
import logoImg from '../resources/logo.jpg'

function LoginContainer ({
  classes: {
    loginContainer,
    loginCard,
    loginCardHeader,
    loginCardSubheader,
    logo
  }
}) {
  return (
    <Container
      maxWidth='sm'
      classes={{ root: loginContainer }}
    >
      <Card
        raised={true}
        classes={{ root: loginCard }}
      >
        <CardHeader
          title='Welcome to Would You Rather!'
          subheader='Please sign in to continue'
          classes={{
            root: loginCardHeader,
            subheader: loginCardSubheader
          }}
        />
        <Divider />
        <CardMedia
          image={logoImg}
          classes={{ root: logo }}
        />
        <LoginForm />
      </Card>
    </Container>
  )
}

LoginContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyle(LoginContainer)
