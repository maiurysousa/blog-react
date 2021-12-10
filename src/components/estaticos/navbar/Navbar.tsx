import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    let history = useHistory();
    const dispatch = useDispatch(); //dispara a ação
  
    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login'); // para redireccionar a página de login
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <Box sx={{ flexGrow: 1 }}>
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

                <Link to="/tema" className="text-decorator-none">
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

                <Box paddingLeft={70} mx={1} className="cursor" onClick={() => goLogout()}>
                    <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }} >
                        logout
                    </Typography>
                </Box>


            </Toolbar>
        </AppBar>
    </Box>
    }

    return (
        <>
        {navbarComponent}
        </> 
    )
}

export default Navbar;