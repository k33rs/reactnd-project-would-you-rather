import React from 'react'
import PropTypes from 'prop-types'

import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { withStyle } from '../style'

function LeaderStats ({
  answered,
  created,
  score,
  classes: {
    leaderCardScore
  }
}) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Questions answered</TableCell>
            <TableCell align='right'>{answered}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Questions created</TableCell>
            <TableCell align='right'>{created}</TableCell>
          </TableRow>
          <TableRow classes={{ root: leaderCardScore }}>
            <TableCell><strong>Score</strong></TableCell>
            <TableCell align='right'><strong>{score}</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

LeaderStats.propTypes = {
  answered: PropTypes.number.isRequired,
  created: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyle(LeaderStats)
