import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import Tabela from '../../components/Tabela'
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      marginTop: "15%",
      marginLeft: "50%"
    },
  }));

export default function Search() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const name = location.data;
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(name);

    useEffect(() => {
       api.get('db', {
            params: {
                name
            }
       })
        .then((response) => {
            setComponents(response.data);
            setLoading(false);
        })
        .catch(() => {
            alert('Erro ao realizar consulta! Try again 😊');
            history.goBack();
        })
    }, []);

    return (
        (loading ? 
            ( <div className={classes.root}>
                <CircularProgress />
              </div>)
            : 
            (
                <div className="content-search">
                <h1>Resultados</h1>
                { (components.length === 0) ?
                    ( 
                    <div className="message-info">
                        <h2>⚠ Nenhum componente encontrado</h2>                    
                    </div>
                    )
                : <Tabela results = {components} /> 
                }
                </div>      
            )
        )        
    );
}