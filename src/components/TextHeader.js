import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

function TextHeader ({ text, align }) {
  return (
    <Typography
      component='p'
      variant='h5'
      color='textPrimary'
      align={align || 'inherit'}
    >
      {text}
    </Typography>
  )
}

TextHeader.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string
}

export default TextHeader
