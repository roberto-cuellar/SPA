import React from 'react';
import {Outlet } from "react-router-dom"
import { Header } from "./componentes/common/Header";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { useTheme,ThemeProvider, createTheme } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Typography from '@mui/material/Typography';



function App() {

  const [mode, setMode] = React.useState('dark');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
      sx={{
        backgroundColor: 'background.default',
        padding: 1,
        margin: -1,
        width: '100%',
        height: '100%',
        position: 'fixed',
        overflow: 'scroll'
        }}>
        <Header setMode={setMode} theme={theme} mode={mode}/>
        <Outlet />
        <Typography my={2} color='action.selected'>Desarrollado por Roberto Cuellar 2022</Typography>
      </Box>
    </ThemeProvider>   
  );
}

export default App;
