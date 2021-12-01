import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#FCCBDE", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "#7E4997", fontFamily:"Roboto Mono, monospace"}}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "#7E4997" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#7E4997" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#7E4997", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#FFE9C9", fontFamily:"Roboto Mono, monospace"}} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "#FFE9C9", textDecoration:"none", fontFamily:"Roboto Mono, monospace"}} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;