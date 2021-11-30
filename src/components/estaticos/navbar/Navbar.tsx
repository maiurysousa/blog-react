import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
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
                    <Box style={{ cursor: "pointer ", color:"#FFE9C9" }} >
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Postagens
                            </Typography>
                        </Box>
                    </Box>


                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer ", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Temas
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer ", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Box>

                    <Box mx={1} style={{ cursor: "pointer ", color:"#FFE9C9" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Logout
                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;