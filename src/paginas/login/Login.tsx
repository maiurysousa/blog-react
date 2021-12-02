import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6} className="imagem-login">
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='textos2'>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth className="textfield" />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className="textfield"/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' className="botao1">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'style={{ fontFamily: 'Roboto Mono, monospace' }}>Não tem uma conta?</Typography>
                        </Box>

                        <Link to="/cadastrousuario" className="text-decorator-none">
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
    );
}

export default Login;