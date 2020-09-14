import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';

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
  
//   function createData(name, gaveta, posicao) {
//     return { name, gaveta, posicao };
//   }
  
//   const rows = [
//     createData('Resistor 10K ohm', 1, '2A'),
//     createData('Resistor 120K ohm', 1, '2C'),
//     createData('Resistor 220K ohm', 1, '3E'),
//     createData('Resistor 4.7K ohm', 1, '5A'),
//     createData('Resistor 4.7K ohm', 1, '5A'),
//     createData('Resistor 4.7K ohm', 1, '5A'),
//     createData('Resistor 4.7K ohm', 1, '5A'),
//     createData('Resistor 4.7K ohm', 1, '5A'),
//     createData('Resistor 4.7K ohm', 1, '5A'),
//     createData('Resistor 4.7K ohm', 1, '5A'),
//   ];

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


export default function Search() {
    const classes = useStyles();
    
    const history = useHistory();
    const location = useLocation();
    const name = location.data;
    const [results, setResults] = useState([]);

    useEffect(() => {
       api.get('db')
            .then((response) => {
                setResults(response.data);
            })
            .catch(() => {
                alert('Erro ao realizar consulta! Try again 😊');
                history.goBack();
            })
    }, []);

    return (
        <div>
            <h1>Resultados</h1>
  
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
                        <StyledTableRow key={row.name}>
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
        </div>
    );
}