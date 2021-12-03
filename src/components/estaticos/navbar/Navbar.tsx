import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" className="color-navbar">
                    <IconButton
                          size="large"
                          edge="start"
                          style={{ color:"#FFE9C9" }}
                          aria-label="menu"
                          sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                        <Box paddingX={3.5} className="cursor" >
                            <Typography variant="h5" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                BlogPessoal
                            </Typography>
                        </Box>
                        <Link  to='/home' className='text-decoration-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link  to='/login' className='text-decoration-none'>
                            <Box paddingLeft={70} mx={1} className="cursor">
                                <Typography variant="h6" component="div" className="fonte" sx={{ flexGrow: 1 }}>
                                    logout
                                </Typography>
                            </Box>
                        </Link>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;