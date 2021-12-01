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

                        <Box paddingX={3.5} style={{ cursor: "pointer ", color:"#FFE9C9"}} >
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}  style={{fontFamily:"Roboto Mono, monospace" }}>
                                BlogPessoal
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily:"Roboto Mono, monospace" }}>
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily:"Roboto Mono, monospace" }}>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily:"Roboto Mono, monospace" }}>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily:"Roboto Mono, monospace" }}>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box paddingLeft={70} mx={1} style={{ cursor: "pointer", color:"#FFE9C9" }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily:"Roboto Mono, monospace" }}>
                                logout
                            </Typography>
                        </Box>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;