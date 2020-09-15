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
      backgroundColor: '#2b3251',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    container: {
      maxHeight: "100vh"
    }, 
    table: {
        minWidth: 370,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
  });

const Tabela = ({results}) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.container}>
        <Table stickyHeader className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">Componente</StyledTableCell>
                <StyledTableCell align="center">Gaveta</StyledTableCell>
                <StyledTableCell align="center">Posição</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {results.map((row) => (
                <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.number}</StyledTableCell>
                <StyledTableCell align="center">{row.position}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer> 
    )
}

export default Tabela;