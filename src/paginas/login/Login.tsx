import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import {login} from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token:'',
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if(token != ''){
                history.push('/home')
            }
        }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){

            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!')
            }catch(error){

                alert('Dados do usuário inconsistentes. Erro ao logar!')
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="caixa">
            <Grid alignItems='center' xs={6} className="imagem-login">
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='textos2'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth className="textfield" />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className="textfield"/>
                        <Box marginTop={2} textAlign='center'>
                            
                                <Button type='submit' variant='contained' className="botao1">
                                    Logar
                                </Button>
                          
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
            <Grid xs={6}  justifyContent='center' style={{ backgroundColor: "#A0F2EE" }}>
                <img src="https://i.imgur.com/utH9zUO.jpg" alt="" className="imagem" />
            </Grid>
        </Grid>
    );
}

export default Login;