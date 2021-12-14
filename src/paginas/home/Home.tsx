import React, { useState, useEffect, ChangeEvent } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if(token == ''){
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push('/login')
        }

    },[token]);
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={12} sm={6} className="imagem1">

                    <Box paddingX={20} className="py-box1">
                        <Typography variant="h3" component="h2" align="center" className="titulo">Seja bem vinde!</Typography>
                        <Typography variant="h5" component="h4" align="center" className="titulo2">Fique à vontade para falar sobre as coisas da vida.Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        <ModalPostagem />
                        </Box>
                        <Link to="/postagens" className="text-decorator-none">
                        <Button variant="outlined" className="text-decorator-none botao">Ver Postagens</Button>
                        </Link>
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