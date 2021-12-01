import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="back-page">
                <Grid alignItems="center" item xs={12} sm={6} className="imagem">

                    <Box paddingX={20} className="py-typography">
                        <Typography variant="h3" component="h2" align="center" style={{ color: "#7E4997", fontWeight: "bold", fontFamily:"Roboto Mono, monospace"}}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" component="h4" align="center" style={{ color: "#F19C9F", fontWeight: "bold", fontFamily:"Roboto Mono, monospace"}}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#7E4997", backgroundColor: "#FFE9C9", color: "#7E4997", fontFamily:"Roboto Mono, monospace", marginTop: "30px" }}>Ver Postagens</Button>
                    </Box>

                </Grid>

                <Grid item xs={12}  sm={6} style={{ backgroundColor: "#FCCBDE"}}>
                <img src="https://github.com/maiurysousa/blog-react/blob/main/src/assets/img/back-page-4.jpg?raw=true" alt="" width="300px" height="300px" className="img"/>
                </Grid>

                <Grid xs={12}>                    
                </Grid>

            </Grid>
        </>
    );
}
export default Home;