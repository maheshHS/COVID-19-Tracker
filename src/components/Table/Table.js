import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
  tablecontainer: {
    width: '53%',
    marginTop: '3%',
    ['@media (max-width:610px)']: { // eslint-disable-line no-useless-computed-key
    width: '80%',
  }
  },
});

const MainTable = (props) => {
  const classes = useStyles();
  const TableData = props.data;
  return (
    <TableContainer component={Paper} className={classes.tablecontainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Region/State</StyledTableCell>
            <StyledTableCell align="right">Active</StyledTableCell>
            <StyledTableCell align="right">Inactive</StyledTableCell>
            <StyledTableCell align="right">Death</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row) => (
            <StyledTableRow key={row.loc}>
              <StyledTableCell component="th" scope="row">
                {row.loc}
              </StyledTableCell>
              <StyledTableCell align="right">{row.totalConfirmed}</StyledTableCell>
              <StyledTableCell align="right">{row.discharged}</StyledTableCell>
              <StyledTableCell align="right">{row.deaths}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MainTable;
