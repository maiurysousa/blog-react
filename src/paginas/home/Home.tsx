import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={12} sm={6} className="imagem1">

                    <Box paddingX={20} className="py-box1">
                        <Typography variant="h3" component="h2" align="center" className="titulo">Seja bem vinde!</Typography>
                        <Typography variant="h5" component="h4" align="center" className="titulo2">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>

                </Grid>

                <Grid item xs={12} sm={6} className="imagem2">
                
                </Grid>

                <Grid xs={12} className="postagens">                    
                </Grid>

            </Grid>
        </>
    );
}
export default Home;