import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { withStyle } from '../style'

function NotFound ({ classes: { questionNotFound } }) {
  return (
    <Container maxWidth='sm'>
      <Typography classes={{ root: questionNotFound }}
        color='primary'
        variant='h2'
        align='center'
      >
          404 Not Found
      </Typography>
    </Container>
  )
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyle(NotFound)
