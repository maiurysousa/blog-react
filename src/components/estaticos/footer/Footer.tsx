import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="texto1">Siga-me nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className="redes"/>
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className="redes"/>
                            </a>
                        </Box>
                    </Box>

                    <Box className="box2">
                    <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="texto2">© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" className='text-decorator-none' href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className="texto2" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;