import React, { useState, useEffect, ChangeEvent } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if(token == ''){
            history.push('/login')
        }

    },[token]);
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={12} sm={6} className="imagem1">

                    <Box paddingX={20} className="py-box1">
                        <Typography variant="h3" component="h2" align="center" className="titulo">Seja bem vinde!</Typography>
                        <Typography variant="h5" component="h4" align="center" className="titulo2">Fique à vontade para falar sobre as coisas da vida. Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} className="caixa" >
                    <img src="https://i.imgur.com/W7NKZ8X.jpg" alt="" className="card1" />
                    <img src="https://i.imgur.com/xcim1EI.jpg" alt="" className="card2" />
                    <img src="https://i.imgur.com/QF8DNVi.jpg" alt="" className="card3" />
                </Grid>

                <Grid xs={12} className="postagens"> 
                    <TabPostagem />                  
                </Grid>

            </Grid>
        </>
    );
}
export default Home;