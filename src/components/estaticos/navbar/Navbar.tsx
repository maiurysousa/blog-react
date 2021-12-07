import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useLocalStorage from 'react-use-localstorage';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    let history = useHistory(); // para redirecionar
    const [token, setToken] = useLocalStorage('token'); // para guardar o token no localstorage
    function logout() {
        setToken(''); // para apagar o token do localstorage
        history.push('/login'); // para redireccionar a página de login
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" className="color-navbar">
                    <IconButton
                        size="large"
                        edge="start"
                        style={{ color: "#FFE9C9" }}
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box paddingX={3.5} className="cursor" >
                        <Link to='/home' className='text-decoration-none'>
                            <Typography variant="h5" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                FlóreoBlog
                            </Typography>
                        </Link>
                    </Box>

                    <Link to='/home' className='text-decoration-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                postagens
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                temas
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box paddingLeft={70} mx={1} className="cursor">
                        <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }} onClick={() => logout()}>
                            logout
                        </Typography>
                    </Box>


                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;