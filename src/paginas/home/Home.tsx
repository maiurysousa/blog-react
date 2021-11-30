import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="back-page">
                <Grid alignItems="center" item xs={6} sm={12} className="imagem">

                    <Box paddingX={20} >
                        <Typography variant="h3" component="h3" align="center" style={{ color: "#F19C9F", fontWeight: "bold"}}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" component="h5" align="center" style={{ color: "#F19C9F", fontWeight: "bold"}}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#7E4997", backgroundColor: "#FFE9C9", color: "#7E4997" }}>Ver Postagens</Button>
                    </Box>

                </Grid>

                <Grid item xs={6}  sm={12} style={{ backgroundColor: "#7E4997" }}>
                <img src="../../assets/img/back-page-2.jpg" alt="" width="300px" height="300px" className="img"/>
                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}>                    
                </Grid>

            </Grid>
        </>
    );
}
export default Home;